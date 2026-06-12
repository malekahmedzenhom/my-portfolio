'use client'

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#020617] text-white pt-16 pb-8">
            {/* Top Section */}
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

                {/* Address */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="bg-green-400 p-5 rounded-full">
                        <MapPin size={28} className="text-black" />
                    </div>
                    <h3 className="text-lg font-semibold">Address</h3>
                    <p className="text-gray-400 text-sm">
                        Giza, Egypt
                    </p>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="bg-green-400 p-5 rounded-full">
                        <Phone size={28} className="text-black" />
                    </div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-400 text-sm">
                        01121071587
                    </p>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="bg-green-400 p-5 rounded-full">
                        <Mail size={28} className="text-black" />
                    </div>
                    <h3 className="text-lg font-semibold">Send Us Email</h3>
                    <p className="text-gray-400 text-sm">
                        malekzenhom38@email.com
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-10 max-w-6xl mx-auto"></div>

            {/* Bottom Section */}
            <div className="text-center text-gray-500 text-sm">
                WebDev © {new Date().getFullYear()} | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
