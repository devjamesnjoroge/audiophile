'use client'

import Link from 'next/link';
import { FaCartShopping } from 'react-icons/fa6';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const absoluteNav = 'absolute top-0 left-0 w-full z-100';
  const pathname = usePathname();
  console.log(typeof(pathname));

  return (
    <div className={clsx("px-6 lg:px-28 bg-zinc-900", pathname === "/" && absoluteNav)}>
      <div className="wrapper flex justify-between items-center py-8 border-b border-text-grey">
      <b className="logo text-2xl text-white font-extrabold">audiophile</b>
      <ul className="list-none flex items-center gap-5 hidden lg:flex">
        <li>
          <Link className="text-text-grey font-bold uppercase inline-block" href={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className="text-text-grey font-bold uppercase inline-block" href={'/colors'}>
            Colors
          </Link>
        </li>
      </ul>
      <h3 className="flex items-center">
        <FaCartShopping className="text-2xl" color="white" />
      </h3>
      </div>
    </div>
  );
};
