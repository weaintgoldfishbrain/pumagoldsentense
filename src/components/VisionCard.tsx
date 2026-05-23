import { forwardRef } from "react";
import type { GeneratedCard } from "../types";

interface VisionCardProps {
  card: GeneratedCard;
}

export const VisionCard = forwardRef<HTMLDivElement, VisionCardProps>(({ card }, ref) => {
  return (
    <article className="vision-card" ref={ref}>
      <div className="card-grid" aria-hidden="true" />
      <div className="card-content">
        <div className="card-kicker">Taipei Vision Generator</div>
        <h2>{card.headline}</h2>
        <p className="subtitle">{card.subtitle}</p>
        <p className="body">{card.body}</p>
        <div className="tag-row">
          {card.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p className="disclaimer">{card.disclaimer}</p>
      </div>
    </article>
  );
});

VisionCard.displayName = "VisionCard";
