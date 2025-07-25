import Image from "next/image";

export default function Contact() {
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
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-16 w-24 h-24 bg-gray-300/20 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-32 left-16 w-20 h-20 bg-gray-400/25 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gray-500/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center p-6 pt-16">
        <div className="max-w-4xl w-full">
          <div className="p-12 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-gray-100 rounded-full mb-4 animate-pulse">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Let's Connect</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 text-lg">Ready to start your real estate journey? Get in touch today!</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-700 rounded-full mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Call Me</h3>
                    <p className="text-gray-700 font-medium">(337) 660-3672</p>
                  </div>
                </div>
                <p className="text-gray-700">Ready to talk? Give me a call for immediate assistance with all your real estate needs.</p>
              </div>
              
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-700 rounded-full mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Email Me</h3>
                    <p className="text-gray-700 font-medium">laurie@pagerealestate.com</p>
                  </div>
                </div>
                <p className="text-gray-700">Prefer email? Send me a message and I'll get back to you within 24 hours.</p>
              </div>
            </div>
            
            {/* Featured front door image */}
            <div className="mt-8 bg-black/20 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="rounded-lg overflow-hidden">
                <Image 
                  src="/front door.jpg" 
                  alt="Beautiful front door - your gateway to finding the perfect home" 
                  width={800}
                  height={600}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="mt-8 text-center bg-black/40 backdrop-blur-sm text-white p-8 rounded-xl shadow-lg">
              <div className="inline-block p-3 bg-white/20 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 text-lg">
                Don't wait - your dream home is just a conversation away. Contact me today and let's make it happen!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
