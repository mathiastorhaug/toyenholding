"use client";

import { useState } from "react";
import Link from "next/link";

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [{ name: "Meny", href: "/about" }];

const Navbar = () => {
  const [logoText, setLogoText] = useState("Av spillere - for spillere");
  const [activeLink, setActiveLink] = useState<string>("");

  return (
    <nav className="text-black h-[80px] font-inter font-semibold">
      <div className=" mx-auto px-6 flex justify-between h-full items-center">
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
              onClick={() => {
                setLogoText(link.name);
                setActiveLink(link.href);
              }}
              className={activeLink === link.href ? "text-blue-700 " : ""}
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
