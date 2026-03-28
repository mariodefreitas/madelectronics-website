import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
//import { Cpu, Users, Heart } from "lucide-react";

export default function Home() {
  const offers = [
    {
      title: "Laptops",
      description:
        "We repair all types of Laptops. From battery replacement to power supply compentent level repairs",
      image: "/images/service1.jpg",
    },
    {
      title: "Smart Phones & Tablets",
      description:
        "We repair all types of Smart Phones & Tablets. From screen and battery replacement to power supply compentent level repairs ",
      image: "/images/service2.jpg",
    },
    {
      title: "Consoles",
      description:
        "This is a template service description. Replace this text with your actual service details.",
      image: "/images/service3.jpg",
    },
    {
      title: "Micro Soldering",
      description:
        "This is a template service description. Replace this text with your actual service details.",
      image: "/images/service4.jpg",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                MAD Electronics
              </h1>
              <p className="text-lg mb-8">
                We specialise in precision, component‑level electronic repair — restoring performance, reliability, and lifespan where others simply replace.
                Our team combines advanced diagnostic capability with deep engineering expertise to identify faults at the micro‑component level, delivering cost‑effective, sustainable, and high‑quality repair solutions across a wide range of electronic devices and systems.

              </p>
              <Link href="/services">
                <Button className="bg-green-500 text-white hover:bg-green-700">
                  Our Services
                </Button>
              </Link>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/images/homepage.jpg"
                alt="Homepage Image"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
          <section className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-700  text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          {/*
            <h2 className="text-3xl font-bold text-white mb-4">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-orange-50 rounded-lg hover:shadow-lg transition-all">
                <div className="flex justify-center mb-6">
                  <Cpu className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-500">
                  Laptop Repair
                </h3>
                <p className="text-gray-600">
                  This is a template feature description. Replace with your
                  feature details.
                </p>
              </div>
              <div className="p-6 bg-orange-50 rounded-lg hover:shadow-lg transition-all">
                <div className="flex justify-center mb-6">
                  <Users className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-500">
                  Smart Phone Repair
                </h3>
                <p className="text-gray-600">
                  This is a template feature description. Replace with your
                  feature details.
                </p>
              </div>
              <div className="p-6 bg-orange-50 rounded-lg hover:shadow-lg transition-all">
                <div className="flex justify-center mb-6">
                  <Heart className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-500">
                  Tablets Repair
                </h3>
                <p className="text-gray-600">
                  This is a template feature description. Replace with your
                  feature details.
                </p>
              </div>
            </div>
            */}
            <Link href="/about" className="mb-4 mt-8 inline-block">
              <Button className="bg-green-500 text-white hover:bg-green-700">
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Lets Get it Fixed
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Have a Device that needs a Repair. Get in touch.
          </p>
          <Link href="/contact">
            <Button className="bg-green-500 text-white hover:bg-green-700 by-6">
              Fix My Device
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
