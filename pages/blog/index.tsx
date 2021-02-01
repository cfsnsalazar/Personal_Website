import Head from 'next/head';
import React, { ReactElement } from 'react';
import Layout from '../../components/layout';
import { NavPage } from '../../components/navMenu';
import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';
import Date from '../../components/date';

interface PostData {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
}

import { GetStaticProps } from 'next';

export default function Blog({ allPostsData }: { allPostsData: [PostData] }): ReactElement {
    return (
        <Layout page={NavPage.BLOG}>
            <Head>
                <title>{'Napoleon Salazar Blog'}</title>
            </Head>
            <section className="text-xl leading-7 m-6">
                <section className="text-xl leading-7">
                    <h2 className="text-3xl leading-7 m-6 mb-6 font-bold"> Blog </h2>
                    <ul className="list-none p-0 m-6">
                        {allPostsData.map(({ id, date, title }) => (
                            <li className="mb-3" key={id}>
                                <Link href={`/blog/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <br />
                                <small className="text-sm text-gray-500 mb-4">
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};
