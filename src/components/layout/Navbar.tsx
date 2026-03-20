"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "Our Services", href: "/services", className: "bg- white text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors" },
        { label: "About Us", href: "/about", className: "bg- white text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors" },
        { label: "Fix My Device", href: "/contact", className: "bg-green-500 text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors" },
    ];

    return (
        <nav className="bg-white shadow-sm fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <Link href="/" className="flex-shrink-0">
                        <span>
                        <Image
                            src="/images/MAD Electronics.jpg"
                            alt="Logo Image"
                            width={150}
                            height={150}
                        />
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={item.className}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-gray-700 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;