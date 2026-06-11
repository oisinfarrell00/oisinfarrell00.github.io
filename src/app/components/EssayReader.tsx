import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { EssaySidebar } from "./essay/EssaySidebar";
import { EssayContent } from "./essay/EssayContent";
import { DynamicEssayContent } from "./essay/DynamicEssayContent";
import { loadEssay, getCategoryForEssayId } from "../data/essayLoader";
import type { Essay } from "../data/essayLoader";

export function EssayReader() {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState("introduction");
  const [essay, setEssay] = useState<Essay | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEssay() {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const category = getCategoryForEssayId(id);
        if (!category) {
          throw new Error(`Unknown essay ID: ${id}`);
        }

        const essayData = await loadEssay(category, id);
        setEssay(essayData);

        // Set first section as active
        if (essayData.sections.length > 0) {
          setActiveSection(essayData.sections[0].id);
        }
      } catch (err) {
        console.error("Error loading essay:", err);
        setError(err instanceof Error ? err.message : "Failed to load essay");
      } finally {
        setLoading(false);
      }
    }

    fetchEssay();
  }, [id]);

  // Default sections for the static essay (fallback)
  const defaultSections = [
    { id: "introduction", title: "Introduction" },
    { id: "theoretical-framework", title: "Theoretical Framework" },
    { id: "empirical-evidence", title: "Empirical Evidence" },
    { id: "case-studies", title: "Case Studies" },
    { id: "synthesis", title: "Synthesis & Implications" },
    { id: "conclusion", title: "Conclusion" }
  ];

  const sections = essay?.sections || defaultSections;

  // Prepare metadata for sidebar
  const sidebarMetadata = essay ? {
    title: essay.metadata.title,
    date: essay.metadata.date,
    type: essay.metadata.type,
    status: essay.metadata.status,
    category: essay.metadata.category,
    wordCount: essay.wordCount,
    readTime: essay.readTime,
  } : undefined;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1600px] mx-auto flex">
        <EssaySidebar
          sections={sections}
          activeSection={activeSection}
          onSectionClick={setActiveSection}
          metadata={sidebarMetadata}
        />
        {loading ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground">Loading essay...</p>
          </div>
        ) : error ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p className="text-red-500 mb-2">Error loading essay</p>
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          </div>
        ) : essay ? (
          <DynamicEssayContent essay={essay} />
        ) : (
          <EssayContent />
        )}
      </div>
    </div>
  );
}
