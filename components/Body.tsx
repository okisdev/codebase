import Link from 'next/link';
import { useRouter } from 'next/router';

import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { AiOutlineClear } from 'react-icons/ai';
import { BiDownload } from 'react-icons/bi';

const Body = ({ posts }: any) => {
    const { query } = useRouter();

    return (
        <div className='container mx-auto py-10 w-11/12 md:w-7/12 p-1 h-[650px]'>
            <div className='flex justify-between'>
                <div className='w-4/12 p-1 h-[650px] overflow-scroll'>
                    {posts.map((post: any) => {
                        return (
                            <div key={post._id}>
                                <p className='text-slate-500 text-xs'>{post._raw.sourceFileDir}</p>
                                <Link href={'?language=' + post._raw.sourceFileDir + '&file=' + post._raw.sourceFileName.replace('.mdx', '')}>
                                    <a className='transition ease-in-out duration-500 hover:bg-yellow-400 dark:hover:bg-yellow-600'>{post.title}</a>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className='w-8/12 p-1 leading-loose h-[650px] overflow-scroll overflow-x-auto'>
                    {query.language && query.file ? (
                        <div>
                            <div className='flex flex-row space-x-3'>
                                <Link href='/' passHref>
                                    <button>
                                        <AiOutlineClear className='w-6 h-6' />
                                    </button>
                                </Link>
                                <Link
                                    href={`https://cdn.harrly.com/web/code/${
                                        posts
                                            .find((post: any) => post._raw.sourceFileDir === query.language && post._raw.sourceFileName.replace('.mdx', '') === query.file)
                                            ._raw.sourceFilePath.replace('.mdx', '') +
                                        posts.find((post: any) => post._raw.sourceFileDir === query.language && post._raw.sourceFileName.replace('.mdx', '') === query.file).suffix
                                    }`}
                                    passHref
                                >
                                    <button>
                                        <BiDownload className='w-6 h-6' />
                                    </button>
                                </Link>
                            </div>
                            {posts.find((post: any) => post._raw.sourceFileDir === query.language && post._raw.sourceFileName.replace('.mdx', '') === query.file) ? (
                                <article>
                                    <p className='text-2xl font-bold my-3'>
                                        {posts.find((post: any) => post._raw.sourceFileDir === query.language && post._raw.sourceFileName.replace('.mdx', '') === query.file).title}
                                    </p>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: posts.find((post: any) => post._raw.sourceFileDir === query.language && post._raw.sourceFileName.replace('.mdx', '') === query.file).body.html,
                                        }}
                                    />
                                </article>
                            ) : (
                                <div>
                                    <p>错误</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <p>请先在左侧选择</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Body;
