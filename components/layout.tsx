import React, { ReactElement } from 'react';
import Head from 'next/head';
import { NavMenu, NavPage } from './navMenu';
import { Footer } from './footer';

interface LayoutType {
    children: React.ReactNode;
    page: NavPage;
}

export default function Layout({ children, page }: LayoutType): ReactElement {
    return (
        <div>
            <Head>
                <link rel="icon" href="../images/toon_face.jpg" />
                <meta name="description" content="Napo's blog built with Next.js" />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        'napo.dev',
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={`napo.dev`} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className="flex flex-col items-center">
                <NavMenu page={page} />
            </header>
            <div className="container mx-auto max-w-4xl">
                <main>{children}</main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
