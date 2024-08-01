// app/speakers/[model]/page.tsx
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchSpeakerByModel } from '@/app/lib/fetcher';

type Speaker = {
  id: number;
  is_new: boolean;
  title: string;
  description: string;
  image_url: string;
  in_the_box: { item: string; quantity: number }[];
  gallery_images: string[];
  features: string;
  price: string;
  model: string;
};

export default function Page({ params }: { params: { model: string } }) {
  const { model } = params;
  const [speaker, setSpeaker] = useState<Speaker | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadSpeaker() {
      try {
        const data = await fetchSpeakerByModel(model);
        if (!data) {
          setError('Failed to load data.');
        } else {
          setSpeaker(data);
        }
      } catch (err) {
        console.error(`Error loading Speaker data:`, err);
        setError('Failed to load Speaker data.');
      }
    }
    loadSpeaker();
  }, [model]);

  if (error) {
    return <p className='text-center text-gray-500 py-12'>{error}</p>;
  }

  if (!speaker) {
    return <p className='text-center text-gray-500 py-12'>Speaker not found</p>;
  }

  return (
    <div>
      <h1 className='flex items-center justify-center text-4xl bg-zinc-900 text-white uppercase py-24 tracking-[.1em] font-bold'>
        {speaker.title}
      </h1>
      <div className='bg-white px-8 lg:px-24 py-12'>
        <div className='flex flex-col lg:flex-row gap-6'>
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
            <p className='text-dark-grey text-center lg:text-start mt-4'>
              <strong>Features: </strong>{speaker.features}
            </p>
            <p className='text-dark-grey text-center lg:text-start mt-4'>
              <strong>Price: </strong>${speaker.price}
            </p>
            <button className="btn bg-primary px-8 py-4 uppercase font-bold self-center lg:self-start mt-12 text-white">
              See product
            </button>
          </div>
        </div>
        <div className='mt-12'>
          <h3 className='text-2xl font-bold mb-6'>Gallery</h3>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='flex flex-col gap-6'>
              <Image
                className='rounded-lg'
                src={speaker.gallery_images[0]}
                alt={`${speaker.title} gallery image 1`}
                width={1080}
                height={560}
              />
              <Image
                className='rounded-lg'
                src={speaker.gallery_images[1]}
                alt={`${speaker.title} gallery image 2`}
                width={1080}
                height={560}
              />
            </div>
            <div>
              <Image
                className='rounded-lg'
                src={speaker.gallery_images[2]}
                alt={`${speaker.title} gallery image 3`}
                width={1080}
                height={1120}
              />
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <h3 className='text-2xl font-bold mb-6'>In the Box</h3>
          <ul>
            {speaker.in_the_box.map((item, index) => (
              <li key={index} className='text-dark-grey text-center lg:text-start'>
                {item.quantity}x {item.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
