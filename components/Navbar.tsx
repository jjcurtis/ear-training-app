'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import MenuBar from '@/public/site-images/menu-icon.svg';
import MobileMenu from './MobileMenu';

type Props = {
  imageSrc: string | StaticImageData;
  links: string[];
};

export default function Navbar({ imageSrc, links }: Props) {
  const [showMobileMenu, setShowMobileMenu] =
    useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-4 py-2 border-b-2 border-sky-800 bg-sky-400">
        <Image
          src={imageSrc}
          width={50}
          height={50}
          alt="website logo"
        />
        <h1 className='text-3xl'>Ear Training App</h1>
        <button
          onClick={() => setShowMobileMenu(showMobileMenu => !showMobileMenu)}
          className="p-1 border-[3px] rounded-md border-sky-700 sm:hidden"
        >
          <Image
            src={MenuBar}
            width={35}
            alt="menubar"
            role="menubar"
          />
        </button>
        <ul className="hidden sm:visible sm:flex sm:gap-x-5 text-lg font-bold">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className="hover:text-sky-50
              hover:underline hover:font-extrabold hover:underline-offset-8 transition-colors"
                href={
                  link === 'Home'
                    ? '/'
                    : `/${link.toLowerCase()}`
                }
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {showMobileMenu && 
      <MobileMenu links={links} setShowMobileMenu={setShowMobileMenu}/>
      }
    </>
  );
}
