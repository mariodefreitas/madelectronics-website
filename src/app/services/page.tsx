"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
//import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Laptop Repair",
      description:
        "We repair most windows Laptops - Dell, Lenovo, HP and Gaming Laptops.",
      image: "/images/Service1 (2).jpg",
      features: [
        "Power Issues",
        "Screen Replacment",
        "Motherboard Repair",
        "Battery Replacement",
        "Water Damage",
      ],
    },
    {
      title: "Smart Phone and Tablet Repairs",
      description:
        "We repair Apple and Samsung - smart Phones & Tablets",
      image: "/images/Service2 (2).jpg",
      features: [
        "Screen Replacment",
        "Battery Replacement",
        "Front and Back Glass Replacement",
        "Changing Issues",
      ],
    },
    {
      title: "Console Repair",
      description:
        "We repair Playstation and Xbox gaming Consoles and Controllers.",
      image: "/images/service3.jpg",
      features: [
        "We repair Playstation  5 / PS5 Pro / Ps5 Slim",
        "Xbox One / Xbox One S / Xbox Series X / One X",
        "Playstation 4 / Slim",
        "Ps5 Controllers / Xbox Controllers",
      ],
    },
    {
        title: "Other Electronics Repairs",
      description:
        "We repair other electronics devices at component PCB level.",
      image: "/images/Service4 (3).jpg",
      features: [
        "Audio Speakers and Smart Homes Devices",
        "Projectors and Monitors",
        "Power Tools",
        "Testing Equipment",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-700 text-white py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            At MAD Electronics, we always prioritise repair over replacement. With our no‑repair, no‑fee approach, you only pay when your device is successfully restored.
            If the parts are available and you want to keep your device going, we’ll put in the work to bring it back to life — helping reduce waste and extend the lifespan of your tech.

          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div
                  className={`relative h-[400px] ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {service.description}
                    </p>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-green-500">
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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

      {/* Why Choose Us Section 
      <div className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-500">
                  Template Benefit 1
                </h3>
                <p className="text-gray-600">
                  This is a template benefit description. Explain why customers
                  should choose your services.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-500">
                  Template Benefit 2
                </h3>
                <p className="text-gray-600">
                  This is a template benefit description. Explain why customers
                  should choose your services.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-green-500">
                  Template Benefit 3
                </h3>
                <p className="text-gray-600">
                  This is a template benefit description. Explain why customers
                  should choose your services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div> */}
    </div> 
  );
}
