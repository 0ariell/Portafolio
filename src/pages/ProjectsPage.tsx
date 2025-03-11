import { motion } from "framer-motion";
import ProjectCard from "../components/common/ProjectCard";

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
                <motion.h2
                    className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Proyectos Destacados
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