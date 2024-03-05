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
        <Layout active='about'>
            <>
                {(() => {})()}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    id='about'
                    className='flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all'
                >
                    <h1 className='block w-full font-extrabold text-center text-5xl text-slate-700 dark:text-slate-50 mb-3'>
                        Interviewing Tagore
                    </h1>
                    <p className='block w-full text-center text-lg text-slate-800 dark:text-slate-400 mb-3'>
                        Learn about the life, thoughts, and style of esteemed Indian poet Rabindranath Tagore
                    </p>
                    <img className="mb-3" width={"30%"} src={"https://upload.wikimedia.org/wikipedia/commons/8/8b/Tagore_in_London_1879.jpg"} />
                    <p className="block text-lg m-5 text-slate-800"><strong>Times of India</strong>: Before we get started, would you mind telling us how to pronounce your name?<br /><br />

<strong>Rabindranath Tagore</strong> Of course, my name looks quite different in its transliteration but it is pronounced “Robindronath Takur.” It’s a bit of a long name though, so all of my close friends and family call me Rabi.<br /><br />

<strong>TOI:</strong> Thank you, Mr. Tagore, let’s get started with the interview now.<br /><br />

<strong>TOI:</strong> Can you tell us a little bit about where you come from?<br /><br />

<strong>Rabindranath</strong> Certainly. I am from the Bengal region of India, and I’ve lived my whole life under British rule. As the youngest of thirteen, I wasn&apos;t as interested as my siblings in formal education and preferred to roam around and pursue my own thoughts. My father sent me to England after we traveled Indian, and I particularly recall visiting the Golden Temple in Punjab as inspiration for some of earliest works. After studying in Britain, I moved there and married my wife, before moving back to India in 1901 where I founded an ashram.
<br /><br />
<strong>TOI:</strong> Quite a childhood. As one of one of the most distinguished poets and writers in Indian history, I’m sure you’ve won your fair share of awards. Would you mind sharing some of them with us?
<br /><br />
<strong>Rabindranath</strong> My only really notable award is the Nobel Prize in literature, which I won for my poem “Gitanjali” in 1913. Though that’s the only award I’ve won, there’s now an award named after me called the Rabindranath Tagore Literary Prize, which is awarded yearly to Indian writers worldwide.
<br /><br />
<strong>TOI:</strong> Rabindranath, you often make use of religious allusions in your poetry, such as addressing the “Father” or your “lord” in numerous apostrophes across your works. I’m curious, are you a religious man? If you are, which religion are these references drawn from; a specific Hindu god, or the almighty god from one of the Abrahamic religions?
<br /><br />
<strong>Rabindranath</strong> That is a very good question, and I’m happy to share my thoughts on religion with you. Throughout my life and my works, I have been through much introspection regarding the idea of religion. For the first 23 years of my life, I had followed whatever my father had thought best, in particular the Upanishad teachings of monotheism after the split of the Vedantic institutions when I was a small child. At that point, I hadn’t questioned anything or explored anything myself outside of this institution. With time, however, I ultimately began looking down instead of up, and recently have arrived on more of a religion of man, a more secular ideology that drives my thoughts and interactions
<br /><br />
<strong>TOI:</strong> Thank you for that insight, your humanism is very insightful. Are there any recent works you think are particularly special or that you would like to share?
<br /><br />
<strong>Rabindranath</strong> Well it’s not quite recent, but I developed Jana Gana Mana soon before I received the Nobel Prize, and it seems that the Indians have adapted it to their song of choice were they to achieve independence.
<br /><br />
<strong>TOI:</strong> Thank you for your time Mr. Rabindranath, it was a pleasure to get the chance to speak to you and both you and your works and extremely inspiring.
<br /><br />
<strong>Rabindranath</strong> Thank you for having me.
</p>
                </motion.div>
            </>
        </Layout>
    );
};

export default About;
