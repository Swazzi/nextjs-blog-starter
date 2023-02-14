import DateFormatter from './date-formatter';
import Link from 'next/link';
import Image from 'next/image';
import type Author from '../interfaces/author';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  cover_image: string;
};

const PostPreview = ({ title, date, excerpt, author, slug, cover_image}: Props) => {
  return (
    <div className='flex xl:pl-20'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg Rectangle-2 my-10'>
        <div className='h-3/5 w-full relative'>
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline"
          >
            <div className=''>
              <Image src={cover_image} fill alt={''} />
            </div>
          </Link>
        </div>
        <div className='p-5'>
          <div className="text-lg">
          <DateFormatter dateString={date} />
          <h3 className="text-5xl mb-3 leading-snug">{title}</h3>
          </div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
