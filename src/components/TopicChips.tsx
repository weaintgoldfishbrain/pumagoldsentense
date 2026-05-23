import { topicChips } from "../data/generatorData";
import type { PolicyDomain } from "../types";

interface TopicChipsProps {
  activeTopic?: PolicyDomain;
  onSelect: (domain: PolicyDomain, prompt: string) => void;
}

export function TopicChips({ activeTopic, onSelect }: TopicChipsProps) {
  return (
    <div className="topic-chips" aria-label="市政主題快捷鍵">
      {topicChips.map((topic) => (
        <button
          className={activeTopic === topic.domain ? "chip active" : "chip"}
          key={topic.domain}
          onClick={() => onSelect(topic.domain, topic.prompt)}
          type="button"
        >
          {topic.label}
        </button>
      ))}
    </div>
  );
}
