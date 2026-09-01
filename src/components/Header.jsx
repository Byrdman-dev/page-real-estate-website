import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "../lib/basePath";

export default function Header() {
  return (
    <header className="relative z-10 bg-gradient-to-br from-slate-50 via-white to-gray-50 shadow-xl border-b border-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 sm:py-6">
        {/* Main header content - centered layout */}
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
          {/* Logo and welcome text */}
          <Link href="/" className="transform hover:scale-105 transition-all duration-300 hover:drop-shadow-lg">
            <div className="flex flex-col items-center space-y-2 sm:space-y-3">
              <Image
                src={withBasePath("/logo.png")}
                alt="Laurie Real Estate Logo"
                width={240}
                height={120}
                className="w-36 sm:w-48 md:w-60 drop-shadow-md"
              />
              <h1 className="text-xl sm:text-2xl md:text-4xl font-serif font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-wide px-2">
                Welcome to Page Real Estate
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-light text-gray-600 italic tracking-wider">
                "Let me do your homework"
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 pt-2">
            <Link href="/" className="bg-brand hover:bg-brand-dark text-white px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full font-serif font-medium text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-brand hover:border-brand-dark">
              Home
            </Link>
            <Link href="/about" className="bg-brand hover:bg-brand-dark text-white px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full font-serif font-medium text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-brand hover:border-brand-dark">
              About
            </Link>
            <Link href="/contact" className="bg-brand hover:bg-brand-dark text-white px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full font-serif font-medium text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-brand hover:border-brand-dark">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
