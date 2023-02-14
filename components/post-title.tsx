import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return <h1 className="text-5xl mb-10 Rectangle-1 py-10 xl:px-20">{children}</h1>;
};

export default PostTitle;
