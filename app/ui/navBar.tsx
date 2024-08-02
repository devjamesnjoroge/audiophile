'use client'

import { useState } from 'react';
import Link from 'next/link';
import { FaCartShopping } from 'react-icons/fa6';
import { FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Modal from './modal';
import Cart from './cart';
import { CartProvider } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const activePath = usePathname();
  console.log(activePath);

  const navlinks = [
    {"class": "text-light-grey font-bold text-sm uppercase inline-block", "href": "/", "name": "home"},
    {"class": "text-light-grey font-bold text-sm uppercase inline-block", "href": "/headphones", "name": "headphones"},
    {"class": "text-light-grey font-bold text-sm uppercase inline-block", "href": "/speakers", "name": "speakers"},
    {"class": "text-light-grey font-bold text-sm uppercase inline-block", "href": "/earphones", "name": "earphones"},
    {"class": "text-light-grey font-bold text-sm uppercase inline-block", "href": "/colors", "name": "colors"},
  ]

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
          <b className="logo text-3xl text-white font-extrabold">audiophile</b>
        </div>

        <ul className="list-none flex items-center gap-5 hidden md:flex">
          {
            navlinks.map(navlink => (<li key={navlink.name}>
              <Link className={clsx(navlink.class, navlink.href == activePath && "text-primary")} href={navlink.href}>{navlink.name}</Link>
            </li>))
          }
        </ul>
        <h3 className="flex items-center">
          <FaCartShopping onClick={openModal} className="text-2xl" color="white" />
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
      <CartProvider>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <Cart />
          </Modal>
      </CartProvider>
    </div>
  );
};
