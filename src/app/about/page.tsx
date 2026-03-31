"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
    const teamMembers = [
        {
            name: "Mario De Freitas",
            role: "Director",
            bio: "You can describe the team member experience, achievements, and expertise here. Include relevant qualifications and notable contributions.",
            image: "/images/team1.jpg",
        },
       /* {
            name: "Chancelle De Freitas",
            role: "Accountant",
            bio: "You can describe the team member experience, achievements, and expertise here. Include relevant qualifications and notable contributions.",
            image: "/images/team2.jpg",
        },*/
    ];
    {/* }
    const values = [
        {
            title: "Template Value 1",
            description:
                "This is a template value description. Describe your company core values and principles here.",
        },
        {
            title: "Template Value 2",
            description:
                "This is a template value description. Describe your company core values and principles here.",
        },
        {
            title: "Template Value 3",
            description:
                "This is a template value description. Describe your company core values and principles here.",
        },
        {
            title: "Template Value 4",
            description:
                "This is a template value description. Describe your company core values and principles here.",
        },
    ];*/}

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-700 text-white py-36">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-6">About Us</h1>
                    <p className="text-xl max-w-3xl">
                        We specialise in giving technology a second life through expert diagnostics and true component‑level repair.
                        Where others stop at “beyond repair,” we dig deeper—restoring devices that most would write off and proving that unrepairable is usually just unexplored.
                    </p>
                </div>
            </div>

            {/* Company Overview */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
                        <h3 className="text-3xl font-bold mb-5 text-green-500">Where it all Began</h3>
                        <p className="text-gray-600 mb-4">
                            An electronics engineering students bedroom back in 2013. In this picture my first ever workbench on an old computer stand can be seen on the right hand side with some electronics testing equipment.
                        </p>
                        <p className="text-gray-600">
                            Then amoungst all the electronic devices I tested, repaired and leant from the most important one. Has got to be the 1980s Mrs Pacman machine.
                            As a child I spent many hours playing it and I believe somewhere deep down in my childhood memories that machine sparked a love for electronics and a desire to understand how it all worked. It was the catalyst that set me on the path to becoming an electronics engineer.
                        </p>
                    </div>
                    <div className="relative h-96">
                        <Image
                            src="/images/started.jpg"
                            alt="Template Office"
                            fill
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-96">
                        <Image
                            src="/images/aboutus.jpg"
                            alt="Template Office"
                            fill
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-6 text-gray-800"></h3>
                        <p className="text-gray-600 mb-4">
                            Describe your company founding story, growth journey, and major milestones here. Include
                            relevant details about your company development and achievements
                            over the years.
                        </p>
                        <p className="text-gray-600">
                            Company mission and vision. Describe what makes your company unique and what you
                            strive to achieve for your clients and stakeholders.
                        </p>
                    </div>
                </div>
            </div>

            {/* Leadership Team */}
            <div className="bg-orange-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Our Leadership
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {teamMembers.map((member, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <CardContent className="p-0">
                                    <div className="grid md:grid-cols-2">
                                        <div className="relative h-64">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                                {member.name}
                                            </h3>
                                            <p className="text-green-500 mb-4">{member.role}</p>
                                            <p className="text-gray-600">{member.bio}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
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

            {/* Company Values 
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Our Values
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-semibold mb-4 text-green-500">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    );
}