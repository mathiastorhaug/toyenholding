"use client";

import { useState } from "react";
import Link from "next/link";

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: "Om", href: "/about" },
  { name: "Utgivelser", href: "/releases" },
  { name: "Bars", href: "/bars" },
  { name: "Konserts", href: "/concerts" },
  { name: "Shop", href: "/shop" },
];

const Navbar = () => {
  const [logoText, setLogoText] = useState("My Logo");

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link href="/">{logoText}</Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setLogoText(link.name)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
