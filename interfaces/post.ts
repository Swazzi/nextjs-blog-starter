import type Author from './author';

type PostType = {
  number: number;
  slug: string;
  title: string;
  date: string;
  author: Author;
  excerpt: string;
  content: string;
  cover_image: string;
};

export default PostType;