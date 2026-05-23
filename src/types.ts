export type PolicyDomain =
  | "transport"
  | "urbanPlanning"
  | "cityDiplomacy"
  | "civilDefense"
  | "disinformation"
  | "governance"
  | "general";

export type Intensity = "steady" | "campaign" | "strategic";

export interface GeneratorInput {
  query: string;
  selectedTopic?: PolicyDomain;
  intensity: Intensity;
}

export interface GeneratedCard {
  headline: string;
  subtitle: string;
  body: string;
  tags: string[];
  disclaimer: string;
  domain: PolicyDomain;
}

export interface DomainRule {
  domain: PolicyDomain;
  label: string;
  keywords: string[];
}

export interface PhraseSet {
  domain: PolicyDomain | "all";
  items: string[];
}
