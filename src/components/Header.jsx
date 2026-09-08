"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { withBasePath } from "../lib/basePath";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function normalizePath(path) {
  return path.replace(/\/$/, "") || "/";
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="relative z-10 bg-gradient-to-br from-slate-50 via-white to-gray-50 shadow-xl border-b border-silver-light">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 sm:py-6">
        {/* Main header content - centered layout */}
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
          {/* Logo */}
          <Link href="/" className="transform hover:scale-105 transition-all duration-300 hover:drop-shadow-lg">
            <Image
              src={withBasePath("/logo.png")}
              alt="Page Real Estate Logo"
              width={240}
              height={120}
              className="w-56 sm:w-72 md:w-96 drop-shadow-md"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 pt-2">
            {navLinks.map(({ href, label }) => {
              const isActive = normalizePath(pathname) === normalizePath(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full font-serif font-medium text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 ${
                    isActive
                      ? "bg-brand-dark text-white border-white"
                      : "bg-brand hover:bg-brand-dark text-white border-brand hover:border-brand-dark"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
