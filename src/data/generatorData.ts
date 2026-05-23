import type { DomainRule, PhraseSet, PolicyDomain } from "../types";

export const disclaimer =
  "非本人發言 / 非官方 / 產生式政治文案模擬";

export const policyDomains: DomainRule[] = [
  {
    domain: "transport",
    label: "交通",
    keywords: ["塞車", "交通", "內湖", "南港", "捷運", "公車", "通勤", "停車", "車流"],
  },
  {
    domain: "urbanPlanning",
    label: "都更",
    keywords: ["都更", "住宅", "社宅", "房價", "土地", "都市", "更新", "商圈", "生活圈"],
  },
  {
    domain: "cityDiplomacy",
    label: "首都外交",
    keywords: ["雙城", "上海", "兩岸", "交流", "論壇", "國際", "巴黎", "東京", "民主城市"],
  },
  {
    domain: "civilDefense",
    label: "災防民防",
    keywords: ["地震", "災害", "演習", "避難", "防空", "民防", "安全", "醫療", "韌性"],
  },
  {
    domain: "disinformation",
    label: "假訊息",
    keywords: ["假新聞", "抹黑", "網軍", "造謠", "資訊戰", "認知", "滲透", "第五縱隊", "灰色地帶"],
  },
  {
    domain: "governance",
    label: "行政效率",
    keywords: ["質詢", "議會", "預算", "開會", "效率", "官僚", "程序", "改革", "法規"],
  },
];

export const topicChips: Array<{ label: string; domain: PolicyDomain; prompt: string }> = [
  { label: "交通", domain: "transport", prompt: "內湖塞車與南港發展要怎麼解決？" },
  { label: "都更", domain: "urbanPlanning", prompt: "台北都更和居住問題需要什麼新願景？" },
  { label: "首都外交", domain: "cityDiplomacy", prompt: "雙城論壇與台北的國際定位該怎麼調整？" },
  { label: "災防民防", domain: "civilDefense", prompt: "台北面對地震災害要如何建立韌性？" },
  { label: "假訊息", domain: "disinformation", prompt: "面對假新聞網軍抹黑，市府該怎麼回應？" },
  { label: "行政效率", domain: "governance", prompt: "台北市府如何擺脫無效會議與官僚拖延？" },
];

export const headlines: PhraseSet[] = [
  {
    domain: "transport",
    items: [
      "讓台北的每一次移動，都成為城市韌性的證明",
      "從辦公孤島到連結之城，台北交通必須重新編碼",
    ],
  },
  {
    domain: "urbanPlanning",
    items: [
      "用系統治理重啟台北生活圈",
      "城市更新不是拆掉過去，而是重建公平的未來",
    ],
  },
  {
    domain: "cityDiplomacy",
    items: [
      "台北要走向世界，不再停留在單一框架",
      "讓首都外交成為民主城市的共同防線",
    ],
  },
  {
    domain: "civilDefense",
    items: [
      "首都的安全，不只靠牆，而靠每一個節點都能運作",
      "把災防做在平時，讓台北在關鍵時刻不失序",
    ],
  },
  {
    domain: "disinformation",
    items: [
      "守住資訊信任，就是守住城市治理的地基",
      "台北要有識讀攻擊的能力，也要有修復信任的制度",
    ],
  },
  {
    domain: "governance",
    items: [
      "把政治展演降到最低，把行政效能拉到最高",
      "真正的改革，是讓制度開始對市民負責",
    ],
  },
  {
    domain: "general",
    items: [
      "台北不是等待救援的城市，而是能自我更新的系統",
      "讓每一項市政，都回到韌性、透明與公共利益",
    ],
  },
];

export const subtitles: PhraseSet[] = [
  { domain: "transport", items: ["NERV 式交通節點重構", "欣梅爾路線的城市連結"] },
  { domain: "urbanPlanning", items: ["破與 Q 的生活圈再啟動", "城牆內外的公平更新"] },
  { domain: "cityDiplomacy", items: ["無限城不是封閉迷宮，而是民主城市網絡", "首都外交的次元躍升"] },
  { domain: "civilDefense", items: ["城市防禦網同步率提升", "全民韌性的終局測試"] },
  { domain: "disinformation", items: ["認知防線展開", "資訊霧中的信任校準"] },
  { domain: "governance", items: ["終止低效展演，啟動制度重構", "把官僚 AT 力場打開"] },
  { domain: "general", items: ["台北市政的韌性模式", "從想像到制度的同步啟動"] },
];

