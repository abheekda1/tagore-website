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
        image: '/img/team/abheek-dhawan.png',
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
        <Layout active='home'>
            <>
                {(() => {})()}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    id='about'
                    className='flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all'
                >
                    <h1 className='block w-full font-extrabold text-center text-5xl text-slate-700 dark:text-slate-50 mb-3'>
                        Meet our team!
                    </h1>
                    <p className='block w-full text-center text-lg text-slate-800 dark:text-slate-400 mb-3'>
                        We are composed of high school students dedicated to learning about
                        Philosophy in Pages&#8482;.
                    </p>
                    {people.map((p, idx) => (
                        <AboutCard
                            key={idx}
                            name={p.name}
                            pic={p.image || '/img/team/profile-pic-default.jpg'}
                            role={p.role || 'Mentor'}
                            bio={p.bio || ''}
                            links={p.links}
                        />
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    id='learn-more'
                    className='flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all'
                >
                    <h1 className='block w-full font-extrabold text-center text-5xl text-slate-700 dark:text-slate-50 mb-3'>
                        What do we do?
                    </h1>
                    <p className='block w-full text-center text-lg text-slate-800 dark:text-slate-400 mb-3'>
                        We delve into various books, whether they be fiction or non-fiction, novels or poetry, looking<br />
                        for how they teach us more about humanity and its place.
                    </p>
                    <div className='grid grid-cols-2 grid-rows-3 gap-4'>
                        <div className='flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-400 shadow-xl rounded-lg text-center px-2 py-2 md:py-8'>
                            <h1 className='text-base md:text-4xl break-words max-w-sm md:max-w-md lg:max-w-lg max-h-sm md:max-h-md lg:max-h-lg font-bold sm:text-2xl my-auto'>
                                Time Threads
                            </h1>
                        </div>
                        <div className='flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-200 shadow-xl rounded-lg text-center px-2 py-2 md:py-8'>
                            <p className='text-sm md:text-base max-w-sm md:max-w-md lg:max-w-lg my-auto'>
                                Looking into time, how it moves, and how it is perceived.
                            </p>
                        </div>
                        <div className='flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-200 shadow-xl rounded-lg text-center px-2 py-2 md:py-8'>
                            <p className='text-sm md:text-base max-w-sm md:max-w-md lg:max-w-lg my-auto'>
                                Searching for reasons other than science that provide a reason we perceive the world around us how we do.
                            </p>
                        </div>
                        <div className='flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-400 shadow-xl rounded-lg text-center px-2 py-2 md:py-8'>
                            <h1 className='text-base md:text-4xl break-words max-w-sm md:max-w-md lg:max-w-lg max-h-sm md:max-h-md lg:max-h-lg font-bold sm:text-2xl my-auto'>
                                Religious Reflection
                            </h1>
                        </div>
                        <div className='flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-400 shadow-xl rounded-lg text-center px-2 py-2 md:py-8'>
                            <h1 className='text-base md:text-4xl break-words max-w-sm md:max-w-md lg:max-w-lg max-h-sm md:max-h-md lg:max-h-lg font-bold sm:text-2xl my-auto'>
                                Minisodes
                            </h1>
                        </div>
                        <div className='flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-200 shadow-xl rounded-lg text-center px-2 py-2 md:py-8'>
                            <p className='text-sm md:text-base max-w-sm md:max-w-md lg:max-w-lg my-auto'>
                                Short, conversational episodes for a quick tune-in where we talk (and sometimes ramble!) about the topics we love.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    id='get-started'
                    className='flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all'
                >
                    <h1 className='block w-full font-extrabold text-center text-5xl text-slate-700 dark:text-slate-50 mb-3'>
                        How can you find us?
                    </h1>
                    <p className='block w-full text-center text-lg text-slate-800 dark:text-slate-400 mb-3'>
                        See how you can take advantage of the content we put out for the world to see!
                    </p>
                    <div className='flex flex-col justify-center flex-wrap rounded-xl p-4 md:p-8 md:pl-12 md:pb-0 text-slate-700 dark:text-slate-50'>
                        <div className='flex flex-col md:flex-row  items-start md:space-x-4 text-center md:text-left my-3 md:my-5'>
                            <div className='opacity-70 text-center w-12 flex-none rounded-full object-cover m-auto bg-gradient-to-tr text-slate-50 from-cyan-500 via-cyan-400 to-blue-500 p-3'>
                                1
                            </div>
                            <div className='mx-auto md:mx-0 flex-auto md:max-w-lg lg:max-w-2xl'>
                                <h5 className='font-bold text-lg md:text-xl lg:text-2xl'>
                                    Spotify, Apple Podcasts, Audible...
                                </h5>
                                <p className='text-base md:text-lg'>
                                    You can find us pretty much anywhere you can find a podcast!
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row  items-start md:space-x-4 text-center md:text-left my-3 md:my-5'>
                            <div className='opacity-70 text-center w-12 flex-none rounded-full object-cover m-auto bg-gradient-to-tr text-slate-50 from-blue-600 via-indigo-500 to-purple-500 p-3'>
                                2
                            </div>
                            <div className='mx-auto md:mx-0 flex-auto md:max-w-lg lg:max-w-2xl'>
                                <h5 className='no-underline font-bold text-lg md:text-xl lg:text-2xl'>
                                    Our website
                                </h5>
                                <p className='text-base md:text-lg'>
                                    Linked on our website you can find an archive of our podcasts and learn more about our team.
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row  items-start md:space-x-4 text-center md:text-left mt-3 md:mt-5'>
                            <div className='opacity-70 text-center w-12 flex-none rounded-full object-cover m-auto bg-gradient-to-tr text-slate-50 from-purple-500 via-red-400 to-orange-500 p-3'>
                                3
                            </div>
                            <div className='mx-auto md:mx-0 flex-auto md:max-w-lg lg:max-w-2xl'>
                                <h5 className='no-underline font-bold text-lg md:text-xl lg:text-2xl'>
                                    Patreon
                                </h5>
                                <p className='text-base md:text-lg'>
                                    Visit our Patreon for exclusive content and to support this project so it can continue for years to come.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    id='contact-us'
                    className='flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all'
                >
                    <h1 className='block w-full font-extrabold text-center text-5xl text-slate-700 dark:text-slate-50 mb-5'>
                        Contact us!
                    </h1>

                    <form
                        action='/api/contact'
                        method='post'
                        className='flex flex-col grow sm:max-w-md md:max-w-lg lg:max-w-xl'
                    >
                        <div className='mb-6'>
                            <input
                                type='text'
                                name='personName'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder='Name'
                                required
                            />
                        </div>
                        <div className='mb-6'>
                            <input
                                type='email'
                                name='personEmail'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder='Email'
                                required
                            />
                        </div>
                        <div className='mb-6'>
                            <textarea
                                placeholder='Inquiry'
                                name='inquiryData'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                required
                            />
                        </div>
                        <input
                            type='submit'
                            value='Submit'
                            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            disabled
                        />
                    </form>
                    <p className='block w-full text-center text-slate-700 dark:text-slate-50 mt-2'>
                        ...or email us directly at{' '}
                        <a
                            title='hello@philosophyinpages.com'
                            href='mailto:abheekd@protonmail.com'
                            className='underline underline-offset-2 decoration-dashed decoration-slate-500'
                        >
                            hello@philosophyinpages.com
                        </a>
                    </p>
                </motion.div>
            </>
        </Layout>
    );
};

export default About;
