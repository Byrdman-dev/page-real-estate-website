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
      
      {/* Testimonials Section */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
              <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"></div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* First Testimonial */}
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
              <div className="text-center">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-gray-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "Laurie Campbell sold me my first home. Best investment I ever made. She made it soooo easy. She can list/ sell your home/ find you a home."
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800 text-lg">Shirley Witherwax</p>
                    <p className="text-gray-600">Satisfied Client</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Testimonial */}
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
              <div className="text-center">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-gray-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "Laurie made my buying and selling 2 homes so easy for me. She is clear and precise in her dealings and explains everything very carefully. Highly recommended"
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800 text-lg">Anne Kromholz</p>
                    <p className="text-gray-600">Satisfied Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
