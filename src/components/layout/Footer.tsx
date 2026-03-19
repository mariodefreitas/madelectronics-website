"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Clock, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#373643] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span>
                <Image
                    src="/images/MAD.jpg"
                    alt="Logo Image"
                    width={160}
                    height={160}  
                />
            </span>
            <p className="text-sm text-gray-300 py-6">
              A brief description of your company can go here.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-red-700"
                >
                  Services 1
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-red-700"
                >
                  Services 2
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-red-700"
                >
                  Services 3
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-red-700"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-300 hover:text-red-700"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-300 hover:text-red-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail size={18} className="text-red-700" />
                <span>info@madelectroics.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone size={18} className="text-red-700" />
                <span>+44 741 519 0809</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin size={18} className="text-red-700" />
                <span>Solihull and Surrounding Areas</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Clock size={18} className="text-red-700" />
                <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-300 text-center">
            © {new Date().getFullYear()} madelectronics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
