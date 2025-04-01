import { motion } from "framer-motion";
import ProjectCard from "../components/common/ProjectCard";
import { Link } from "react-router-dom";

const Projects = () => {
    const projects = [
        {
            title: "E-commerce Platform",
            description: "Plataforma de comercio electrónico escalable con Next.js y Node.js",
            image: "/projects/ecommerce.jpg",
            tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            title: "Dashboard Analytics",
            description: "Sistema de visualización de datos en tiempo real",
            image: "/projects/dashboard.jpg",
            tags: ["React", "Chart.js", "Firebase", "Tailwind"],
            link: "#"
        },
        {
            title: "Dashboard Analytics",
            description: "Sistema de visualización de datos en tiempo real",
            image: "/projects/dashboard.jpg",
            tags: ["React", "Chart.js", "Firebase", "Tailwind"],
            link: "#"
        },
        // Agrega más proyectos aquí
    ];

    return (
        <section className="min-h-screen py-20 bg-gradient-to-b from-[#0F1B0E] to-gray-900">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Botón Volver al Home */}
                <motion.div
                    className="mb-8"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Link to="/" className="inline-block">
                        <motion.div
                            className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                            whileHover={{ x: -5 }}
                        >
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
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            <span className="font-medium">Volver al Inicio</span>
                        </motion.div>
                    </Link>
                </motion.div>

                <motion.h2
                    style={{ lineHeight: "normal" }}
                    className="text-4xl leading-tight font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Project Gallery
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;