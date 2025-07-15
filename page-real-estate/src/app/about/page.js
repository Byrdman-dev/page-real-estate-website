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
                Laurie began her real estate career over 30 years ago in Lake Charles. She started in property
                management and transitioned into sales after 12 years of managing several apartment
                complexes and many single-family homes. She discovered that sales is where her heart is. She
                feels there is nothing like finding someone&#39;s dream home with them.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Whether new to Lake Charles or moving to another area, she feels it is a privilege to work with
                her clients to find them the perfect home in this city she loves. Laurie optimizes integrity,
                honesty, and service in every detail of your real estate transaction. From contract to closing,
                whether buying, selling, or leasing, she will work diligently to make this an exciting and stress-
                free as possible process. She has worked in every aspect of the business, including not only
                residential property management, residential sales, investment, and commercial real estate.
                She will make you feel completely at ease throughout the process and is proud to offer you the
                highest level of professional and personal service.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                When not busy with her real estate career, Laurie is a devoted mother and grandmother to her
                two sons and six grandchildren. She enjoys travel, decorating, theatre, boating, fishing, and the
                many wonderful festivals in the Louisiana area. She also enjoys volunteering and assisting in
                helping others.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Whether you are looking for your dream home or purchasing a lot for your future retirement
                home, Laurie looks forward to guiding you through the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
