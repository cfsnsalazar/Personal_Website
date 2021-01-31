import Head from 'next/head';
import React, { ReactElement } from 'react';
import Layout from '../components/layout';
import { NavPage } from '../components/navMenu';

export default function Portfolio(): ReactElement {
    return (
        <Layout page={NavPage.USES}>
            <Head>
                <title>{'Napoleon Salazar Uses'}</title>
            </Head>
            <section className="text-xl leading-7 m-6">
                <p>USES</p>
            </section>
        </Layout>
    );
}
