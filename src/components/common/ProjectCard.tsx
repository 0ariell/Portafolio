import { motion } from "framer-motion";
import ImageSrc from "../../assets/Filippo6039_w_1024-1.jpg.jpg";

interface Project {
    title: string;
    description: string;
    tags: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <motion.div
            className="h-full bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-green-500/10 transition-all"
            whileHover={{ y: -5, scale: 1.02 }}
        >
            <figure className="relative h-48">
                <img
                    src={ImageSrc}
                    alt={project.title || "Project Image"}
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            </figure>

            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-sm bg-green-900/30 text-green-400 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <button className="flex items-center gap-2 text-green-400 hover:text-green-300 transition">
                    Ver Proyecto
                    <svg
                        className="w-4 h-4"
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
                </button>
            </div>
        </motion.div>
    );
};

export default ProjectCard;