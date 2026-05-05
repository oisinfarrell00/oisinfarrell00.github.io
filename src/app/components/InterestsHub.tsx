import { Link, useParams } from "react-router";
import { ChevronLeft, TrendingUp, FileText, BookOpen } from "lucide-react";
import { TopicHeader } from "./interests/TopicHeader";
import { TopicStats } from "./interests/TopicStats";
import { EntryCard } from "./interests/EntryCard";
import { ChannelHealth } from "./interests/ChannelHealth";

export function InterestsHub() {
  const { topic } = useParams();

  const topicData: Record<string, any> = {
    "economic-theory": {
      title: "Economic Theory",
      icon: TrendingUp,
      description: "Exploring mechanism design, game theory, and market structures",
      entries: [
        {
          id: "game-theory-market-design",
          title: "Game Theory in Market Design",
          date: "Apr 18, 2026",
          type: "Essay",
          excerpt: "How auction theory informs spectrum allocation and ad markets",
          status: "Published"
        },
        {
          id: "matching-markets",
          title: "Two-Sided Matching Markets",
          date: "Apr 10, 2026",
          type: "Notes",
          excerpt: "Gale-Shapley algorithm and applications to labor markets",
          status: "Draft"
        },
        {
          id: "information-asymmetry",
          title: "Information Asymmetry and Adverse Selection",
          date: "Mar 28, 2026",
          type: "Essay",
          excerpt: "Akerlof's Market for Lemons and modern applications",
          status: "Published"
        }
      ]
    },
    "political-analysis": {
      title: "Political Analysis",
      icon: FileText,
      description: "Intersection of economics, institutions, and political systems",
      entries: [
        {
          id: "public-choice",
          title: "Public Choice Economics",
          date: "Apr 15, 2026",
          type: "Essay",
          excerpt: "Applying economic analysis to political decision-making",
          status: "Published"
        },
        {
          id: "institutional-design",
          title: "Constitutional Political Economy",
          date: "Apr 02, 2026",
          type: "Notes",
          excerpt: "Buchanan's framework for analyzing institutional rules",
          status: "Published"
        }
      ]
    },
    "reading-archive": {
      title: "Reading Archive",
      icon: BookOpen,
      description: "Curated notes and reflections from technical literature",
      entries: [
        {
          id: "idea-factory",
          title: "The Idea Factory - Jon Gertner",
          date: "Apr 12, 2026",
          type: "Book Notes",
          excerpt: "Bell Labs and the golden age of industrial research",
          status: "Complete"
        },
        {
          id: "designing-data-intensive",
          title: "Designing Data-Intensive Applications - Martin Kleppmann",
          date: "Mar 20, 2026",
          type: "Book Notes",
          excerpt: "Distributed systems patterns and trade-offs",
          status: "Complete"
        }
      ]
    },
    "curated-media": {
      title: "Curated Media",
      icon: FileText,
      description: "Lectures, talks, and long-form interviews",
      entries: [
        {
          id: "systems-thinking-47",
          title: "Systems Thinking Podcast #47",
          date: "Apr 10, 2026",
          type: "Podcast",
          excerpt: "Conversation with Donella Meadows on leverage points",
          status: "Reviewed"
        },
        {
          id: "lex-fridman-carmack",
          title: "John Carmack on Software Engineering",
          date: "Mar 15, 2026",
          type: "Interview",
          excerpt: "Lex Fridman podcast - systems programming and optimization",
          status: "Reviewed"
        }
      ]
    }
  };

  const currentTopic = topicData[topic || ""] || topicData["economic-theory"];

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
        title={currentTopic.title}
        icon={currentTopic.icon}
        description={currentTopic.description}
      />

      <TopicStats
        entryCount={currentTopic.entries.length}
        lastUpdated={currentTopic.entries[0]?.date}
      />

      <div className="space-y-4">
        {currentTopic.entries.map((entry: any, idx: number) => (
          <EntryCard key={entry.id} entry={entry} index={idx} />
        ))}
      </div>

      <ChannelHealth entries={currentTopic.entries} />
    </div>
  );
}
