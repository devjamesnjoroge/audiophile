// app/earphones/[model]/page.tsx
'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchEarphoneByModel } from '@/app/lib/fetcher';

type Earphone = {
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

export default function EarphonePage({ params }: { params: { model: string } }) {
  const { model } = params;
  const [earphone, setEarphone] = useState<Earphone | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadEarphone() {
      try {
        const data = await fetchEarphoneByModel(model);
        if (!data) {
          setError('Failed to load data.');
        } else {
          setEarphone(data);
        }
      } catch (err) {
        console.error(`Error loading earphone data:`, err);
        setError('Failed to load earphone data.');
      }
    }
    loadEarphone();
  }, [model]);

  if (error) {
    return <p className='text-center text-gray-500 py-12'>{error}</p>;
  }

  if (!earphone) {
    return <p className='text-center text-gray-500 py-12'>Earphone not found</p>;
  }

  return (
    <div>
      <h1 className='flex items-center justify-center text-4xl bg-zinc-900 text-white uppercase py-24 tracking-[.1em] font-bold'>
        {earphone.title}
      </h1>
      <div className='bg-white px-8 lg:px-24 py-12'>
        <div className='flex flex-col lg:flex-row gap-6'>
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
            <p className='text-dark-grey text-center lg:text-start mt-4'>
              <strong>Features: </strong>{earphone.features}
            </p>
            <p className='text-dark-grey text-center lg:text-start mt-4'>
              <strong>Price: </strong>${earphone.price}
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
                src={earphone.gallery_images[0]}
                alt={`${earphone.title} gallery image 1`}
                width={1080}
                height={560}
              />
              <Image
                className='rounded-lg'
                src={earphone.gallery_images[1]}
                alt={`${earphone.title} gallery image 2`}
                width={1080}
                height={560}
              />
            </div>
            <div>
              <Image
                className='rounded-lg'
                src={earphone.gallery_images[2]}
                alt={`${earphone.title} gallery image 3`}
                width={1080}
                height={1120}
              />
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <h3 className='text-2xl font-bold mb-6'>In the Box</h3>
          <ul>
            {earphone.in_the_box.map((item, index) => (
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
