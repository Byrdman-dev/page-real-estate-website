import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background hero image */}
      <div className="absolute inset-0">
        <Image 
          src="/house_interior.jpg" 
          alt="House interior background" 
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      
      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-[60vh] p-6">
        <div className="max-w-6xl w-full text-center">
          <div className="bg-black/30 backdrop-blur-sm p-12 rounded-3xl shadow-2xl">
            <div className="inline-block p-4 bg-white/20 rounded-full mb-6">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 tracking-wide">
              Find Your Dream Home
            </h1>
            <p className="text-2xl text-gray-200 mb-8 font-light">
              Over 30 years of experience in Lake Charles real estate
            </p>
            <Link href="/contact">
              <button className="bg-white hover:bg-gray-100 text-gray-800 text-xl py-4 px-10 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Your Journey
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
