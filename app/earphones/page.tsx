// app/earphones/page.tsx
import Image from 'next/image';
import { use } from 'react';
import { fetchEarphones } from '../lib/fetcher';
import Link from 'next/link';


export default function HomePage() {
  const earphones = use(fetchEarphones());

  // Check if the data is an array and has at least one item
  if (!Array.isArray(earphones) || earphones.length === 0) {
    return <p className='text-center text-gray-500 py-12'>No earphones available</p>;
  }

  return (
    <div>
      <h1 className='flex items-center justify-center text-4xl bg-zinc-900 text-white uppercase py-24 tracking-[.1em] font-bold'>
        Earphones
      </h1>
      <ul className='space-y-6 bg-white px-8 lg:px-24 py-12'>
        {earphones.map((earphone) => (
          <li
            key={earphone.id}
            className={`bg-white flex ${earphone.id % 2 === 0 ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row'} gap-6 p-4 lg:p-6`}
          >
            <div className='flex-shrink-0 w-full lg:w-1/2 flex items-center justify-center py-12'>
              <Image
                className='w-[90%] h-auto rounded-lg'
                src={earphone.image_url}
                alt={earphone.title}
                width={1080}
                height={1120}
              />
            </div>
            <div className='flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 lg:pe-24'>
              <p className='text-primary tracking-[.3em] uppercase mb-2'>
                {earphone.is_new ? 'New product' : 'Old product'}
              </p>
              <h2 className='uppercase font-bold text-3xl text-secondary mb-4 text-center lg:text-start'>
                {earphone.title}
              </h2>
              <p className='text-dark-grey text-center lg:text-start'>
                {earphone.description}
              </p>
              <Link href={`earphones/${earphone.model}`} className="btn bg-primary px-8 py-4 uppercase font-bold self-center lg:self-start mt-12 text-white">
                See product
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
