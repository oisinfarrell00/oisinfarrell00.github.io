import { useState } from "react";
import { Activity } from "lucide-react";
import { getMostRecentEssays } from "../data/essayRegistry";
import { Link } from "react-router";

export function SystemStatus() {
  const [isOpen, setIsOpen] = useState(false);
  const recentEssays = getMostRecentEssays(3);

  // Helper to shut the menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Button */}
      <div className="flex items-center gap-2 px-3 py-2 border border-border rounded hover:border-accent/30 hover:bg-accent/5 transition-all cursor-pointer">
        <Activity className="w-3.5 h-3.5 text-accent animate-pulse" />
        <span className="text-xs font-mono text-muted-foreground group-hover:text-accent transition-colors">
          {recentEssays.length} Recent Topics
        </span>
      </div>

      {/* Dropdown Menu */}
      <div className={`
        absolute top-full right-0 mt-3 w-80 bg-card border border-border rounded-lg shadow-2xl transition-all
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
      `}>
        <div className="p-4 border-b border-border bg-muted/20">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <div className="text-xs font-mono text-accent uppercase tracking-wider">System Status</div>
          </div>
          <div className="text-sm">Most Recent Essays</div>
        </div>

        <div className="p-3">
          {recentEssays.map((topic, idx) => (
            <Link 
              key={topic.id} 
              to={`/essay/${topic.id}`}
              onClick={handleLinkClick}
              className="group block border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 bg-card relative mb-2 last:mb-0"
            >
              <div className="flex items-start gap-3 px-3 py-2.5 hover:bg-muted/30 rounded transition-colors">
                <div className="w-6 h-6 border border-border rounded flex items-center justify-center text-[10px] font-mono text-muted-foreground mt-0.5 flex-shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <span className="text-sm leading-relaxed">{topic.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}