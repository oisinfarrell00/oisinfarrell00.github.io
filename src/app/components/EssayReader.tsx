import { useState } from "react";
import { EssaySidebar } from "./essay/EssaySidebar";
import { EssayContent } from "./essay/EssayContent";

export function EssayReader() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "theoretical-framework", title: "Theoretical Framework" },
    { id: "empirical-evidence", title: "Empirical Evidence" },
    { id: "case-studies", title: "Case Studies" },
    { id: "synthesis", title: "Synthesis & Implications" },
    { id: "conclusion", title: "Conclusion" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1600px] mx-auto flex">
        <EssaySidebar
          sections={sections}
          activeSection={activeSection}
          onSectionClick={setActiveSection}
        />
        <EssayContent />
      </div>
    </div>
  );
}
