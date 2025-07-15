export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Page Real Estate</h3>
            <p className="text-gray-300 text-sm">
              Your trusted partner in Lake Charles real estate for over 30 years.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-300 text-sm mb-2">(337) 555-0123</p>
            <p className="text-gray-300 text-sm mb-2">info@laurierealestate.com</p>
            <p className="text-gray-300 text-sm">123 Main Street, Lake Charles, LA 70601</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>Residential Sales</li>
              <li>Property Management</li>
              <li>Investment Properties</li>
              <li>Commercial Real Estate</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Page Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
