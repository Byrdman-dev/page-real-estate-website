import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function LaurieContactCard() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background placeholder image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-gray-200 opacity-30"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}></div>
      
      {/* Header with logo */}
      <header className="relative z-10 bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex justify-center">
          <Image src={"/logo.png"} alt="Laurie Real Estate Logo" width={192} height={96} className="w-48" />
        </div>
      </header>

      <div className="relative z-10 flex items-center justify-center p-6 pt-8">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden">
          <div className="bg-white p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Laurie Campbell</h1>
              <p className="text-blue-600 text-lg font-semibold italic mb-4">"Let me do your homework"</p>
              <p className="text-gray-700 text-sm leading-relaxed">
              Laurie began her real estate career over 30 years ago in Lake Charles. She started in property
              management and transitioned into sales after 12 years of managing several apartment
              complexes and many single-family homes. She discovered that sales is where her heart is. She
              feels there is nothing like finding someone's dream home with them.
              <br /><br />
              Whether new to Lake Charles or moving to another area, she feels it is a privilege to work with
              her clients to find them the perfect home in this city she loves. Laurie optimizes integrity,
              honesty, and service in every detail of your real estate transaction. From contract to closing,
              whether buying, selling, or leasing, she will work diligently to make this an exciting and stress-
              free as possible process. She has worked in every aspect of the business, including not only
              residential property management, residential sales, investment, and commercial real estate.
              <br /><br />
              She will make you feel completely at ease throughout the process and is proud to offer you the
              highest level of professional and personal service.
              <br /><br />
              When not busy with her real estate career, Laurie is a devoted mother and grandmother to her
              two sons and six grandchildren. She enjoys travel, decorating, theatre, boating, fishing, and the
              many wonderful festivals in the Louisiana area. She also enjoys volunteering and assisting in
              helping others.
              <br /><br />
              Whether you are looking for your dream home or purchasing a lot for your future retirement
              home, Laurie looks forward to guiding you through the process.
              </p>
            </div>
            <div className="mt-6">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-2 px-4 rounded-xl">
                Contact Laurie
              </button>
            </div>
          </div>

          <div className="bg-blue-100 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">Contact Information</h2>
              <ul className="space-y-4 text-blue-900">
                <li className="flex items-center">
                  <Phone className="mr-3" />
                  <span>(337) 660-3672</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3" />
                  <span>laurie@pagerealestate.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-3" />
                  <span>Lake Charles, LA</span>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <p className="text-sm text-blue-800">&copy; {new Date().getFullYear()} Page Real Estate. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
