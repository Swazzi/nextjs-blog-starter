import DateFormatter from './date-formatter';
import PostTitle from './post-title';
import type Author from '../interfaces/author';
import Image from 'next/image';

type Props = {
  cover_image: string;
  title: string;
  date: string;
  author: Author;
};

const PostHeader = ({ cover_image, title, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='h-96 relative xl:px-20'>
        <Image className='xl:px-20' src={cover_image} fill alt={''}></Image>  
      </div>
      <div className="max-w-5xl mx-auto px-20">
        <h3 className="text-5xl mb-3 leading-snug font-bold">{title}</h3>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
