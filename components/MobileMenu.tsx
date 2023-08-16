import React, { useEffect, SetStateAction } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuBar from '@/public/site-images/menu-icon.svg';

type Props = {
  links: string[];
  setShowMobileMenu: React.Dispatch<
    SetStateAction<boolean>
  >;
};

export default function MobileMenu({
  links,
  setShowMobileMenu,
}: Props) {
  useEffect(() => {
    function clearModal(e: PointerEvent) {
      const links = Array.from(
        document.querySelectorAll('a')
      );
      if (!links.some(link => e.target === link)) {
        setShowMobileMenu(false);
      }
    }

    window.addEventListener('pointerdown', clearModal);

    return () => {
      window.removeEventListener('pointerdown', clearModal);
    };
  }, [setShowMobileMenu]);

  return (
    <dialog open className="w-full opacity-95 z-20">
      <ul className="flex flex-col bg-sky-800 text-2xl text-sky-100 overflow-hidden">
        <li className="w-full flex justify-center border border-sky-100 border-opacity-60">
          <button
            onClick={() =>
              setShowMobileMenu(
                showMobileMenu => !showMobileMenu
              )
            }
            className="active:bg-sky-200 p-1 border-2 border-transparent active:border-sky-700 sm:hidden"
          >
            <Image
              src={MenuBar}
              width={40}
              alt="menubar"
              role="menubar"
            />
          </button>
        </li>
        {links.map((link, index) => (
          <li
            key={index}
            onClick={() => setShowMobileMenu(false)}
          >
            <Link
              className="flex w-full justify-center py-2 border border-sky-100 border-opacity-60"
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
    </dialog>
  );
}
