import React, { ReactElement } from 'react';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NavPage } from '../../components/navMenu';

interface PostData {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
}

export default function Post({ postData }: { postData: PostData }): ReactElement {
    return (
        <Layout page={NavPage.BLOG}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article className="m-6">
                <h1 className="text-4xl leading-10 font-extrabold tracking-tighter">{postData.title}</h1>
                <div className="text-sm text-gray-500 mb-4">
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
};
