import Container from '../components/container';
import MoreStories from '../components/more-stories';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Post from '../interfaces/post';

const messageArray = [{number:1, message: 'Hi'},
                        {number:2, message: 'Welcom To the internet!'},
                        {number:3, message: 'Top of the morning to you, laddies'},
                        {number:4, message: 'FORWARD!'},
                        {number:5, message: 'Bye'},
                        {number:6, message: 'Have a good day'},
                        {number:7, message: 'OK'}];   

type Props = {
  allPosts: Post[],
  randomNumber: number  
};

export default function Index({allPosts, randomNumber}: Props) {
  const message = messageArray[randomNumber-1].message;
  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          <div className='xl:px-20 item-center w-full capitalize font-bold'>{message}</div>
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {  
  const randomNumber = Math.ceil(Math.random()*7);
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'excerpt','cover_image']);
  return {
    props: {allPosts, randomNumber }
  };
};