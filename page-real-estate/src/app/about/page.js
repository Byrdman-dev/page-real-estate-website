import Image from "next/image";

export default function About() {
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
        <div className="max-w-4xl w-full">
          <div className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl shadow-2xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Us</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Welcome to our real estate services. We are dedicated to helping you find your perfect home in the Lake Charles area.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                With years of experience in the local market, we provide personalized service to meet your unique needs.
              </p>
              <p className="text-blue-600 text-xl font-semibold italic text-center mt-8">
                "Let me do your homework"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
