import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-10 bg-gradient-to-r from-gray-50 via-white to-gray-50 shadow-lg border-b border-gray-200">
      <div className="max-w-4xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="transform hover:scale-105 transition-transform duration-200">
          <div className="flex items-center space-x-3">
            <Image 
              src={"/logo.png"} 
              alt="Laurie Real Estate Logo" 
              width={192} 
              height={96} 
              className="w-48 drop-shadow-sm" 
            />
          </div>
        </Link>
        <nav className="flex space-x-2">
          <Link href="/" className="px-4 py-2 text-gray-700 hover:text-gray-800 hover:bg-gray-100 font-medium rounded-lg transition-all duration-200 hover:shadow-sm">
            Home
          </Link>
          <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-gray-800 hover:bg-gray-100 font-medium rounded-lg transition-all duration-200 hover:shadow-sm">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
