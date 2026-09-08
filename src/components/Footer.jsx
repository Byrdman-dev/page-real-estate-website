import Image from 'next/image';
import Link from 'next/link';
import { withBasePath } from '../lib/basePath';

export default function Footer() {
  return (
    <footer className="w-full pt-4 pb-10 px-4 sm:pt-6 sm:pb-14 sm:px-6 bg-brand text-white mt-auto">
      <div className="max-w-6xl mx-auto">
        <div>
          <nav className="flex items-center justify-center gap-6 sm:gap-8 mb-6 text-lg sm:text-xl font-serif">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
          </nav>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Page Real Estate LLC. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <Image
                src={withBasePath("/realtor-logo-png-transparent.png")}
                alt="Realtor Logo"
                width={80}
                height={40}
                className="opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
