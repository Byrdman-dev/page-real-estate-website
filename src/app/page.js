import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "../lib/basePath";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Bridge Banner */}
      <div className="w-full">
        <Image
          src={withBasePath("/Lake Charles Bridge modified.png")}
          alt="Lake Charles Bridge"
          width={2095}
          height={751}
          className="w-full h-auto"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[65vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src={withBasePath("/house_interior2.jpg")}
          alt="Bright, modern kitchen interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />

        <div className="relative z-10 max-w-4xl w-full text-center px-4 py-16 sm:px-6 sm:py-24">
          <div className="inline-block p-3 sm:p-4 bg-white/15 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
            <svg className="w-10 h-10 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-serif font-bold text-white mb-4 sm:mb-6 tracking-wide drop-shadow-lg">
            Find Your Dream Home
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 mb-6 sm:mb-10 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1 drop-shadow">35+</p>
              <p className="text-white/80 uppercase tracking-wide text-xs sm:text-sm font-medium">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1 drop-shadow">Full-Service</p>
              <p className="text-white/80 uppercase tracking-wide text-xs sm:text-sm font-medium">Buying, Selling &amp; Leasing</p>
            </div>
          </div>
          <Link href="/contact">
            <button className="bg-brand hover:bg-brand-dark text-white text-base sm:text-xl py-3 px-6 sm:py-4 sm:px-10 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Journey
            </button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="py-10 px-4 sm:py-16 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-brand/10 rounded-full mb-4">
              <svg className="w-12 h-12 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* First Testimonial */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-brand mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 italic">
                  "Laurie Campbell sold me my first home. Best investment I ever made. She made it soooo easy. She can list/ sell your home/ find you a home."
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-brand mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 italic">
                  "Laurie made my buying and selling 2 homes so easy for me. She is clear and precise in her dealings and explains everything very carefully. Highly recommended"
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Trust Badges */}
      <div className="w-full py-10 px-4 sm:py-14 sm:px-6 bg-[#2b1b60]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0">
          <div className="flex items-center gap-4 sm:px-8">
            <Image
              src={withBasePath("/icon-local-expertise.png")}
              alt="Local Expertise"
              width={64}
              height={64}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex-shrink-0"
            />
            <p className="text-white font-serif tracking-wide uppercase text-sm sm:text-base leading-snug">
              Local<br />Expertise
            </p>
          </div>

          <div className="hidden sm:block w-px h-14 bg-white/20" />

          <div className="flex items-center gap-4 sm:px-8">
            <Image
              src={withBasePath("/icon-personal-commitment.png")}
              alt="Personal Commitment"
              width={64}
              height={64}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex-shrink-0"
            />
            <p className="text-white font-serif tracking-wide uppercase text-sm sm:text-base leading-snug">
              Personal<br />Commitment
            </p>
          </div>

          <div className="hidden sm:block w-px h-14 bg-white/20" />

          <div className="flex items-center gap-4 sm:px-8">
            <Image
              src={withBasePath("/icon-proven-results.png")}
              alt="Proven Results"
              width={64}
              height={64}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex-shrink-0"
            />
            <p className="text-white font-serif tracking-wide uppercase text-sm sm:text-base leading-snug">
              Proven<br />Results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
