export interface IComment {
  id: number;
  user?: {
    name: string;
    avatar: string;
  };
  content?: {
    text: string;
    image?: string;
  };
  interactions?: {
    likes: number;
    reposts: number;
    comments: number;
  };
}

export interface IBlog {
  id: number;
  user?: {
    name: string;
    avatar: string;
    time: string;
  };
  content?: {
    text: string;
    image?: string;
  };
  interactions?: {
    likes: number;
    reposts: number;
    comments: number;
  };
  comments: IComment[];
  cateId?: string;
}
