import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Card({
    titleText,
    subtitleText,
    descriptionText,
    image,
    links,
}: {
    titleText: string;
    subtitleText: string;
    descriptionText: string;
    image: string;
    links?: Array<{ link: string; node: ReactNode }>;
}) {
    return (
        <div className='flex flex-col max-w-sm rounded-md overflow-hidden shadow-lg bg-slate-100 dark:bg-gray-700 transition-all my-2 sm:m-3 md:m-4 lg:m-5'>
            <Image
                className='object-cover'
                src={image}
                width='612'
                height='612'
                alt=''
            />
            <div className='px-6 py-4'>
                <div className='mb-2'>
                    <h1 className='font-bold text-xl dark:text-white'>
                        {titleText}
                    </h1>
                    <span className='text-slate-500'>{subtitleText}</span>
                </div>
                <p className='text-slate-700 dark:text-slate-50 text-base'>
                    {descriptionText}
                </p>
            </div>
            <div className='flex flex-col grow px-6 pt-4 pb-2'>
                <div className='flex flex-row mt-auto'>
                    {links?.map((l, idx) => (
                        <Link key={idx} href={l.link}>
                            <a>{l.node}</a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
