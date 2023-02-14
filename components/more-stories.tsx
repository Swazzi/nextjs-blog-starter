import PostPreview from './post-preview';
import type Post from '../interfaces/post';
import Pagination from './pagination';
import { useState } from 'react';
import { paginate } from './paginate';

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const pagesCount = Math.ceil(posts.length/pageSize);
  const onPageChange = (page) => {
    setCurrentPage(page);  
  }
const paginatedPosts = paginate(posts, currentPage, pageSize);

  return (
    <section>
      <div className="container mx-auto flex flex-wrap items-center">
      {paginatedPosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            cover_image={post.cover_image}
          />
        ))}
      </div>
        <Pagination
          items={posts.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={onPageChange}
        />
    </section>
  );
};

export default MoreStories;
