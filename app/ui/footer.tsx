import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Using react-icons library

const Footer = () => {
    return (
        <footer className="bg-secondary p-8 md:p-24 text-center lg:text-left">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
                <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
                    <b className="text-2xl text-white font-extrabold">audiophile</b>
                    <p className="text-light-grey text-sm max-w-md my-8 mx-auto md:mx-0">
                    Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.
                    </p>
                    <span className="text-light-grey text-xs block mt-4">
                        Copyright 2021. All Rights Reserved.
                    </span>
                </div>
                <div className="flex-1 flex flex-col items-center md:items-start">
                    <ul className="list-none flex flex-col md:flex-row items-center gap-5">
                        <li>
                            <Link className="text-light-grey font-bold text-sm uppercase" href={'/'}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="text-light-grey font-bold text-sm uppercase" href={'/headphones'}>
                                Headphones
                            </Link>
                        </li>
                        <li>
                            <Link className="text-light-grey font-bold text-sm uppercase" href={'/speakers'}>
                                Speakers
                            </Link>
                        </li>
                        <li>
                            <Link className="text-light-grey font-bold text-sm uppercase" href={'/earphones'}>
                                Earphones
                            </Link>
                        </li>
                        <li>
                            <Link className="text-light-grey font-bold text-sm uppercase" href={'/colors'}>
                                Colors
                            </Link>
                        </li>
                    </ul>
                    <div className="flex mt-8 space-x-4 justify-center">
                        <Link href="https://facebook.com" target="_blank" className="text-light-grey">
                            <FaFacebook className="h-6 w-6 text-white" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" className="text-light-grey">
                            <FaInstagram className="h-6 w-6 text-white" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" className="text-light-grey">
                            <FaTwitter className="h-6 w-6 text-white" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
