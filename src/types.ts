export interface MetricItem {
  label: string;
  value: string;
  desc?: string;
}

export interface ArchitectureFlow {
  flowDescription: string;
  steps: {
    title: string;
    desc: string;
    tag?: string;
  }[];
}

export interface ProjectDownload {
  label: string;
  url?: string;
  filename?: string;
  type?: 'spec' | 'code' | 'archive' | 'doc';
}

export interface ProjectScreenshot {
  title: string;
  url: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge?: string;
  flag?: 'ERP' | 'Website' | 'AI / Backend' | 'Install & Cloud' | 'Maintenance' | string;
  imageUrl?: string;
  screenshots?: ProjectScreenshot[];
  problem: string;
  solution: string;
  technicalChallenges: string[];
  keyContributions: string[];
  metrics: MetricItem[];
  stack: string[];
  architecture?: ArchitectureFlow;
  liveUrl?: string;
  githubUrl?: string;
  downloads?: {
    primary?: ProjectDownload;
    secondary?: ProjectDownload;
  };
  featured?: boolean;
  status?: string;
  businessPurpose?: string;
  role?: string[];
  projectScope?: {
    type: string;
    description: string;
    responsibilities: string[];
  };
  overview?: string[];
  applications?: {
    name: string;
    url?: string;
    img?: string[];
    description?: string;
  }[];
  deploymentEnvironment?: Record<string, string>;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  impactBullets: string[];
  technologies: string[];
}

export interface EngineeringThought {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  keyPoints: string[];
  codeSnippet?: {
    language: string;
    title: string;
    code: string;
  };
}

export interface EngineeringNote {
  id: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  summary: string;
  content: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface ServiceCard {
  id: string;
  title: string;
  icon: string;
  description: string;
  items: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    roleTitle: string;
    heroHeading: string;
    heroSubtitle: string;
    specializationPills: string[];
    aboutStory: string[];
    email: string;
    phone: string;
    domicile: string;
    github: string;
    linkedin: string;
    portfolioUrl: string;
    openToRelocation: string;
  };
  stats: {
    label: string;
    value: string;
    helper: string;
  }[];
  whatIDo: ServiceCard[];
  projects: Project[];
  engineeringThoughts: EngineeringThought[];
  techStack: SkillCategory[];
  experiences: Experience[];
  notes: EngineeringNote[];
  education: {
    school: string;
    degree: string;
    year: string;
    gpa: string;
  }[];
  certifications: {
    name: string;
    org: string;
    year: string;
  }[];
}