export const animeOpeners: PhraseSet[] = [
  {
    domain: "transport",
    items: [
      "面對通勤的日常戰場，不能只是加厚裝甲，而要重新設計城市的路徑。",
      "如果一座城市的節點彼此失聯，再強的個別建設也會變成孤島。",
    ],
  },
  {
    domain: "urbanPlanning",
    items: [
      "舊體制的 AT 力場不是不能突破，關鍵是市府有沒有勇氣啟動重構。",
      "城市更新不是把人推出城牆外，而是讓每個生活圈都能被看見。",
    ],
  },
  {
    domain: "cityDiplomacy",
    items: [
      "台北的視野不能被單一城市框住，真正的無限城應該連向民主世界。",
      "首都外交不是走進封閉迷宮，而是把城市的門開向巴黎、東京與更多民主夥伴。",
    ],
  },
  {
    domain: "civilDefense",
    items: [
      "敵人很強，難道我們就不準備了嗎？災害也是一樣，平時才是決勝點。",
      "真正的防禦不是等警報響起，而是在平時讓每個節點都知道自己該做什麼。",
    ],
  },
  {
    domain: "disinformation",
    items: [
      "資訊戰最危險的地方，不是噪音很大，而是它讓人失去判斷的座標。",
      "當謠言開始複製擴散，城市治理就必須先守住信任的核心。",
    ],
  },
  {
    domain: "governance",
    items: [
      "如果政治只剩展演，市民真正需要的解方就會被噪音吞沒。",
      "改革不是把口號喊得更熱血，而是讓制度停止空轉。",
    ],
  },
  {
    domain: "general",
    items: [
      "對手比較強，問題比較難，難道台北就不前進了嗎？",
      "一座城市的主角不是口號，而是每個能被制度接住的人。",
    ],
  },
];

export const strategicFrames: PhraseSet[] = [
  {
    domain: "transport",
    items: [
      "這不是單一路口或單一園區的問題，而是人流、物流與生活機能長期失衡。",
      "底層邏輯是城市網絡失去韌性，讓工作、居住與交通被切成互不支援的碎片。",
    ],
  },
  {
    domain: "urbanPlanning",
    items: [
      "問題不只是建物老舊，而是分配、公共設施與社區參與沒有被放進同一張圖。",
      "都市治理不能只看容積與速度，也要看市民是否能留在自己的生活圈。",
    ],
  },
  {
    domain: "cityDiplomacy",
    items: [
      "這不是禮貌性的城市交流，而是首都如何選擇自己的國際座標。",
      "台北需要的是透明、對等、民主價值清楚的城市連結，而不是可能成為滲透破口的慣性安排。",
    ],
  },
  {
    domain: "civilDefense",
    items: [
      "災防不是單一局處的例行演習，而是醫療、避難、通訊與社區互助的整體測試。",
      "城市安全的核心，是讓基礎設施與基層組織在壓力下仍能維持運作。",
    ],
  },
  {
    domain: "disinformation",
    items: [
      "這不是一般口水，而是資訊戰與認知作戰對社會信任的持續消耗。",
      "當假訊息被包裝成市政討論，市府就必須用透明資料與快速澄清建立防線。",
    ],
  },
  {
    domain: "governance",
    items: [
      "低水準的政治展演會拖慢真正的行政改革，讓市民在程序裡消耗耐心。",
      "制度若只服務會議與新聞稿，就會失去面對問題的反應速度。",
    ],
  },
  {
    domain: "general",
    items: [
      "這不是單點修補，而是台北市政必須面對的系統性壓力測試。",
      "真正的城市治理，要能把複雜問題拆解成可執行、可追蹤、可問責的行動。",
    ],
  },
];

export const municipalSolutions: PhraseSet[] = [
  {
    domain: "transport",
    items: [
      "我會以南港和內湖為優先示範區，整合公共運輸、企業錯峰、接駁與步行環境，避免下一個辦公孤島形成。",
      "解方是建立跨區交通儀表板，公開瓶頸資料，讓捷運、公車、YouBike、停車與企業通勤一起調度。",
    ],
  },
  {
    domain: "urbanPlanning",
    items: [
      "市府要把都更、社宅、托育與長照一起規劃，讓更新後的台北不是更昂貴，而是更能生活。",
      "我會要求每個更新案清楚揭露公益回饋、安置方案與公共設施，讓城市重建回到市民身上。",
    ],
  },
  {
    domain: "cityDiplomacy",
    items: [
      "台北應該取消空泛的雙城慣性，轉向巴黎、東京、倫敦、紐約等民主城市，建立透明的無限城論壇。",
      "我會把城市外交變成產業、文化、資安與青年交流的實質網絡，讓台北的格調走向世界。",
    ],
  },
  {
    domain: "civilDefense",
    items: [
      "市府要盤點避難空間、醫療量能、物資節點與社區訓練，把全民防衛意識變成日常制度。",
      "我會建立公開可查的災防地圖與演練節奏，讓每個行政區都知道風險、資源與支援路線。",
    ],
  },
  {
    domain: "disinformation",
    items: [
      "市府必須建立即時澄清機制、公開資料儀表板與媒體識讀合作，把謠言的擴散速度壓下來。",
      "我會用透明資料、跨局處回應與社區識讀教育，讓台北成為不容易被操弄的民主城市。",
    ],
  },
  {
    domain: "governance",
    items: [
      "我要把專案進度、預算執行與延宕理由公開到市民看得懂，讓改革不再卡在會議室裡。",
      "市府會導入跨局處任務制，讓每個問題都有負責人、時程表與可檢驗的結果。",
    ],
  },
  {
    domain: "general",
    items: [
      "我會把問題拆成可追蹤的任務，公開進度、壓實責任，讓台北的韌性不是口號，而是市民每天感受到的改變。",
      "解方是用資料治理、社區協作與透明問責，把城市從被動回應改造成主動防禦的系統。",
    ],
  },
];
