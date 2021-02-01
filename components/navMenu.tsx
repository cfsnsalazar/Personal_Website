import React, { ReactElement, useState } from 'react';
import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Sidebar } from './sidebar';
import Link from 'next/link';

export function NavMenu({ page }: { page: NavPage }): ReactElement {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="container mx-auto max-w-4xl">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-expanded="false"
                                onClick={() => setIsOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg
                                    className="hidden h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                            <div className=" flex items-center">
                                <Link href="/">
                                    <a>
                                        <img src="../images/logo.png" className="w-48" />
                                    </a>
                                </Link>
                            </div>
                            <div className="hidden sm:flex sm:w-full sm:ml-6 sm:justify-end">
                                <div className="flex space-x-4 ">
                                    <Link href="/about">
                                        <a
                                            className={clsx(
                                                page === NavPage.ABOUT
                                                    ? 'flex bg-blue-300 text-black px-3 py-2 rounded-md text-sm font-medium items-center'
                                                    : 'flex text-black hover:bg-blue-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium items-center',
                                            )}
                                        >
                                            About Me
                                        </a>
                                    </Link>
                                    <Link href="/blog">
                                        <a
                                            className={clsx(
                                                page === NavPage.BLOG
                                                ? 'flex bg-blue-300 text-black px-3 py-2 rounded-md text-sm font-medium items-center'
                                                : 'flex text-black hover:bg-blue-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium items-center',
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
                                            href="#"
                                            className={clsx(
                                                page === NavPage.USES
                                                ? 'flex bg-blue-300 text-black px-3 py-2 rounded-md text-sm font-medium items-center'
                                                : 'flex text-black hover:bg-blue-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium items-center',
                                            )}
                                        >
                                            Uses
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <>
                            <Transition show={isOpen}>
                                {/* mobile overlay/backdrop */}
                                <Transition.Child
                                    enter="transition-opacity ease-linear duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition-opacity ease-linear duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    className="sm:hidden fixed w-full h-full top-0 left-0"
                                >
                                    <div className="absolute w-full h-full bg-gray-900 opacity-75" />
                                </Transition.Child>
                                {/* mobile sliding sidebar */}
                                <Transition.Child
                                    enter="transition ease-in-out duration-300 transform"
                                    enterFrom="-translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transition ease-in-out duration-300 transform"
                                    leaveFrom="translate-x-0"
                                    leaveTo="-translate-x-full"
                                    className="sm:hidden h-full w-screen z-10 fixed top-0 left-0 flex items-start"
                                >
                                    <Sidebar page={page} />
                                    <button className="p-4 h-auto flex-grow-0" onClick={() => setIsOpen(false)}>
                                        <svg
                                            className="h-6 w-6 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </Transition.Child>
                            </Transition>
                        </>
                    </div>
                </div>
            </nav>
        </>
    );
}

export enum NavPage {
    HOME,
    ABOUT,
    BLOG,
    PORTFOLIO,
    USES,
}
