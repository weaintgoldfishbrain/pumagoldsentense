import { Clipboard, Download, RotateCw } from "lucide-react";

interface ActionBarProps {
  copied: boolean;
  isExporting: boolean;
  onCopy: () => void;
  onDownload: () => void;
  onReroll: () => void;
}

export function ActionBar({ copied, isExporting, onCopy, onDownload, onReroll }: ActionBarProps) {
  return (
    <div className="action-bar">
      <button className="icon-button" onClick={onReroll} type="button" title="重抽同主題文案">
        <RotateCw aria-hidden="true" size={18} />
        <span>重抽</span>
      </button>
      <button className="icon-button" onClick={onCopy} type="button" title="複製完整文案">
        <Clipboard aria-hidden="true" size={18} />
        <span>{copied ? "已複製" : "複製"}</span>
      </button>
      <button className="icon-button" disabled={isExporting} onClick={onDownload} type="button" title="下載金句卡圖片">
        <Download aria-hidden="true" size={18} />
        <span>{isExporting ? "輸出中" : "下載"}</span>
      </button>
    </div>
  );
}
