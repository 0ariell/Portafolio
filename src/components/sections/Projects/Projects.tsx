import { motion } from "framer-motion";
import React from "react";
import WaveDivider from "../../common/WaveDivider";
import projectImage1 from "../../../assets/Filippo6039_w_1024-1.jpg.jpg";

const projects = [
    {
        title: "Proyecto 1",
        description: "Descripción del proyecto 1",
        image: projectImage1,
        tags: ["React", "Tailwind", "Framer"],
        link: "#"
    },
    {
        title: "Proyecto 2",
        description: "Descripción del proyecto 2",
        image: "imagen",
        tags: ["Next.js", "TypeScript", "AWS"],
        link: "#"
    },
    {
        title: "Proyecto 3",
        description: "Descripción del proyecto 2",
        image: "imagen",
        tags: ["Next.js", "TypeScript", "AWS"],
        link: "#"
    },
];

const Projects: React.FC = () => {
    return (
        <section className="pt-0 bg-gradient-to-b from-[#081C15] to-gray-900 text-white relative overflow-hidden">
            <WaveDivider />
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl text-center mb-16 font-bold bg-gradient-to-r from-yellow-400 via-green-400 to-green-600 bg-clip-text text-transparent"
                    >
                        Proyectos Destacados
                    </motion.h2>

                    <motion.div
                        className="flex gap-8 pb-6 cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{ right: 0, left: -projects.length * 600 + 1000 }}
                        whileTap={{ cursor: "grabbing" }}
                    >
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                className="min-w-[500px] lg:min-w-[600px] relative group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                            >
                                <div className="h-[500px] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl transform transition-all group-hover:scale-[1.02] relative">
                                    {/* Imagen de fondo con overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover absolute inset-0"
                                    />

                                    {/* Contenido */}
                                    <div className="relative z-20 h-full flex flex-col justify-end p-8">
                                        <div className="mb-4 flex gap-2">
                                            {project.tags?.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className="text-4xl font-bold text-white mb-2">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-300 text-lg mb-6">
                                            {project.description}
                                        </p>

                                        <motion.a
                                            href={project.link}
                                            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold"
                                            whileHover={{ x: 5 }}
                                        >
                                            Ver Proyecto
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Indicadores y overlay de gradiente */}
                    <div className="flex justify-center gap-2 mt-8">
                        {projects.map((_, idx) => (
                            <div
                                key={idx}
                                className="w-3 h-3 rounded-full bg-gray-600 cursor-pointer hover:bg-green-400"
                            />
                        ))}
                    </div>

                    <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#081C15] to-transparent pointer-events-none" />
                    <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#081C15] to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default Projects;