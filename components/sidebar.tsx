import clsx from 'clsx';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { NavPage } from './navMenu';
export function Sidebar({ page }: { page: NavPage }): ReactElement {
    return (
        <aside className="bg-white sm:bg-gray-200 flex flex-col h-screen sm:h-full items-center justify-between w-full">
            <div className="flex flex-col w-full p-4 space-y-2">
                <Link href="/">
                    <a
                        className={clsx(
                            page === NavPage.HOME
                                ? 'bg-blue-800 text-white px-3 py-2 rounded-md text-sm font-medium'
                                : 'text-black hover:bg-blue-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium',
                        )}
                    >
                        Home
                    </a>
                </Link>
                <Link href="/about">
                    <a
                        className={clsx(
                            page === NavPage.ABOUT
                                ? 'bg-blue-800 text-white px-3 py-2 rounded-md text-sm font-medium'
                                : 'text-black hover:bg-blue-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium',
                        )}
                    >
                        About Me
                    </a>
                </Link>
                <Link href="/blog">
                    <a
                        className={clsx(
                            page === NavPage.BLOG
                                ? 'bg-blue-800 text-white px-3 py-2 rounded-md text-sm font-medium'
                                : 'text-black hover:bg-blue-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium',
                        )}
                    >
                        Blog
                    </a>
                </Link>
                {/* TODO: Enable once a project is available
                <Link href="/portfolio">
                    <a
                        className={clsx(
                            page === NavPage.PORTFOLIO
                                ? 'bg-gray-400 text-black px-3 py-2 rounded-md text-sm font-medium'
                                : 'text-black hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium',
                        )}
                    >
                        Portfolio
                    </a>
                </Link> */}
                <Link href="/uses">
                    <a
                        className={clsx(
                            page === NavPage.USES
                                ? 'bg-blue-800 text-white px-3 py-2 rounded-md text-sm font-medium'
                                : 'text-black hover:bg-blue-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium',
                        )}
                    >
                        Uses
                    </a>
                </Link>
            </div>
        </aside>
    );
}
