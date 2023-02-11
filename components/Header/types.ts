export enum Page {
  Home = "/",
  About = "/about",
  Projects = "/projects",
  Contact = "/contact",
}

export interface MenuItem {
  label: string;
  url: Page;
  extra: string;
  mobileOnly?: true;
  icon: React.ReactNode;
}
