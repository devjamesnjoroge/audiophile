import Link from 'next/link';
import { FaCartShopping } from 'react-icons/fa6';

export const Navbar = () => {
  return (
    <div className="px-6 md:px-28 bg-zinc-900">
      <div className="wrapper flex justify-between items-center py-8 border-b border-text-grey">
      <h1 className="logo text-2xl text-white font-extrabold">audiophile</h1>
      <ul className="list-none flex items-center gap-5 hidden md:block">
        <li>
          <Link className="text-text-grey font-bold uppercase" href={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className="text-text-grey font-bold uppercase" href={'/colors'}>
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
