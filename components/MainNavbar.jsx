"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./Button";
import axios from "axios";
import UserProfile from "./UserProfile";
import useCategories from "@/hooks/useCategories";

export default function MainNavbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // desktop
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // mobile
  const [user, setUser] = useState(null);

  const { categories } = useCategories();

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
    <div className=" flex items-center justify-between h-16 relative z-50">
      <div className="hidden md:flex items-center gap-6 text-lg">
        <Link href="/" className="hover:text-blue-600">
          Home
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
            className={`absolute left-0 top-full w-44 bg-white shadow-lg rounded-lg py-2 transition-opacity duration-200 ${
              isDropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } z-[999999950]`}
          >
            {categories.length > 0
              ? categories.map((category) => (
                  <Link
                    key={category._id}
                    href={`/categories/${category.slug || category.name}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {category.name}
                  </Link>
                ))
              : "No Category Available"}
          </div>
        </div>

        <Link href="/contact" className="hover:text-blue-600">
          Contact Us
        </Link>
        <Link href="/dashboard" className="hover:text-blue-600">
          Dashboard
        </Link>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
        <Link href="/">
          <img src="/img/logo.png" alt="Logo" className="h-24 sm:h-40" />
        </Link>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        {!user ? (
          <>
            <Button title="Signup" link="/signup" />{" "}
            <Button title="Login" link="/login" />
          </>
        ) : (
          // If user exists → show profile dropdown
          <UserProfile user={user} />
        )}

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsMenuOpen((p) => !p)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href="/">
            <img src="/img/logo.png" alt="Logo" className="h-8 sm:h-10" />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav className="bg-white relative z-50 mt-5">
        <NavContent />
      </nav>

      <nav
        aria-hidden={!isFixed}
        className={`bg-white fixed p-2 top-0 left-0 w-full z-50 transition-all duration-300 shadow-md shadow-gray-200/70 ${
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
                {categories.length > 0
                  ? categories.map((category) => (
                      <Link
                        href="/categories/relationships"
                        className="block py-1 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))
                  : "No Category Available"}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="block py-2 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>

          <Link
            href="/dashboard"
            className="block py-2 hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>

          <Link
            href="/signup"
            className="block py-2 px-3 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Signup
          </Link>
          <Link
            href="/login"
            className="block py-2 px-3 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
}
