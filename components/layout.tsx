import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface LayoutType {
    children: React.ReactNode;
    home: boolean;
}

export default function Layout({ children, home }: LayoutType): ReactElement {
    return (
        <div className="container mx-auto p-8 max-w-2xl">
            <Head>
                <link rel="icon" href="/public/images/toon_face.jpg" />
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
                {home ? (
                    <>
                        <img src="/images/profile.jpg" className="rounded-full w-40 h-40" alt={'Napoleon Salazar'} />
                        <h1 className="text-5xl leading-5 font-extrabold m-8 tracking-tighter">{`Napoleon Salazar`}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <img
                                    src="/images/profile.jpg"
                                    className="rounded-full w-20 h-20"
                                    alt={'Napoleon Salazar'}
                                />
                            </a>
                        </Link>
                        <h2 className="text-2xl leading-2 font-extrabold m-4 tracking-tighter">
                            <Link href="/">
                                <a>Napoleon Salazar</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className="mt-4">
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}
