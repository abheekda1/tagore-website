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

const Analysis: NextPage = () => {
    return (
        <Layout active='analysis'>
            <>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    id='learn-more'
                    className='flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all'
                >
                    <h1 className='block w-full font-extrabold text-center text-5xl text-slate-700 dark:text-slate-50 mb-3'>
                        "Endless Time" Analysis
                    </h1>
                    <p className='block w-full text-center text-lg text-slate-800 dark:text-slate-400 mb-3'>
                        Looking into the author's craft, message, motifs, and literary techniques used to create a meaning.
                    </p>
                    <div className='grid grid-cols-5 grid-rows-3 gap-4'>
                    <div className='row-span-3 col-span-2 flex flex-col bg-slate-50/50 text-slate-700 shadow-xl rounded-lg px-5 py-2 md:py-8'>
                            <div className='text-lg max-w-sm md:max-w-md lg:max-w-lg my-auto'>
                                <p className='text-3xl mb-3 text-slate-400'>Endless Time</p>
                            Time is endless in thy hands, my lord.<br />
There is none to count thy minutes.<br />
<br />
Days and nights pass and ages bloom and fade like flowers.<br />
Thou knowest how to wait.<br />
<br />
Thy centuries follow each other perfecting a small wild flower.<br />
<br />
We have no time to lose,<br />
and having no time we must scramble for a chance.<br />
We are too poor to be late.<br />
<br />
And thus it is that time goes by<br />
while I give it to every querulous man who claims it,<br />
and thine altar is empty of all offerings to the last.<br />
<br />
At the end of the day I hasten in fear lest thy gate be shut;<br />
but I find that yet there is time.<br />
                            </div>
                        </div>
                        <div className='col-span-3 flex flex-col bg-slate-50/50 text-slate-700 shadow-xl rounded-lg px-5 py-2 md:py-8'>
                            <p className='text-sm my-auto'>
                            This poem as a whole explores the concept of time, both its passage and its drive for action (carpe diem). It comprises six stanzas with few verses and no obvious rhyme or form, but it utilizes numerous other poetic devices that better demonstrate the point it is trying to make. The apostrophe to “my lord” suggests Tagore surrendering to some larger force, whether it be a god or some other natural or supernatural concept, and describing how only they can keep track of the infinite time that passes. The concept of a flower is shown twice, showing that days and nights, even years, are short periods of time, wilting like flowers do every season, but centuries are needed to make something perfect, time that we as humans will never have. This is further emphasized by this longest verse also having its own stanza. When he calls us to action with his first person “we” in the fourth stanza, he is changing the perspective of time from one of observation to one of experience and calling us poor in the amount of time we have to do anything, spurring us to do what we want immediately. In the fifth stanza, he takes a more apologetic approach, demonstrating how time is given to all yet few do anything with it, providing no “offerings” to this being that Tagore is addressing. At the very end of his poem, he explores the concept of the memento mori, the time that death is upon him but he squeezes past the “gates” for just a little more time than expected. In doing so, he creates a circular theme of having time yet failing to do something with it, and how it ages so rapidly yet we never have enough time.

                            </p>
                        </div>
                        <div className='col-span-3 flex flex-col bg-slate-50/50 text-slate-700 shadow-xl rounded-lg px-5 py-2 md:py-8'>
                            <p className='text-lg my-auto'>
Because of the manner in which he describes how a large amount of time must pass to perfect anything, an alternate interpretation that could arise from this nuance is to take this as hyperbole and see that one must dedicate a large part of their life, an amount of time that is actually possible, to perfect something rather than take quick action immediately since there is no time to perfect anything.

                            </p>
                        </div>
                        <div className='col-span-3 flex flex-col bg-slate-50/50 text-slate-700 shadow-xl rounded-lg px-5 py-2 md:py-8'>
                            <p className='text-lg my-auto'>
I feel this poem is very reminiscent of all of Tagore’s works, exploring the idea of a lord, a religion or higher being, calling to action over a simple concept, in this case time, and modifying the perspective between first, second, and third person to make a point about the future and human life.

                            </p>
                        </div>
                    </div>
                </motion.div>
            </>
        </Layout>
    );
};

export default Analysis;
