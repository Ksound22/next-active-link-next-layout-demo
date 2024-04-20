'use client';
import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  const pathname = usePathname();

  return (
    <nav className="bg-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-3">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-white font-bold text-3xl">Green World</span>
            </Link>
          </div>
          <div className="hidden md:flex">
            <div className="flex items-baseline space-x-4 w-full justify-between">
              <Link
                href="/"
                className={`${
                  pathname === '/' ? 'bg-green-900' : ''
                } text-white hover:bg-green-900 hover:text-gray-100 px-3 py-2 rounded-md text-2xl font-medium`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${
                  pathname === '/about' ? 'bg-green-900' : ''
                } text-white hover:bg-green-900 hover:text-gray-100 px-3 py-2 rounded-md text-2xl font-medium`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`${
                  pathname === '/services' ? 'bg-green-900' : ''
                } text-white hover:bg-green-900 hover:text-gray-100 px-3 py-2 rounded-md text-2xl font-medium`}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`${
                  pathname === '/contact' ? 'bg-green-900' : ''
                } text-white hover:bg-green-900 hover:text-gray-100 px-3 py-2 rounded-md text-2xl font-medium`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-100 hover:bg-green-900 focus:outline-none focus:bg-green-900 focus:text-white transition duration-150 ease-in-out"
              onClick={toggleMenu}
              aria-label="Main menu"
              aria-expanded={isOpen}
            >
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden `}>
        <div
          className={`${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          } px-2 pt-2 pb-3 space-y-1 sm:px-3 `}
        >
          <Link
            href="/"
            className={`${
              pathname === '/' ? 'bg-green-900' : ''
            } text-white hover:bg-green-900 hover:text-gray-100 block px-3 py-2 rounded-md text-base  font-medium`}
            onClick={handleClick}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === '/about' ? 'bg-green-900' : ''
            } text-white hover:bg-green-900 hover:text-gray-100 block px-3 py-2 rounded-md text-base  font-medium`}
            onClick={handleClick}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`${
              pathname === '/services' ? 'bg-green-900' : ''
            } text-white hover:bg-green-900 hover:text-gray-100 block px-3 py-2 rounded-md text-base  font-medium`}
            onClick={handleClick}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === '/contact' ? 'bg-green-900' : ''
            } text-white hover:bg-green-900 hover:text-gray-100 block px-3 py-2 rounded-md text-base  font-medium`}
            onClick={handleClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
