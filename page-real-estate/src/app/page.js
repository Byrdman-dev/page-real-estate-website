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

      {/* About Laurie Section */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
              <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Laurie Campbell</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"></div>
          </div>
          
          {/* Quote Section */}
          <div className="mb-12">
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border-l-4 border-white max-w-4xl mx-auto">
              <p className="text-gray-700 text-xl leading-relaxed text-center italic">
                <span className="text-3xl text-gray-700 font-bold">"</span>Laurie began her real estate career over 30 years ago in Lake Charles. She started in property
                management and transitioned into sales after 12 years of managing several apartment
                complexes and many single-family homes. She discovered that sales is where her heart is. She
                feels there is nothing like finding someone's dream home with them.<span className="text-3xl text-gray-700 font-bold">"</span>
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Professional Excellence</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Whether new to Lake Charles or moving to another area, she feels it is a privilege to work with
                her clients to find them the perfect home in this city she loves. Laurie optimizes integrity,
                honesty, and service in every detail of your real estate transaction.
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Personal Touch</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                From contract to closing, whether buying, selling, or leasing, she will work diligently to make this an exciting and stress-free process. She has worked in every aspect of the business and offers the highest level of service.
              </p>
            </div>
          </div>

          {/* Image and Personal Life Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="rounded-lg overflow-hidden">
                <Image 
                  src="/porch.jpg" 
                  alt="Beautiful porch - the kind of home details Laurie helps clients find" 
                  width={500}
                  height={400}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg flex flex-col justify-center">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-200 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Life Beyond Real Estate</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                When not busy with her real estate career, Laurie is a devoted mother and grandmother to her
                two sons and six grandchildren. She enjoys travel, decorating, theatre, boating, fishing, and the
                many wonderful festivals in the Louisiana area. She also enjoys volunteering and assisting in
                helping others.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-black/40 backdrop-blur-sm text-white p-12 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Ready to Find Your Dream Home?</h3>
            <p className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto">
              Whether you are looking for your dream home or purchasing a lot for your future retirement
              home, Laurie looks forward to guiding you through the process.
            </p>
            <div className="inline-block p-4 bg-white/30 rounded-full mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-gray-800 text-xl py-4 px-10 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get In Touch Today
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
