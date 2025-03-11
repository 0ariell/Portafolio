import { motion } from "framer-motion";

const techStack = [
    // Lenguajes y frameworks
    "React.js", "JavaScript", "TypeScript", "Next.js", "TailwindCSS", "Figma", "CSS3", "HTML5",
    // Librerías y herramientas
    "Framer Motion", "GSAP", "Three.js", "Chart.js", "Axios", "Redux", "Zustand",
    // Herramientas de diseño gráfico
    "Figma", "Adobe XD", "Photoshop", "Illustrator", "After Effects", "Blender",
    // Backend y DevOps (para fullstack)
    "Node.js", "Express.js", "MongoDB", "Firebase", "Vercel", "Netlify", "Git", "Docker"
];

const InfiniteSlider = () => {
    return (
        <div className="w-full py-10 overflow-hidden bg-gradient-to-b from-gray-900 to-[#0F1B0E] border-y border-green-900/50 relative">
            <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto px-4">
                {techStack.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="px-6 py-2 rounded-full backdrop-blur-md transition-transform duration-300 hover:scale-105"
                        style={{
                            background: "linear-gradient(45deg, rgba(16, 185, 129, 0.1), rgba(5, 46, 22, 0.2))",
                            boxShadow: "0 2px 12px -2px rgba(0, 255, 127, 0.1)",
                            border: "1px solid rgba(0, 255, 127, 0.2)"
                        }}
                        whileHover={{
                            boxShadow: "0 4px 24px -4px rgba(0, 255, 127, 0.2)",
                            y: -3
                        }}
                    >
                        <span className="text-base font-medium bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                            {tech}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteSlider;