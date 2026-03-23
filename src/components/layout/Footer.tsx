"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Clock } from "lucide-react"; {/*Phone*/ }

const Footer = () => {
  return (
    <footer className="bg-[#373643] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span>
                <Image
                    src="/images/MAD Electronics.jpg"
                    alt="Logo Image"
                    width={140}
                    height={140}
                    className="rounded-lg"
                />
            </span>
            <p className="text-sm text-gray-300 py-6">
              For all your Electonic Devices Repairs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-green-500"
                >
                  Laptops
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-green-500"
                >
                  Smart Phones
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-green-500"
                >
                  Tablets
                </Link>
              </li>
              <li>
                  <Link
                    href="/services"
                    className="text-sm text-gray-300 hover:text-green-500"
                  >
                   Consoles
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
                  className="text-sm text-gray-300 hover:text-green-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-300 hover:text-green-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-300 hover:text-green-500"
                >
                  Fix My Device
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail size={18} className="text-green-500" />
                <span>info@madelectroics.com</span>
              </li>
                {/*<li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone size={18} className="text-green-500" />
                <span>+44 444 444 4444</span>
              </li>*/}
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin size={18} className="text-green-500" />
                <span>Solihull and Surrounding Areas</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Clock size={18} className="text-green-500" />
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
