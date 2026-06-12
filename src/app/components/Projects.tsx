import React from "react";

const projects = [
    { id: 1, img: "/images/1720.jpg", title: "Easy Design" },
    { id: 2, img: "/images/4482719.jpg", title: "Geometric UI" },
    { id: 3, img: "/images/4516085.jpg", title: "Creative Strategy" },
    { id: 4, img: "/images/1736602114129app-development-vs-web-development.webp", title: "Advanced App" },
    { id: 5, img: "/images/web-design-technology-browsing-programming-concept_53876-163260.avif", title: "Sharing Platform" },
    { id: 6, img: "/images/photo-1551288049-bebda4e38f71.jfif", title: "Modern Website" },
];

const Projects = () => {
    return (
        <section className="bg-[#020617] py-20 text-white">
            <div className="w-[90%] mx-auto">

                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-12">
                    My <span className="text-yellow-400">Projects</span>
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-[#0f172a] rounded-lg overflow-hidden shadow-lg 
                         hover:scale-105 transition duration-300 cursor-pointer"
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-[220px] object-cover"
                            />

                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
