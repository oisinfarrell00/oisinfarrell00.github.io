import { getInterests } from "./switchBoardInterests";

// Interfaces
export interface EssayMetadata {
  id: string;
  title: string;
  date: string;
  type: string;
  status: string;
  category: string;
  description: string;
  excerpt: string;
}

export interface EntryMetadata {
  id: string;
  title: string;
  date: string;
  type: string;
  excerpt: string;
  status: string;
}

interface CategoryConfig {
  displayTitle: string;
  description: string;
  iconName: 'TrendingUp' | 'FileText' | 'BookOpen';
  status: string;
}

export interface TopicData {
  title: string;
  iconName: string;
  description: string;
  entries: EntryMetadata[];
  status: string;
}


// Define the shape
type CategoryConfigMap = Record<string, CategoryConfig>;

/**
 * Gold Standard: Memoized Getter
 * This ensures the data is only processed once, but only when actually needed.
 */
let _cachedConfig: CategoryConfigMap | null = null;

export function getCategoryConfig2(): CategoryConfigMap {
  if (_cachedConfig) return _cachedConfig;

  const interests = getInterests();
  
  _cachedConfig = interests.reduce((acc, interest) => ({
    ...acc,
    [interest.key]: {
      displayTitle: interest.title,
      description: interest.description,
      iconName: 'FileText',
      status: interest.status
    }
  }), {} as CategoryConfigMap);

  return _cachedConfig;
}


const modules = import.meta.glob('./essays/**/*.md', { eager: true });

const essays = Object.keys(modules).map((path) => {
  // 2. The plugin has already parsed 'attributes' (Frontmatter) and 'html'
  const file = modules[path] as any;
  const { attributes } = file;

  // 3. Extract category from folder structure
  const pathParts = path.split('/');
  const category = pathParts[pathParts.length - 2];

  // 4. Map to your EssayMetadata interface
  const metadata: EssayMetadata = {
    id: attributes.id,
    title: attributes.title,
    date: attributes.date,
    type: attributes.type,
    status: attributes.status,
    category,
    description: attributes.description,
    excerpt: attributes.excerpt || attributes.description
  };

  return {
    path,
    metadata,
    content: file.html // The parsed HTML ready for rendering
  };
});


// Build metadata cache on module initialization
const essayMetadataCache = new Map<string, EssayMetadata>();
const categoryToEssayMap = new Map<string, string[]>();


// Initialize registry by parsing all markdown files
for (const essay of essays) { 
  const { path, metadata } = essay; 
  try {
    
    // Extract category from folder structure
    const pathParts = path.split('/');
    const category = pathParts[pathParts.length - 2];


    // Validate required fields
    if (!metadata.id || !metadata.title) {
      console.error(`Invalid essay metadata at ${path}: missing id or title`);
      continue;
    }

    // Check for duplicates
    if (essayMetadataCache.has(metadata.id)) {
      console.warn(`Duplicate essay ID: ${metadata.id} at ${path}`);
    }

    // Store in cache
    essayMetadataCache.set(metadata.id, metadata);

    // Build category index
    if (!categoryToEssayMap.has(category)) {
      categoryToEssayMap.set(category, []);
    }
    
    categoryToEssayMap.get(category)!.push(metadata.id);
    
  } catch (error) {
    console.error(`Failed to parse essay at ${path}:`, error);
  }
}

// Public API

/**
 * Get the category for a given essay ID
 */
export function getCategoryForEssayId(essayId: string): string | null {
  const metadata = essayMetadataCache.get(essayId);
  return metadata?.category || null;
}

/**
 * Get full metadata for a given essay ID
 */
export function getEssayMetadata(essayId: string): EssayMetadata | null {
  return essayMetadataCache.get(essayId) || null;
}

/**
 * Get all essay metadata
 */
export function getAllEssayMetadata(): EssayMetadata[] {
  return Array.from(essayMetadataCache.values());
}

/**
 * Get most recent essays for a specific category, sorted by date (newest first)
 */
export function getEssaysByCategory(category: string): EntryMetadata[] {
  const essayIds = categoryToEssayMap.get(category) || [];
  return essayIds
    .map(id => essayMetadataCache.get(id))
    .filter((meta): meta is EssayMetadata => meta !== undefined)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(meta => ({
      id: meta.id,
      title: meta.title,
      date: meta.date,
      type: meta.type,
      excerpt: meta.excerpt,
      status: meta.status
    }));
}

/**
 * Get most recent essays from the Map, sorted by date (newest first)
 */
export function getMostRecentEssays(limit?: number): EntryMetadata[] {
  // 1. Convert Map values to an Array
  return Array.from(essayMetadataCache.values())
    // 2. Sort by date string (direct comparison is efficient for ISO strings)
    .sort((a, b) => b.date.localeCompare(a.date))
    // 3. Take the top N
    .slice(0, limit)
    // 4. Map to the simplified EntryMetadata structure
    .map(({ id, title, date, type, excerpt, status }) => ({
      id,
      title,
      date,
      type,
      excerpt,
      status,
    }));
}

/**
 * Get category configuration (display title, description, icon)
 */
export function getCategoryConfig(category: string): CategoryConfig {
  return getCategoryConfig2()[category] || {
    displayTitle: category,
    description: '',
    iconName: 'FileText'
  };
}

/**
 * Get all category names
 */
export function getAllCategories(): string[] {
  return Array.from(categoryToEssayMap.keys());
}

/**
 * Get topic data for all categories (used by InterestsHub)
 */
export function getTopicData(): Record<string, TopicData> {
  const topics: Record<string, TopicData> = {};

  for (const category of getAllCategories()) {
    const config = getCategoryConfig(category);
    topics[category] = {
      title: config.displayTitle,
      iconName: config.iconName,
      description: config.description,
      entries: getEssaysByCategory(category),
      status: config.status
    };
  }

  return topics;
}
