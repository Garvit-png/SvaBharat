import initialBlogs from "../data/blogs.json";
import initialTestimonials from "../data/testimonials.json";
import initialIdeas from "../data/ideas.json";

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  authorName: string;
  authorDesignation: string;
  coverPhoto: string; // base64 image data or gradient name
  createdAt: string;
  published: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // designation & organization
  quote: string;
  avatar?: string;
  createdAt: string;
}

export interface IdeaBrief {
  summary: string;
  problemStatement: string;
  proposedFramework: string;
  corePrinciples: string[];
}

export interface NotionLink {
  url: string;
  lastSynced: string;
  workspaceName: string;
  documentOutline: string[];
}

export interface RelatedConversation {
  id: string;
  title: string;
  speakers: string;
  type: string;
  date: string;
  duration?: string;
  audioUrl?: string;
  keyQuotes?: string[];
  summary?: string;
}

export interface Resource {
  id: string;
  title: string;
  type: "PDF" | "Doc" | "Slides" | "Link";
  size?: string;
  url: string;
  description: string;
}

export interface Contributor {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  avatar: string;
  focus: string;
  link?: string;
}

export interface AcceptanceCriterion {
  id: string;
  title: string;
  description: string;
  status: "completed" | "in_progress" | "pending";
  targetDate: string;
}

export interface Idea {
  id: string;
  title: string;
  tagline: string;
  category: string;
  status: string;
  location: string;
  lastUpdated: string;
  brief: IdeaBrief;
  notionLink: NotionLink;
  relatedConversations: RelatedConversation[];
  resources: Resource[];
  contributors: Contributor[];
  acceptanceCriteria: AcceptanceCriterion[];
}

export const INITIAL_BLOGS: Blog[] = initialBlogs as Blog[];
export const INITIAL_TESTIMONIALS: Testimonial[] = initialTestimonials as Testimonial[];
export const INITIAL_IDEAS: Idea[] = initialIdeas as Idea[];


// Helpers with automatic seed-data initialization
export function getBlogs(): Blog[] {
  const data = localStorage.getItem("svabharat_blogs");
  if (!data) {
    localStorage.setItem("svabharat_blogs", JSON.stringify(INITIAL_BLOGS));
    return INITIAL_BLOGS;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_BLOGS;
  }
}

export function saveBlogs(blogs: Blog[]): void {
  localStorage.setItem("svabharat_blogs", JSON.stringify(blogs));
  // Trigger a custom event to notify other components in the same tab
  window.dispatchEvent(new Event("svabharat_blogs_updated"));
}

export function getTestimonials(): Testimonial[] {
  const data = localStorage.getItem("svabharat_testimonials");
  if (!data) {
    localStorage.setItem("svabharat_testimonials", JSON.stringify(INITIAL_TESTIMONIALS));
    return INITIAL_TESTIMONIALS;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_TESTIMONIALS;
  }
}

export function saveTestimonials(testimonials: Testimonial[]): void {
  localStorage.setItem("svabharat_testimonials", JSON.stringify(testimonials));
  // Trigger a custom event to notify other components in the same tab
  window.dispatchEvent(new Event("svabharat_testimonials_updated"));
}

export function getIdeas(): Idea[] {
  const data = localStorage.getItem("svabharat_ideas");
  if (!data) {
    localStorage.setItem("svabharat_ideas", JSON.stringify(INITIAL_IDEAS));
    return INITIAL_IDEAS;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_IDEAS;
  }
}

export function getIdeaById(id: string): Idea | undefined {
  const ideas = getIdeas();
  return ideas.find((item) => item.id === id || item.id === id.toLowerCase());
}

export function saveIdeas(ideas: Idea[]): void {
  localStorage.setItem("svabharat_ideas", JSON.stringify(ideas));
  window.dispatchEvent(new Event("svabharat_ideas_updated"));
}


