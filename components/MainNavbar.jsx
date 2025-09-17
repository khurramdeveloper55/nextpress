"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./Button";
import axios from "axios";

export default function MainNavbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // desktop
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // mobile
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch user on load
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/me", {
          withCredentials: true,
        });
        setUser(res.data.user); // user found
        console.log(res.data.user);
      } catch (err) {
        setUser(null); // not logged in
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("/api/logout");
      setUser(null);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const NavContent = () => (
    <div className=" flex items-center justify-between h-16 relative">
      <div className="hidden md:flex items-center gap-6 text-lg">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/dashboard" className="hover:text-blue-600">
          Dashboard
        </Link>
        <Link href="/contact" className="hover:text-blue-600">
          Contact Us
        </Link>

        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            className="hover:text-blue-600 flex items-center gap-1 cursor-pointer"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            Categories <ChevronDown size={16} />
          </button>

          <div
            className={`absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-lg py-2 transition-opacity ${
              isDropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } z-50`}
          >
            <Link
              href="/categories/travel"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Travel
            </Link>
            <Link
              href="/categories/relationships"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Relationships
            </Link>
            <Link
              href="/categories/technology"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Technology
            </Link>
          </div>
        </div>

        <Link href="/services" className="hover:text-blue-600">
          Services
        </Link>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
        <Link href="/">
          {/* <img src="/logo.png" alt="Logo" className="h-8 sm:h-10" /> */}
        </Link>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        {!user ? (
          <Link href="/login">
            <Button title="Signup"></Button>
          </Link>
        ) : (
          // If user exists → show profile dropdown
          <div className="relative">
            {/* Profile Section */}
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <img
                src="/avatar.jpg" // Replace with dynamic avatar or placeholder
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover border border-gray-300"
              />
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-700">John Doe</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Dropdown Menu */}
            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Settings
                    </a>
                  </li>
                  <li>
                    <button className="w-full text-left block px-4 py-2 hover:bg-gray-100">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsMenuOpen((p) => !p)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href="/">
            {/* <img src="/logo.png" alt="Logo" className="h-8 sm:h-10" /> */}
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav className="bg-white relative z-10 mt-5">
        <NavContent />
      </nav>

      <nav
        aria-hidden={!isFixed}
        className={`bg-white fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isFixed
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <NavContent />
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white rounded-b-lg p-4 z-60">
          <Link
            href="/"
            className="block py-2 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            className="block py-2 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>

          <Link
            href="/contact"
            className="block py-2 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>

          <div className="mt-1">
            <button
              onClick={() => setIsMobileDropdownOpen((p) => !p)}
              className="flex justify-between items-center w-full py-2 font-medium"
            >
              Categories
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  isMobileDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isMobileDropdownOpen && (
              <div className="ml-4">
                <Link
                  href="/categories/travel"
                  className="block py-1 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Travel
                </Link>
                <Link
                  href="/categories/relationships"
                  className="block py-1 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Relationships
                </Link>
                <Link
                  href="/categories/technology"
                  className="block py-1 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Technology
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/services"
            className="block py-2 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            href="/login"
            className="block py-2 px-3 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Login / Signup
          </Link>
        </div>
      )}
    </>
  );
}
