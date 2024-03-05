// types
import type { NextPage } from 'next';

// components
import Layout from '../components/layout';
import AboutCard from '../components/aboutCard';

// styles
// icons
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Alert from '../components/alert';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';

import { motion } from 'framer-motion';

import cx from 'classnames';

import Link from 'next/link'

const Index: NextPage = () => {
    const router = useRouter();
    const [messageReceivedShown, showMessageReceived] = useState(false);

    useEffect(() => {
        if (router.query.hasOwnProperty('messageReceived')) {
            showMessageReceived(true);
            router.push('/');
        }
    }, [router]);

    return (
        <Layout active='home'>
            <>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    id='about'
                    className='flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all'
                >
                    <h1 className='block w-full font-extrabold text-center text-5xl text-slate-700 dark:text-slate-50 mb-3'>
                        Rabindranath Tagore
                    </h1>
                    <p className='block w-full text-center text-lg text-slate-800 dark:text-slate-400 mb-3'>
                        Indian polymath
                    </p>
                    <div className='flex justify-center'><img width={"30%"} src={"https://upload.wikimedia.org/wikipedia/commons/d/d1/Rabindranath_Tagore.jpg"} /></div>
                    <ul
                            className={cx(
                                'w-full flex justify-center space-x-3 text-xl my-4 mx-6 md:flex-row md:space-x-3 text-slate-800'
                            )}
                        >
                            <li>
                                <Link href='/anthem'>
                                    <button className={cx('block p-2 my-1 pr-4 pl-3 rounded transition-colors md:my-auto border hover:border-0')}>
                                        Watch me sing Jana Gana Mana
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href='/about'>
                                <button className={cx('block p-2 my-1 pr-4 pl-3 rounded transition-colors md:my-auto border hover:border-0')}>
                                        See my interview with the Times of India
                                    </button>
                                </Link>
                            </li>
                        </ul>
                        <Link href='/analysis'>
                                <button className={cx('text-3xl block p-2 my-1 pr-4 pl-3 rounded transition-colors md:my-auto border border-black hover:border-0')}>
                                        A promising student&apos;s interpretation of my works
                                    </button>
                                </Link>
                </motion.div>
            </>
        </Layout>
    );
};

export default Index;
