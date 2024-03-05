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

const people = [
    {
        name: 'Abheek Dhawan',
        image: '/img/team/abheek-dhawan.jpg',
        role: 'Guest',
        bio: 'An avid programmer and astronomer, Abheek enjoys delving into the human aspect behind science.',
        links: [
            {
                link: 'https://github.com/abheekda1',
                node: (
                    <FaGithub className='inline-block mr-2 mb-2 w-4 fill-slate-700 dark:fill-slate-50' />
                ),
            },
            {
                link: 'mailto:adhawan63@ladueschools.net',
                node: (
                    <FaEnvelope className='inline-block mr-2 mb-2 w-4 fill-slate-700 dark:fill-slate-50' />
                ),
            },
        ],
    },
    {
        name: 'William Li',
        image: '/img/team/william-li.jpg',
        role: 'Guest',
        bio: "Book nerd and five-time Olympic medalist, enjoys ice cream.",
        links: [
            {
                link: 'mailto:wli78@ladueschools.net',
                node: (
                    <FaEnvelope className='inline-block mr-2 mb-2 w-4 fill-slate-700 dark:fill-slate-50' />
                ),
            },
        ]
    },
    {
        name: 'Matthew Awad',
        image: '/img/team/matthew-awad.jpg',
        role: 'Guest',
        bio: "Besides reading philosophical books, Matthew loves to play tennis, perform on his oboe, and enjoy the outdoors with his family and friends.",
        links: [
            {
                link: 'mailto:mawad97@ladueschools.net',
                node: (
                    <FaEnvelope className='inline-block mr-2 mb-2 w-4 fill-slate-700 dark:fill-slate-50' />
                ),
            },
        ]
    },
    {
        name: 'Aditya Jain',
        image: '/img/team/adi-jain.jpg',
        role: 'Host',
        bio: "Adi is a senior at Ladue Horton Watkins High School, in his free time you can find him guilty snacking on pita chips.",
        links: [
            {
                link: 'mailto:ajain42@ladueschools.net',
                node: (
                    <FaEnvelope className='inline-block mr-2 mb-2 w-4 fill-slate-700 dark:fill-slate-50' />
                ),
            },
        ]
    }
];

const About: NextPage = () => {
    const router = useRouter();
    const [messageReceivedShown, showMessageReceived] = useState(false);

    useEffect(() => {
        if (router.query.hasOwnProperty('messageReceived')) {
            showMessageReceived(true);
            router.push('/');
        }
    }, [router]);

    return (
        <Layout active='poem'>
            <>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    id='learn-more'
                    className='flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all'
                >
                    <h1 className='block w-full font-extrabold text-center text-3xl text-slate-700 dark:text-slate-50 mb-5'>
                        The Deceptive Mind<br/>
                        <span className='text-sm'>Based on Gitanjali 35</span>
                    </h1>
                    <p className='block w-full text-center text-xl text-slate-800 dark:text-slate-400 mb-3'>
                    When the man is without honesty and his thoughts are concealed<br />
When knowledge is false<br />
Where artists have become isolated<br />
By deep independent rifts<br />
When lies come out from a valley of truth<br />
When tireless greed stretches its arms to join deception<br />
When the clouds of certainty have lost their way<br />
Into the slippery slopes of stoic stone<br />
When the mind is led astray by thee<br />
Into ever-widening dismissal of thought<br />
Into this man of uncertainty, almighty, let reality arise.<br />
                    </p>
                    <p className='text-sm mx-24 mt-10'>I know the poem is not quite 15 lines but I wanted to capture the form of the original poem which was sonnet-like in proposing a problem or question and concisely proposing a solution, in this case the last line. I also wanted to replace the original one which spoke of bringing humanity into a positive place to think of time instead as Tagore often did and to take the negative side, bringing deceptive people into a more truthful time.</p>
                </motion.div>
            </>
        </Layout>
    );
};

export default About;
