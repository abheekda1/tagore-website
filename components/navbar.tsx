// react
import React from 'react';

// components
import Link from 'next/link';

// styles
import styles from '../styles/components/Navbar.module.css';
import cx from 'classnames';
// icons
import { MenuIcon } from '@heroicons/react/solid';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

export default function Navbar({
    active,
    isDarkMode,
    toggleDarkMode,
}: {
    active: string;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}) {
    const [isMenuOpen, setMenuOpen] = React.useState(false);

    return (
        <nav
            className={cx(
                'md:bg-transparent md:dark:bg-transparent bg-white border-gray-200 px-2 sm:px-4 py-5 dark:bg-gray-800'
            )}
        >
            <div className='flex flex-wrap justify-between md:justify-start items-center mx-auto'>
                <Link href='/' className='pr-2'>
                    <a className='flex items-center'>
                        <img
                            width={50}
                            height={50}
                            alt='Philosophy in Pages logo'
                            src='/logo-trans.png'
                            className='mr-2'
                        />{' '}
                        <span className='self-center text-xl font-semibold whitespace-nowrap text-slate-700 md:text-slate-700 dark:text-white'>
                            Rabi Tagore
                        </span>
                    </a>
                </Link>
                <button
                    data-collapse-toggle='mobile-menu'
                    type='button'
                    className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                    onClick={() => setMenuOpen(!isMenuOpen)}
                >
                    <MenuIcon className='h-5 w-5 text-gray-500 dark:text-white' />
                </button>
                <div
                    className={cx(
                        { hidden: !isMenuOpen },
                        'w-full md:block md:w-auto md:grow'
                    )}
                    id='mobile-menu'
                >
                    <div className='md:flex md:justify-between'>
                        <ul
                            className={cx(
                                'flex flex-col ease-in-out duration-500 mt-4 mx-6 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium'
                            )}
                        >
                            <li>
                                <Link href='/'>
                                    <a
                                        className={cx(styles.navLink, {
                                            'bg-blue-700 md:bg-transparent text-slate-50 md:text-blue-600 dark:text-white':
                                                active === 'home',
                                            'text-gray-700 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:hover:text-white dark:border-gray-700':
                                                active !== 'home',
                                        })}
                                    >
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/about'>
                                    <a
                                        className={cx(styles.navLink, {
                                            'bg-blue-700 md:bg-transparent text-slate-50 md:text-blue-600 dark:text-white':
                                                active === 'about',
                                            'text-gray-700 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:hover:text-white dark:border-gray-700':
                                                active !== 'about',
                                        })}
                                    >
                                        About
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/analysis'>
                                    <a
                                        className={cx(styles.navLink, {
                                            'bg-blue-700 md:bg-transparent text-slate-50 md:text-blue-600 dark:text-white':
                                                active === 'analysis',
                                            'text-gray-700 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:hover:text-white dark:border-gray-700':
                                                active !== 'analysis',
                                        })}
                                    >
                                        Analysis
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/poem'>
                                    <a
                                        className={cx(styles.navLink, {
                                            'bg-blue-700 md:bg-transparent text-slate-50 md:text-blue-600 dark:text-white':
                                                active === 'poem',
                                            'text-gray-700 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:hover:text-white dark:border-gray-700':
                                                active !== 'poem',
                                        })}
                                    >
                                        Original Poem
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <ul
                            className={cx(
                                'flex flex-wrap space-x-3 mt-4 mx-6 md:flex-row md:space-x-3 md:mt-0 md:text-sm md:font-medium'
                            )}
                        >
                            <li>
                                <a href='/anthem'>
                                    <button
                                        className={cx(
                                            styles.navButton,
                                            styles.blue
                                        )}
                                    >
                                        Jana Gana Mana
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href='/about'>
                                    <button
                                        className={cx(
                                            styles.navButton,
                                            styles.blue
                                        )}
                                    >
                                        TOI Interview
                                    </button>
                                </a>
                            </li>
                            <li>
                                <button
                                    type='button'
                                    className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                                    onClick={toggleDarkMode}
                                >
                                    <SunIcon
                                        className={cx(
                                            { hidden: isDarkMode },
                                            'h-5',
                                            'w-5'
                                        )}
                                    />
                                    <MoonIcon
                                        className={cx(
                                            { hidden: !isDarkMode },
                                            'h-5',
                                            'w-5'
                                        )}
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
