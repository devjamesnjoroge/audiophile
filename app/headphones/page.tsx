// app/page.tsx
import Image from 'next/image';
import { use } from 'react';
import { fetchFromApi } from '../lib/fetcher';

type Headphone = {
  id: number;
  is_new: boolean;
  title: string;
  description: string;
  image_url: string;
};

async function fetchHeadphones() {
  try {
    const data: Headphone[] = await fetchFromApi('headphones');
    return data;
} catch (error) {
    console.error('Error fetching headphones:', error);
    return [];
}
}

export default function HomePage() {
  const headphones = use(fetchHeadphones());

  return (
    <div>
      <h1 className='flex items-center justify-center text-4xl bg-zinc-900 text-white uppercase py-24 tracking-[.1em] font-bold'>Headphones</h1>
      <ul className='space-y-6 bg-white px-8 lg:px-24 py-12'>
        {headphones.map((headphone) => (
          <li
            key={headphone.id}
            className={`bg-white flex ${headphone.id % 2 === 0 ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row'} gap-6 p-4 lg:p-6`}
          >
            <div className='flex-shrink-0 w-full lg:w-1/2 flex items-center justify-center py-12'>
              <Image
                className='w-[90%] h-auto rounded-lg'
                src={headphone.image_url}
                alt={headphone.title}
                width={1080}
                height={1120}
              />
            </div>
            <div className='flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 lg:pe-24'>
              <p className='text-primary tracking-[.3em] uppercase mb-2'>
                {headphone.is_new ? 'New product' : 'Old product'}
              </p>
              <h2 className='uppercase font-bold text-3xl text-secondary mb-4 text-center lg:text-start'>
                {headphone.title}
              </h2>
              <p className='text-dark-grey text-center lg:text-start'>
                {headphone.description}
              </p>
              <button className="btn bg-primary px-8 py-4 uppercase font-bold self-center lg:self-start mt-12 text-white">
                See product
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
