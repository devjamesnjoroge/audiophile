// app/page.tsx
import Image from 'next/image';
import { use } from 'react';
import { fetchSpeakers } from '../lib/fetcher';

type Speaker = {
  id: number;
  is_new: boolean;
  title: string;
  description: string;
  image_url: string;
};

export default function HomePage() {
  const speakers = use(fetchSpeakers());

  // Check if the data is an array and has at least one item
  if (!Array.isArray(speakers) || speakers.length === 0) {
    return <p className='text-center text-gray-500 py-12'>No speakers available</p>;
  }

  return (
    <div>
      <h1 className='flex items-center justify-center text-4xl bg-zinc-900 text-white uppercase py-24 tracking-[.1em] font-bold'>
        Speakers
      </h1>
      <ul className='space-y-6 bg-white px-8 lg:px-24 py-12'>
        {speakers.map((speaker) => (
          <li
            key={speaker.id}
            className={`bg-white flex ${speaker.id % 2 === 0 ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row'} gap-6 p-4 lg:p-6`}
          >
            <div className='flex-shrink-0 w-full lg:w-1/2 flex items-center justify-center py-12'>
              <Image
                className='w-[90%] h-auto rounded-lg'
                src={speaker.image_url}
                alt={speaker.title}
                width={1080}
                height={1120}
              />
            </div>
            <div className='flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 lg:pe-24'>
              <p className='text-primary tracking-[.3em] uppercase mb-2'>
                {speaker.is_new ? 'New product' : 'Old product'}
              </p>
              <h2 className='uppercase font-bold text-3xl text-secondary mb-4 text-center lg:text-start'>
                {speaker.title}
              </h2>
              <p className='text-dark-grey text-center lg:text-start'>
                {speaker.description}
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
