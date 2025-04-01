import { motion } from "framer-motion";
import Image from "../assets/Imagen de WhatsApp 2025-03-17 a las 15.52.30_63a9c202.jpg"; // No es necesario agregar .jpg dos veces
import { Link } from "react-router-dom";

const About = () => {
    const frontendSkills = [
        'React', 'TypeScript', 'Next.js', 'TailwindCSS',
        'Framer Motion', 'GSAP', 'JavaScript', 'HTML5',
        'CSS3', 'Figma', 'Adobe XD', 'Photoshop', 'Illustrator'
    ];

    return (
        <section className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-[#0F1B0E]">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Botón Volver al Home */}
                <motion.div
                    className="mb-12 lg:mb-16"
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

                <motion.div
                    className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {/* Sección de imagen */}
                    <motion.div
                        className="lg:w-1/3 w-full relative"
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative w-full h-96 rounded-2xl overflow-hidden border-2 border-green-900/30 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 z-10" />
                            <img
                                src={Image} // Asegúrate de que esta imagen esté en la carpeta adecuada (public o src/assets)
                                alt="Sobre Mí"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </motion.div>

                    {/* Sección de contenido */}
                    <div className="lg:w-2/3 w-full space-y-8">
                        <motion.h2
                            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
                            initial={{ x: 50 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Especialista en Desarrollo Frontend & UX/UI
                        </motion.h2>

                        <motion.p
                            className="text-lg lg:text-xl text-gray-300 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Con más de 5 años de experiencia creando interfaces digitales impactantes.
                            Combino habilidades técnicas en desarrollo frontend con una fuerte pasión
                            por el diseño de experiencias de usuario intuitivas y visualmente atractivas.
                        </motion.p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                            {frontendSkills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    className="p-3 bg-gray-800/50 rounded-xl text-center backdrop-blur-sm border border-green-900/30 hover:border-green-400/30 transition-all"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{
                                        y: -5,
                                        boxShadow: '0 4px 24px -4px rgba(16,185,129,0.2)'
                                    }}
                                >
                                    <span className="text-green-400 font-medium text-sm lg:text-base">
                                        {skill}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Efectos de fondo */}
            <div className="absolute top-1/3 right-20 w-2 h-2 bg-green-400 rounded-full animate-float" />
            <div className="absolute bottom-1/4 left-24 w-3 h-3 bg-green-500 rounded-full animate-float-delayed" />
        </section>
    );
};

export default About;
