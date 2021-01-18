import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

export function Home({ allPostsData }): ReactElement {
    return (
        <Layout home={true}>
            <Head>
                <title>{'Napoleon Salazar'}</title>
            </Head>
            <section className="text-xl leading-7 mt-3">
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn"> our Next.js tutorial</a>.)
                </p>
            </section>
            <section className="text-xl leading-7">
                <h2 className="text-3xl leading-7 mt-6 mb-6 font-bold"> Blog </h2>
                <ul className="list-none p-0 m-0">
                    {allPostsData.map(({ id, date, title }) => (
                        <li className="mb-3" key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default Home;
