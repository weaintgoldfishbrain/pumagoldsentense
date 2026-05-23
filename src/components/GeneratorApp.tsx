import { useMemo, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { ShieldCheck } from "lucide-react";
import { generateCard } from "../lib/generator";
import type { Intensity, PolicyDomain } from "../types";
import { ActionBar } from "./ActionBar";
import { PromptInput } from "./PromptInput";
import { TopicChips } from "./TopicChips";
import { VisionCard } from "./VisionCard";

const initialQuery = "內湖塞車與南港發展要怎麼解決？";

export function GeneratorApp() {
  const [query, setQuery] = useState(initialQuery);
  const [selectedTopic, setSelectedTopic] = useState<PolicyDomain | undefined>("transport");
  const [intensity, setIntensity] = useState<Intensity>("campaign");
  const [reroll, setReroll] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const card = useMemo(
    () => generateCard({ query, selectedTopic, intensity }, reroll),
    [intensity, query, reroll, selectedTopic],
  );

  const handleGenerate = () => {
    setSelectedTopic(undefined);
    setReroll((value) => value + 1);
  };

  const handleTopicSelect = (domain: PolicyDomain, prompt: string) => {
    setSelectedTopic(domain);
    setQuery(prompt);
    setReroll((value) => value + 1);
  };

  const cardText = `${card.headline}\n${card.subtitle}\n\n${card.body}\n\n${card.tags.map((tag) => `#${tag}`).join(" ")}\n${card.disclaimer}`;

  const copyWithFallback = () => {
    const textarea = document.createElement("textarea");
    textarea.value = cardText;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(cardText);
      } else {
        copyWithFallback();
      }
    } catch {
      copyWithFallback();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const handleDownload = async () => {
    if (!cardRef.current) {
      return;
    }

    setIsExporting(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#f7f4ed",
      });
      const link = document.createElement("a");
      link.download = "taipei-vision-card.png";
      link.href = dataUrl;
      link.click();
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <main className="app-shell">
      <section className="workspace" aria-labelledby="app-title">
        <div className="intro">
          <div className="badge">
            <ShieldCheck aria-hidden="true" size={18} />
            非官方模擬工具
          </div>
          <h1 id="app-title">沈伯洋動漫市政願景產生器</h1>
          <p>
            非本人發言，非官方工具；內容由前端規則式語料生成，不代表任何競選團隊。
          </p>
        </div>

        <div className="generator-layout">
          <section className="control-panel" aria-label="產生器控制面板">
            <PromptInput query={query} onGenerate={handleGenerate} onQueryChange={setQuery} />
            <TopicChips activeTopic={selectedTopic} onSelect={handleTopicSelect} />

            <fieldset className="intensity-panel">
              <legend>語氣強度</legend>
              <div className="segmented-control">
                {[
                  ["steady", "穩健"],
                  ["campaign", "助選"],
                  ["strategic", "戰略"],
                ].map(([value, label]) => (
                  <button
                    className={intensity === value ? "segment active" : "segment"}
                    key={value}
                    onClick={() => setIntensity(value as Intensity)}
                    type="button"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>

            <ActionBar
              copied={copied}
              isExporting={isExporting}
              onCopy={handleCopy}
              onDownload={handleDownload}
              onReroll={() => setReroll((value) => value + 1)}
            />
          </section>

          <section className="preview-panel" aria-label="金句卡預覽">
            <VisionCard card={card} ref={cardRef} />
          </section>
        </div>
      </section>
    </main>
  );
}
