"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from "@emailjs/browser";


export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        

        emailjs
            .sendForm('service_0e7y6uh', 'template_cialp4p', formData, {
                publicKey: 'Puy0bUNBW9HbYulI4',
            })
            .then(
                () => {
                    setFormData({ name: "", email: "", message: "" });
                    console.log('SUCCESS!');
                    alert("Thank you for your message. We will get back to you soon!");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        };



    

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-700 text-white py-36">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-6">Fix My Device</h1>
                    <p className="text-xl max-w-3xl">
                        In the message below please provide the device model and describe the symptoms, a short history as to what happened or went wrong.
                    </p>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <Card className="border-red-100">
                            <CardHeader>
                                <CardTitle className="text-2xl text-gray-800">
                                    Send Us a Message
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-green-500 hover:bg-green-700 text-white transition-colors"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <div className="relative h-64 mb-6">
                                <Image
                                    src="/images/contact.jpg"
                                    alt="Contact Us"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <Card className="border-red-100">
                                <CardContent className="pt-6">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-lg font-semibold text-green-500 mb-2">
                                                Email
                                            </h3>
                                            <p className="text-gray-600">info@madelectronics.com</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-green-500 mb-2">
                                                Office Hours
                                            </h3>
                                            <p className="text-gray-600">
                                                Monday - Friday: 8:00 AM - 5:00 PM
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-green-500 mb-2">
                                                Location
                                            </h3>
                                            <p className="text-gray-600">Solihull and Surrounding Areas</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}