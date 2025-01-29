"use client";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const getCustomMessage = () => {
    switch (pathname) {
      case "/":
        return "Av spiller - For spillere";
      case "/releases":
        return "Utgivelser";
      case "/contact":
        return "Get in Touch";
      default:
        return "Welcome";
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="text-black flex-none lg:h-[40vh] font-inter font-semibold">
      <div className="mx-auto flex justify-between h-full p-4 lg:p-8">
        {/* Dynamic Logo/Text */}
        <div className="text-sm font-bold">
          <button onClick={scrollToTop} className="hover:underline">
            {getCustomMessage()}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 text-sm">
          <button onClick={scrollToTop} className="hover:underline">
            Meny
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
