import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background hero image */}
      <div className="absolute inset-0">
        <Image 
          src="/lake_charles_hero.jpg" 
          alt="Lake Charles background" 
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      
      <div className="relative z-10 flex items-center justify-center p-6 pt-16">
        <div className="max-w-4xl w-full text-center">
          <div className="p-12">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-6 tracking-wide drop-shadow-lg font-serif">
              Welcome to Page Real Estate
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Your trusted partner in Lake Charles real estate
            </p>
            <p className="text-gray-700 text-2xl font-semibold italic mb-8">
              "Let me do your homework"
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 30 years of experience in real estate, we're here to help you 
              find your dream home or sell your property with confidence and ease.
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <Link href="/about">
                <button className="bg-gray-800 hover:bg-gray-700 text-white text-lg py-3 px-8 rounded-xl transition-colors">
                  Learn About Us
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-800 text-lg py-3 px-8 rounded-xl transition-colors">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
