import React, { FC } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';

const IndexPage: FC = () => {
    return (
        <Layout home={true}>
            <Head>
                <title>{'Napoleon Salazar'}</title>
            </Head>
            <section className="text-xl leading-7">
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn"> our Next.js tutorial</a>.)
                </p>
            </section>
        </Layout>
    );
};

export default IndexPage;
