import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-10 bg-white shadow-sm p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src={"/logo.png"} alt="Laurie Real Estate Logo" width={192} height={96} className="w-48" />
        </Link>
        <nav className="flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
