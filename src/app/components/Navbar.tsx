"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/publications", label: "Publications" },
    { href: "/awards", label: "Awards and grants" },
  ];

  return (
    <nav className="sticky top-0 z-10 border-b border-gray-200 bg-background-light/80 backdrop-blur-sm">
      <div className="mx-auto flex items-center justify-between px-4 md:px-6 py-4">
        {/* Logo */}
        <h1>
          <Link href="/" className="text-2xl font-bold text-primary">
            Dianoosh kalhory
          </Link>
        </h1>

        {/* Desktop nav */}
        <ul className="hidden space-x-6 md:flex">
          {links.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-lg font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          className="rounded-md p-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <ul className="flex flex-col space-y-4 border-t border-gray-200 px-6 py-4 md:hidden">
          {links.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block text-lg font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
