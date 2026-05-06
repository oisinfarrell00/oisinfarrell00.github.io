import { Link, useParams } from "react-router";
import { ChevronLeft, TrendingUp, FileText, BookOpen } from "lucide-react";
import { TopicHeader } from "./interests/TopicHeader";
import { TopicStats } from "./interests/TopicStats";
import { EntryCard } from "./interests/EntryCard";
import { ChannelHealth } from "./interests/ChannelHealth";
import { getTopicData } from "../data/essayRegistry";

// Map icon names to icon components
const ICON_MAP = {
  TrendingUp,
  FileText,
  BookOpen,
} as const;

export function InterestsHub() {
  const { topic } = useParams();

  // Load topic data from registry
  const topicData = getTopicData();
  const totalEntries = Object.values(topicData).reduce((sum, topic) => sum + topic.entries.length, 0);
  const numEntriesForCategory = topicData[topic || ""]?.entries.length || 0;
  const currentTopic = topicData[topic || ""];

  // Get icon component from icon name
  const IconComponent = currentTopic?.iconName ? ICON_MAP[currentTopic.iconName as keyof typeof ICON_MAP] : FileText;

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-16 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[100px] -z-10" />

      <Link
        to="/"
        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-16 transition-colors inline-flex"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Return to Switchboard
      </Link>

      <TopicHeader
        title={currentTopic?.title || ""}
        icon={IconComponent}
        description={currentTopic?.description}
      />

      <TopicStats
        entryCount={currentTopic?.entries.length}
        lastUpdated={currentTopic?.entries[0]?.date}
        status={currentTopic?.status}
      />

      <div className="space-y-4">
        {currentTopic?.entries.map((entry: any, idx: number) => (
          <EntryCard key={entry.id} entry={entry} index={idx} />
        ))}
      </div>

      <ChannelHealth entries={currentTopic?.entries} totalEntries={totalEntries} numEntriesForCategory={numEntriesForCategory} />
    </div>
  );
}
