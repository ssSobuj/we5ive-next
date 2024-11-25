"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi"; // For hamburger and close icons

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-gray-100 py-5 px-5 md:px-20 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            className="text-2xl text-gray-700"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="We5ive Logo" className="w-40" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-6 text-gray-600">
          <Link
            href="/"
            className="font-medium hover:text-primary-800 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className="font-medium hover:text-primary-800 transition-colors"
          >
            Shop
          </Link>
          <Link
            href="#"
            className="font-medium hover:text-primary-800 transition-colors"
          >
            Deals
          </Link>
          <Link
            href="#"
            className="font-medium hover:text-primary-800 transition-colors"
          >
            What&apos;s New
          </Link>
        </nav>

        {/* Right Section: Search, Cart, and Profile */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
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

      {/* Mobile Menu (visible on devices smaller than lg) */}
      <div
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } lg:hidden bg-gray-200 absolute z-50 top-[80px] left-0 w-full`}
      >
        <nav className="flex flex-col space-y-4 text-gray-600 p-4">
          <Link
            href="/"
            className="font-medium hover:text-primary-800 transition-colors"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            href="#"
            className="font-medium hover:text-primary-800 transition-colors"
            onClick={toggleMobileMenu}
          >
            Shop
          </Link>
          <Link
            href="#"
            className="font-medium hover:text-primary-800 transition-colors"
            onClick={toggleMobileMenu}
          >
            Deals
          </Link>
          <Link
            href="#"
            className="font-medium hover:text-primary-800 transition-colors"
            onClick={toggleMobileMenu}
          >
            What&apos;s New
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
