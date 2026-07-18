import initialBlogs from "../data/blogs.json";
import initialTestimonials from "../data/testimonials.json";

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

export const INITIAL_BLOGS: Blog[] = initialBlogs as Blog[];
export const INITIAL_TESTIMONIALS: Testimonial[] = initialTestimonials as Testimonial[];


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

