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

const Anthem: NextPage = () => {
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
                        Watch me sing Jana Gana Mana
                    </h1>
                    <p className='block w-full text-center text-lg text-slate-800 dark:text-slate-400 mb-3'>
                        The inspiration for the Indian national anthem
                    </p>
                    <video controls width={"80%"} src={"https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f8/Tagore_singing_Jana_Gana_Mana.webm/Tagore_singing_Jana_Gana_Mana.webm.1080p.vp9.webm"} />
                </motion.div>
            </>
        </Layout>
    );
};

export default Anthem;
