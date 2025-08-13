import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-10 bg-gradient-to-br from-slate-50 via-white to-gray-50 shadow-xl border-b border-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Main header content - centered layout */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Logo and welcome text */}
          <Link href="/" className="transform hover:scale-105 transition-all duration-300 hover:drop-shadow-lg">
            <div className="flex flex-col items-center space-y-3">
              <Image 
                src={"/logo.png"} 
                alt="Laurie Real Estate Logo" 
                width={240} 
                height={120} 
                className="w-60 drop-shadow-md" 
              />
              <h1 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-wide">
                Welcome to Page Real Estate
              </h1>
              <p className="text-lg font-light text-gray-600 italic tracking-wider">
                "Let me do your homework"
              </p>
            </div>
          </Link>
          
          {/* Navigation */}
          <nav className="flex space-x-8 pt-2">
            <Link href="/" className="group relative px-6 py-3 text-gray-700 hover:text-gray-900 font-serif font-medium text-lg transition-all duration-300">
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100"></div>
            </Link>
            <Link href="/contact" className="group relative px-6 py-3 text-gray-700 hover:text-gray-900 font-serif font-medium text-lg transition-all duration-300">
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100"></div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
