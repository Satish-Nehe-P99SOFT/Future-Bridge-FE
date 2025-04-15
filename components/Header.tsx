"use client"; // This component needs state for the dropdown
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
// Add at the top with other imports
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// Import Bars3Icon for the hamburger menu
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid"; // Example icons

// Define props for the Header
interface HeaderProps {
  industrySlugs: string[];
}

const Header: React.FC<HeaderProps> = ({ industrySlugs }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const searchRef = useRef<HTMLDivElement>(null);

  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for detecting outside clicks
  const mobileMenuRef = useRef<HTMLDivElement>(null); // Ref for mobile menu outside click detection

  // Handle clicking outside the dropdown and mobile menu to close them
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }

      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }

      // Close mobile menu on outside click
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        // Also check if the click target wasn't the toggle button itself
        !(event.target as HTMLElement).closest(".mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    // Function to toggle mobile menu
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to format slug for display (e.g., 'chemicals-natural-resources' -> 'Chemicals & Natural Resources')
  const formatSlugForDisplay = (slug: string): string => {
    return slug
      .split("-")
      
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .replace(/&/g, " & "); // Add space around ampersand if needed
     
  };
  return (
    <header className="sticky top-0 z-50 bg-black shadow-md h-24 text-white">
      <nav className="container mx-auto px-6 py-3 flex justify-between h-full">
        {/* Hamburger Menu Button - Shown only on smaller screens */}
        <div className="flex items-center gap-5 ">
          <div id="container-1" className="flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden mr-4 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mobile-menu-button " // Changed md:hidden to lg:hidden
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </button>
            <Link
              href="/"
              className="text-white text-[35px] mb-2 "
            >
              FutureBridge
            </Link>
          </div>

          {/* Desktop Navigation Links - Hidden on smaller screens */}
          <div
            className="hidden lg:flex md:items-center md:space-x-6 "
            id="container-2"
          >
            <Link
              href="/about"
              className="text-sm font-bold text-white hover:text-blue-600 "
            >
              About
            </Link>
            <Link
              href="/solutions"
              className="text-sm font-bold text-white hover:text-blue-600"
            >
              Solutions
            </Link>
            {/* Industries Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center text-white hover:text-blue-600 focus:outline-none font-bold text-sm"
              >
                Industries
                {isDropdownOpen ? (
                  <ChevronUpIcon className="h-4 w-4 ml-1" />
                ) : (
                  <ChevronDownIcon className="h-4 w-4 ml-1" />
                )}
              </button>
              {isDropdownOpen && (
                <div className="absolute top-12 left-0 mt-2 py-2 w-70 bg-black rounded-md shadow-xl z-20 ">
                  {industrySlugs.length > 0 ? (
                    industrySlugs.map((slug) => (
                      <Link
                        key={slug}
                        href={`/industry/${slug}`}
                        className="block px-4 py-2 text-sm text-white hover:text-[#f94f5E]"
                        onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                      >
                        {formatSlugForDisplay(slug)}
                      </Link>
                    ))
                  ) : (
                    <span className="block px-4 py-2 text-sm text-gray-500">
                      No industries found
                    </span>
                  )}
                </div>
              )}
            </div>{" "}
            {/* End of Industries Dropdown div */}
            {/* Other Links - Now direct children of the main flex container */}
            <Link
              href="/perspectives"
              className="text-sm font-bold text-white hover:text-blue-600"
            >
              Perspectives
            </Link>
            <Link
              href="#"
              className="text-sm font-bold text-white hover:text-blue-600"
            >
              In the Media
            </Link>
            <Link
              href="#"
              className="text-sm font-bold text-white hover:text-blue-600"
            >
              Events
            </Link>
            <Link
              href="#"
              className="text-sm font-bold text-white hover:text-blue-600"
            >
              Careers
            </Link>
            {/* Search - Now a direct child */}
            <div className="relative flex items-center" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-[#f94f5E] hover:text-blue-600 cursor-pointer "
                aria-label="Search"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
              {isSearchOpen && (
                <div className="absolute top-12 right-0 mt-2 w-70 bg-gray-200 p-4 rounded-md shadow-lg z-40 ">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border border-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  />
                </div>
              )}
            </div>
            {/* Auth Buttons - Now a direct child */}
          </div>
        </div>
        {/* End of Desktop Navigation Links container */}
        <div className="hidden lg:flex items-center gap-3 " id="container-3">
          <Link
            href="#"
            className="text-sm font-bold text-white hover:text-blue-600"
          >
            Sign in
          </Link>
          <span>|</span>
          <Link
            href="#"
            className="text-sm font-bold text-white hover:text-blue-600"
          >
            Register
          </Link>
          <button className="bg-[#f94f5E] text-white px-4 py-2 rounded cursor-pointer ">
            Contact Us
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Shown when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef} // Add ref for outside click detection
          className="lg:hidden absolute top-24 left-0 right-0 bg-white shadow-md z-40 m-3" // Changed md:hidden to lg:hidden, Positioned below header, white background
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Links for mobile menu */}
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
            >
              About
            </Link>
            <Link
              href="/solutions"
              className="block px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </Link>

            {/* Mobile Industries Section (Simplified: just shows links) */}
            <div
              className="px-3 pt-2 py-2 text-sm font-medium text-black cursor-pointer flex justify-between items-center"
              onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
            >
              Industries
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  isIndustriesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {isIndustriesOpen && (
              <>
                {industrySlugs.length > 0 ? (
                  industrySlugs.map((slug) => (
                    <Link
                      key={slug}
                      href={`/industry/${slug}`}
                      className="block pl-5 pr-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {formatSlugForDisplay(slug)}
                    </Link>
                  ))
                ) : (
                  <span className="block pl-5 pr-3 py-2 text-sm text-gray-400">
                    No industries found
                  </span>
                )}
              </>
            )}

            <Link
              href="/perspectives"
              className="block px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Perspectives
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              In the Media
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </Link>
            {/* Search (Optional: Simplified for mobile or link to search page) */}
            {/* You might want a simpler search experience or a dedicated search icon/button here */}
            <div className="border-t border-gray-200 mt-2 pt-2">
              <Link
                href="#"
                className="block px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register
              </Link>
            </div>
            <div className="px-3 py-2">
              <button
                className=" bg-[#f94f5E] text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {" "}
                Contact Us{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
