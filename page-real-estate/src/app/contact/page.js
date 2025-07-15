export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Phone:</strong> (337) 555-0123
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> info@laurierealestate.com
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 123 Main Street, Lake Charles, LA 70601
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Office Hours</h2>
            <div className="space-y-2 text-gray-700">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: By appointment only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
