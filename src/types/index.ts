export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
}

export interface TechStack {
  name: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
