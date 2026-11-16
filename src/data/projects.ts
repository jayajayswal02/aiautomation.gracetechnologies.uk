import projectsConfig from '@/config/projects.json';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'Client Work' | 'AI Automation';
  client: string;
  location: string;
  year: string;
  summary: string;
  metrics: string;
  tags: string[];
  deliverables: string[];
  visualType: 'web' | 'merchant' | 'ai' | 'marketing' | 'client';
  logo?: string;
  image?: string;
  presentationUrl?: string;
  clientSlug?: string;
  workType?: 'website' | 'logo' | 'visitingCard' | 'profile' | 'letterhead';
  websiteUrl?: string;
}

// All project records are loaded directly from src/config/projects.json
export const PROJECTS_DATA: ProjectItem[] = projectsConfig.projects as ProjectItem[];
