'use client'

import React from "react";

const blogData = [
    {
        id: 1,
        image: "/images/10-Blog-Post-Templates-to-Download-Free-SEO-Driven-Template.jpg",
        date: "December 10, 2023",
        author: "Sajal",
        comments: 2,
        title: "Next js Fullstack Development",
    },
    {
        id: 2,
        image: "/images/fashion-blog-landing-page-template_23-2149640128.avif",
        date: "December 15, 2023",
        author: "Talukder",
        comments: 8,
        title: "React New Features",
    },
    {
        id: 3,
        image: "/images/minimal-blog-website-landing-page_23-2149668512.avif",
        date: "December 20, 2023",
        author: "Anas",
        comments: 9,
        title: "Next js New Features",
    },
];

const Blog = () => {
    return (
        <section className="bg-[#020617] py-20 text-white">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold">
                    MY <span className="text-green-400">BLOG</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                {blogData.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-[#0f172a] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300"
                    >
                        {/* Image */}
                        <div className="relative">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-60 object-cover"
                            />

                            {/* Date Badge */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-400 text-black px-6 py-2 rounded-md font-semibold text-sm">
                                {blog.date}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 text-center">
                            <div className="text-sm text-gray-400 mb-2">
                                By {blog.author} • Comments({blog.comments})
                            </div>

                            <h3 className="text-lg font-semibold hover:text-green-400 cursor-pointer">
                                {blog.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
