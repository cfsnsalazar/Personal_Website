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
                <div className="flex md:flex-row flex-col items-center md:mt-16 mb-16">
                    <div className="flex flex-auto md:flex-none justify-center">
                        <img src="../images/profile.jpg" className="rounded-full m-4 w-48 sm:w-56 h-48 sm:h-56" />
                    </div>
                    <div className="flex-col items-center">
                        <h1 className="text-5xl leading-12 font-extrabold text-center">{"Hola! I'm Napoleon"}</h1>
                        <p className=" mx-auto mt-6 text-xl font-semibold text-gray-600 text-center italic">
                            {'I work at Coolfire Solutions as a Mobile Developer building Core'}
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
export default Home;
