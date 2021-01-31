import Head from 'next/head';
import React, { ReactElement } from 'react';
import Layout from '../components/layout';
import { NavPage } from '../components/navMenu';

export default function About(): ReactElement {
    return (
        <Layout page={NavPage.ABOUT}>
            <Head>
                <title>{'Napoleon Salazar About'}</title>
            </Head>
            <section className="text-xl leading-7 m-6">
                <p>ABOUT</p>
            </section>
        </Layout>
    );
}
