"use client";
import { useLogout } from "@/hooks/useLogout";
import { useState } from "react";

export default function UserProfile({ user }) {
  const { logout, loggingOut } = useLogout();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Profile Section */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 cursor-pointer select-none"
      >
        <img
          src="/img/avatar.jpg"
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover border border-gray-300"
        />
        <div className="hidden md:block text-left">
          <p className="text-sm font-medium text-gray-700">{user.name}</p>
          <p className="text-xs text-gray-400">{user.role}</p>
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
              <button
                disabled={loggingOut}
                onClick={logout}
                className={`w-full flex items-center gap-2 text-left px-4 py-2 cursor-pointer rounded ${
                  loggingOut
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                {loggingOut && (
                  <svg
                    className="animate-spin h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                )}
                {loggingOut ? "Logging out..." : "Logout"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
