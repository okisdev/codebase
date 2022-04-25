import Head from 'next/head';

import { allPosts } from 'contentlayer/generated';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

export async function getStaticProps() {
    const posts = allPosts;

    return {
        props: {
            posts,
        },
    };
}

const Home = ({ posts }: any) => {
    return (
        <div>
            <Head>
                <title>Harry Yep&apos;s Codebase</title>
            </Head>

            <div className='font-Rubik'>
                <Navbar />

                <Header />

                <Body posts={posts} />

                <Footer />
            </div>
        </div>
    );
};

export default Home;
