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
      
      <div className="relative z-10 flex items-center justify-center p-6 pt-16">
        <div className="max-w-4xl w-full">
          <div className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl shadow-2xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 text-lg">
                    <strong>Phone:</strong> (337) 660-3672
                  </p>
                  <p className="text-gray-700 text-lg">
                    <strong>Email:</strong> laurie@pagerealestate.com
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Office Hours</h2>
                <div className="space-y-2 text-gray-700 text-lg">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: By appointment only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
