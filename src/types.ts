export interface ProductSpec {
  name: string;
  category: string;
  tagline: string;
  description: string;
  stats: { label: string; value: string }[];
  features: string[];
}

export interface TechFramework {
  title: string;
  codename: string;
  description: string;
  metrics: { label: string; value: string }[];
  details: string[];
}

export interface SolutionSector {
  title: string;
  tagline: string;
  description: string;
  useCase: string;
  benefits: string[];
}
