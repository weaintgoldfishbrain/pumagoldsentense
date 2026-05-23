import { SendHorizontal } from "lucide-react";

interface PromptInputProps {
  query: string;
  onQueryChange: (value: string) => void;
  onGenerate: () => void;
}

export function PromptInput({ query, onQueryChange, onGenerate }: PromptInputProps) {
  return (
    <label className="prompt-panel">
      <span className="field-label">輸入台北市政題目</span>
      <div className="prompt-row">
        <textarea
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          onKeyDown={(event) => {
            if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
              onGenerate();
            }
          }}
          placeholder="例如：內湖塞車與南港發展要怎麼解決？"
          rows={4}
        />
        <button className="primary-button" onClick={onGenerate} type="button" title="產生願景卡">
          <SendHorizontal aria-hidden="true" size={20} />
          <span>產生</span>
        </button>
      </div>
    </label>
  );
}
