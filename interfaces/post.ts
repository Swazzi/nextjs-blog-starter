import type Author from './author';

type PostType = {
  slug: string;
  title: string;
  date: string;
  author: Author;
  excerpt: string;
  content: string;
  cover_image: string;
};

export default PostType;
