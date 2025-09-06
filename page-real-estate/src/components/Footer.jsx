import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Page Real Estate</h3>
            <p className="text-gray-300 text-sm">
              Over 35 years of experience helping clients with all of their real estate needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm mb-2">(337) 660-3672</p>
            <p className="text-gray-300 text-sm mb-2">laurie@pagerealestate.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>Laurie Campbell - Owner/Broker</li>
              <li>Lake Charles, LA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Page Real Estate LLC. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
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
