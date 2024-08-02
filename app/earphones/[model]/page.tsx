// app/earphones/[model]/page.tsx
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchEarphoneByModel } from '@/app/lib/fetcher';
import Qty from '@/app/ui/qty';
import { Earphone, Product } from '@/app/types';

export default function Page({ params }: { params: { model: string } }) {
  const { model } = params;
  const [earphone, setEarphone] = useState<Earphone | null>(null);
  const [error, setError] = useState<string | null>(null);

  const updateCart = (product: Product, quantity: number) => {
    const cart = JSON.parse(localStorage.getItem('products') || '[]');
    const updatedCart = cart.map((p: Product) => {
      if (p.model === product.model) {
        return { ...p, quantity };
      }
      return p;
    }).filter((p: Product) => p.quantity > 0);

    if (!updatedCart.find((p: Product) => p.model === product.model)) {
      updatedCart.push({ ...product, quantity });
    }

    localStorage.setItem('products', JSON.stringify(updatedCart));
    const totalQty = updatedCart.reduce((acc: number, p: Product) => acc + p.quantity, 0);
    localStorage.setItem('totalQty', totalQty.toString());
  };

  useEffect(() => {
    async function loadEarphone() {
      try {
        const data = await fetchEarphoneByModel(model);
        if (!data) {
          setError('Failed to load data.');
        } else {
          setEarphone({ ...data, quantity: 1 }); // Add default quantity
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
      <h1 className='px-8 lg:px-24 w-full flex items-center justify-center text-4xl bg-zinc-900 text-white uppercase py-24 tracking-[.1em] font-bold'>
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
            <Qty product={earphone} updateCart={updateCart} />
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
          <h3 className='text-2xl font-bold mb-6 text-secondary'>In the Box</h3>
          <ul>
            {earphone.in_the_box.map((item, index) => (
              <li key={index} className='text-dark-grey text-center lg:text-start'>
                <span className='text-primary font-bold'>{item.quantity}x</span> {item.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
