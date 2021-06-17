export interface Message {
  message: string;
}

export interface BaseEntity {
  id: string | null;
}

export interface Book extends BaseEntity {
  title: string;
  description: string;
  pages: number;
}