'use client'

import React, { useState } from "react";

const reviews = [
    {
        id: 1,
        name: "Sajal Talukder",
        job: "Web Developer",
        image: "/images/23634c23-fe7a-4728-83f3-b0b14002346f.webp",
        text: "Malek delivered the project on time with clean and professional code. Highly recommended!",
    },
    {
        id: 2,
        name: "John Smith",
        job: "UI Designer",
        image: "/images/pngtree-transparent-clients-review-png-image_18655719.png",
        text: "Amazing communication and fast delivery. The website design was modern and responsive.",
    },
    {
        id: 3,
        name: "Michael Brown",
        job: "Startup Founder",
        image: "/images/modern-client-testimonial-social-media-post-or-customer-review-instagram-template_10751663.jpg!w700wp",
        text: "Very professional developer. The final result exceeded our expectations.",
    },
];

const ClientReview = () => {
    const [index, setIndex] = useState(0);

    const nextReview = () => {
        setIndex((index + 1) % reviews.length);
    };

    const prevReview = () => {
        setIndex((index - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className="bg-[#020617] py-20 text-white text-center">
            <h2 className="text-4xl font-bold mb-12">
                CLIENT <span className="text-yellow-400">REVIEW</span>
            </h2>

            <div className="max-w-xl mx-auto relative">
                <img
                    src={reviews[index].image}
                    alt={reviews[index].name}
                    className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />

                <div className="text-yellow-400 text-xl mb-2">
                    ★★★★★
                </div>

                <h3 className="text-xl font-semibold">
                    {reviews[index].name}
                </h3>

                <p className="text-gray-400 mb-4">
                    {reviews[index].job}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed">
                    {reviews[index].text}
                </p>

                <button
                    onClick={prevReview}
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl"
                >
                    ❮
                </button>

                <button
                    onClick={nextReview}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl"
                >
                    ❯
                </button>
            </div>
        </section>
    );
};

export default ClientReview;
