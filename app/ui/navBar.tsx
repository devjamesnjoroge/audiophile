'use client'

import { useState } from 'react';
import Link from 'next/link';
import { FaCartShopping } from 'react-icons/fa6';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="px-6 md:px-28 bg-zinc-900">
      <div className="wrapper flex justify-between items-center py-8 border-b border-text-grey">
        <div className="flex items-center">
          {/* Hamburger menu icon */}
          <button
            className="text-white text-2xl md:hidden mr-4"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <b className="logo text-2xl text-white font-extrabold">audiophile</b>
        </div>

        <ul className="list-none flex items-center gap-5 hidden md:flex">
          <li>
            <Link className="text-light-grey font-bold text-sm uppercase inline-block" href={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link className="text-light-grey font-bold text-sm uppercase inline-block" href={'/headphones'}>
              Headphones
            </Link>
          </li>
          <li>
            <Link className="text-light-grey font-bold text-sm uppercase inline-block" href={'/speakers'}>
              Speakers
            </Link>
          </li>
          <li>
            <Link className="text-light-grey font-bold text-sm uppercase inline-block" href={'/earphones'}>
              Earphones
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900">
          <ul className="list-none flex flex-col items-center gap-5 py-6">
            <li>
              <Link
                className="text-light-grey font-bold text-sm uppercase inline-block"
                href={'/'}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-light-grey font-bold text-sm uppercase inline-block"
                href={'/headphones'}
                onClick={closeMenu}
              >
                Headphones
              </Link>
            </li>
            <li>
              <Link
                className="text-light-grey font-bold text-sm uppercase inline-block"
                href={'/speakers'}
                onClick={closeMenu}
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                className="text-light-grey font-bold text-sm uppercase inline-block"
                href={'/earphones'}
                onClick={closeMenu}
              >
                Earphones
              </Link>
            </li>
            <li>
              <Link
                className="text-light-grey font-bold text-sm uppercase inline-block"
                href={'/colors'}
                onClick={closeMenu}
              >
                Colors
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
