import React, { ReactElement } from 'react';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';

interface PostData {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
}

export default function Post({ postData }: { postData: PostData }): ReactElement {
    return (
        <Layout home={false}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className="text-4xl leading-10 font-extrabold tracking-tighter">{postData.title}</h1>
                <div className="text-sm text-gray-500 mb-4">
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}
