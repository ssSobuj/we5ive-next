import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

function Header() {
  return (
    <header className="bg-gray-100 py-5 shadow-md px-20">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img w src="/images/logo.png" alt="We5ive Logo" className="w-40" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <Link
            href="#"
            className=" font-medium hover:text-primary-800 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className=" font-medium hover:text-primary-800 transition-colors"
          >
            Shop
          </Link>
          <Link
            href="#"
            className=" font-medium hover:text-primary-800 transition-colors"
          >
            Deals
          </Link>
          <Link
            href="#"
            className=" font-medium hover:text-primary-800 transition-colors"
          >
            What&apos;s New
          </Link>
        </nav>

        {/* Right Section: Search, Cart, and Profile */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 ">
              <CiSearch />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="rounded-full min-w-[15rem] text-black placeholder-black border border-0 p-2 pl-8 focus:outline-none text-sm"
            />
          </div>

          {/* Cart Icon */}
          <button className="relative">
            <PiHandbagSimpleLight className="text-3xl" />

            <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>

          {/* Profile Icon */}
          <button>
            <CiUser className="text-3xl" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
