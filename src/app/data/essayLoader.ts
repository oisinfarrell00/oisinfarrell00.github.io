import matter from 'gray-matter';
import { getCategoryForEssayId as getCategory } from './essayRegistry';

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

export interface Essay {
  metadata: EssayMetadata;
  content: string;
  sections: EssaySection[];
  wordCount: number;
  readTime: number; // in minutes
}

export interface EssaySection {
  id: string;
  title: string;
  content: string;
}

// Use Vite's glob import to load all markdown files at build time
const essayModules = import.meta.glob('./essays/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: false
});

/**
 * Dynamically imports and parses an essay markdown file
 * @param category The essay category (economic-theory, political-analysis, reading-archive, curated-media)
 * @param essayId The essay ID
 * @returns Parsed essay with metadata and content
 */
export async function loadEssay(category: string, essayId: string): Promise<Essay> {
  try {
    // Construct the path to match the glob pattern
    const essayPath = `./essays/${category}/${essayId}.md`;

    // Get the loader function for this specific essay
    const loader = essayModules[essayPath];

    if (!loader) {
      throw new Error(`Essay module not found at path: ${essayPath}`);
    }

    // Load the markdown content
    const markdown = await loader() as string;

    // Parse frontmatter and content
    const { data, content } = matter(markdown);

    // Parse sections from markdown
    const sections = parseMarkdownSections(content);

    // Calculate word count and read time
    const wordCount = calculateWordCount(content);
    const readTime = calculateReadTime(wordCount);

    return {
      metadata: data as EssayMetadata,
      content,
      sections,
      wordCount,
      readTime,
    };
  } catch (error) {
    console.error(`Failed to load essay: ${category}/${essayId}`, error);
    throw new Error(`Essay not found: ${essayId}`);
  }
}

/**
 * Parses markdown content into sections based on h1 headers
 */
function parseMarkdownSections(markdown: string): EssaySection[] {
  const sections: EssaySection[] = [];

  // Split by h1 headers (# Title)
  const parts = markdown.split(/^# (.+)$/gm);

  // First part is before any h1 (usually empty or intro)
  // Then alternating: title, content, title, content...
  for (let i = 1; i < parts.length; i += 2) {
    const title = parts[i].trim();
    const content = parts[i + 1]?.trim() || '';
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    sections.push({ id, title, content });
  }

  return sections;
}

/**
 * Calculates word count from markdown content
 */
function calculateWordCount(content: string): number {
  // Remove markdown syntax for more accurate count
  const plainText = content
    .replace(/^#+\s+/gm, '') // Remove headers
    .replace(/\*\*(.+?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.+?)\*/g, '$1') // Remove italic
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // Remove links but keep text
    .replace(/`(.+?)`/g, '$1') // Remove inline code
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .trim();

  // Count words
  const words = plainText.split(/\s+/).filter(word => word.length > 0);
  return words.length;
}

/**
 * Calculates estimated read time based on word count
 * Average reading speed: 200-250 words per minute (using 225)
 */
function calculateReadTime(wordCount: number): number {
  const wordsPerMinute = 225;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, minutes); // Minimum 1 minute
}

/**
 * Gets the category for a given essay ID from the essay registry
 */
export function getCategoryForEssayId(essayId: string): string | null {
  return getCategory(essayId);
}
