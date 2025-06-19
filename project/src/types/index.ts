export interface Link {
  id: number;
  title: string;
  url: string;
}

export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}