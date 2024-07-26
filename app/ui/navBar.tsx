import Link from 'next/link';
import { FaCartShopping } from 'react-icons/fa6';

export const Navbar = () => {
  return (
    <div className="px-6 md:px-28 bg-zinc-900">
      <div className="wrapper flex justify-between items-center py-8 border-b border-text-grey">
      <b className="logo text-2xl text-white font-extrabold">audiophile</b>
      <ul className="list-none flex items-center gap-5 hidden md:flex">
        <li>
          <Link className="text-light-grey font-bold text-sm uppercase inline-block" href={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className="text-light-grey font-bold text-sm uppercase inline-block" href={'/colors'}>
            headphones
          </Link>
        </li>
        <li>
          <Link className="text-light-grey font-bold text-sm uppercase inline-block" href={'/colors'}>
            speakers
          </Link>
        </li>
        <li>
          <Link className="text-light-grey font-bold text-sm uppercase inline-block" href={'/colors'}>
            earphones
          </Link>
        </li>
        <li>
          <Link className="text-light-grey font-bold text-sm uppercase inline-block" href={'/colors'}>
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
