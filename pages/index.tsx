import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import { NavPage } from '../components/navMenu';

export function Home(): ReactElement {
    return (
        <Layout page={NavPage.HOME}>
            <Head>
                <title>{'Napoleon Salazar'}</title>
            </Head>
            <section className="text-xl leading-7 m-6">
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn"> our Next.js tutorial</a>.)
                </p>
            </section>
        </Layout>
    );
}
export default Home;
