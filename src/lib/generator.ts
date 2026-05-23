import {
  animeOpeners,
  disclaimer,
  headlines,
  municipalSolutions,
  policyDomains,
  strategicFrames,
  subtitles,
} from "../data/generatorData";
import type { GeneratedCard, GeneratorInput, PhraseSet, PolicyDomain } from "../types";

const strategicDomains = new Set<PolicyDomain>([
  "cityDiplomacy",
  "disinformation",
]);

const normalize = (value: string) => value.trim().toLowerCase();

const hashString = (value: string) => {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
};

const pick = (sets: PhraseSet[], domain: PolicyDomain, seed: number, offset = 0) => {
  const domainSet = sets.find((set) => set.domain === domain);
  const fallbackSet = sets.find((set) => set.domain === "general" || set.domain === "all");
  const items = domainSet?.items.length ? domainSet.items : fallbackSet?.items ?? [];
  return items.length ? items[(seed + offset) % items.length] : "";
};

export const detectDomain = (query: string, selectedTopic?: PolicyDomain): PolicyDomain => {
  if (selectedTopic) {
    return selectedTopic;
  }

  const normalized = normalize(query);
  if (!normalized) {
    return "general";
  }

  const scores = policyDomains.map((rule) => ({
    domain: rule.domain,
    score: rule.keywords.reduce((total, keyword) => {
      return total + (normalized.includes(keyword.toLowerCase()) ? 1 : 0);
    }, 0),
  }));

  const best = scores.sort((left, right) => right.score - left.score)[0];
  return best.score > 0 ? best.domain : "general";
};

const summarizeIssue = (query: string, domain: PolicyDomain) => {
  const cleanQuery = query.replace(/[？?。！!，,]/g, "").trim();
  if (cleanQuery.length > 4) {
    return cleanQuery.length > 22 ? `${cleanQuery.slice(0, 22)}...` : cleanQuery;
  }

  const defaults: Record<PolicyDomain, string> = {
    transport: "台北交通與通勤壓力",
    urbanPlanning: "台北都市更新與生活圈重整",
    cityDiplomacy: "台北首都外交與國際定位",
    civilDefense: "台北災防民防與基礎設施安全",
    disinformation: "假訊息與社會信任防線",
    governance: "市府行政效率與制度改革",
    general: "台北市政的複雜挑戰",
  };

  return defaults[domain];
};

const applyIntensity = (body: string, intensity: GeneratorInput["intensity"], domain: PolicyDomain) => {
  if (intensity === "steady") {
    return body;
  }

  if (intensity === "campaign") {
    return `${body} 這不是口號，而是我對首都市民的具體承諾。`;
  }

  if (strategicDomains.has(domain)) {
    return `${body} 台北必須站在民主防線的最前端，用制度把風險擋在城市之外。`;
  }

  return `${body} 台北要做的，是把每個民生問題都提升成可驗證的系統改革。`;
};

export const generateCard = ({ query, selectedTopic, intensity }: GeneratorInput, reroll = 0): GeneratedCard => {
  const domain = detectDomain(query, selectedTopic);
  const seed = hashString(`${query}-${domain}-${intensity}-${reroll}`);
  const issue = summarizeIssue(query, domain);

  const opener = pick(animeOpeners, domain, seed, 1);
  const frame = pick(strategicFrames, domain, seed, 2);
  const solution = pick(municipalSolutions, domain, seed, 3);
  const rawBody = `面對${issue}，${opener}${frame}${solution}`;
  const body = applyIntensity(rawBody, intensity, domain);

  return {
    headline: pick(headlines, domain, seed),
    subtitle: pick(subtitles, domain, seed, 4),
    body,
    tags: buildTags(domain),
    disclaimer,
    domain,
  };
};

const buildTags = (domain: PolicyDomain) => {
  const base = ["台北願景", "非官方模擬"];
  const domainTags: Record<PolicyDomain, string[]> = {
    transport: ["交通韌性", "辦公孤島"],
    urbanPlanning: ["都市更新", "生活圈"],
    cityDiplomacy: ["首都外交", "無限城論壇"],
    civilDefense: ["災防民防", "基礎設施"],
    disinformation: ["認知防禦", "透明澄清"],
    governance: ["行政效率", "制度改革"],
    general: ["系統治理", "公共利益"],
  };

  return [...domainTags[domain], ...base];
};
