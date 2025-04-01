import { ReactCompareSlider } from "react-compare-slider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CaseStudy = () => {
    return (
        <section className="relative py-20 px-4 bg-gradient-to-b from-[#0F1B0E] to-gray-900 overflow-hidden">
            {/* Botón Volver al Home */}
            <motion.div
                className="max-w-7xl mx-auto mb-12 px-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
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

            {/* Contenido principal */}
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    Transformación Digital
                </motion.h2>

                <motion.div
                    className="relative rounded-3xl overflow-hidden border-2 border-green-900/30 hover:border-green-400/20 transition-all group shadow-2xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <ReactCompareSlider
                        left={
                            <img
                                src="/before.jpg"
                                alt="Antes"
                                className="object-cover w-full h-full"
                            />
                        }
                        right={
                            <img
                                src="/after.jpg"
                                alt="Después"
                                className="object-cover w-full h-full"
                            />
                        }
                        className="h-[600px] lg:h-[700px]"
                        handle={
                            <motion.div
                                className="h-14 w-14 rounded-full bg-white border-2 border-green-400 shadow-xl flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="h-2 w-10 bg-green-400 rounded-full" />
                            </motion.div>
                        }
                    />

                    {/* Etiqueta de comparación */}
                    <motion.div
                        className="absolute bottom-6 left-6 bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-xl text-sm border border-green-900/30"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-green-300">Antes</span> / <span className="text-green-500">Después</span>
                    </motion.div>
                </motion.div>

                {/* Descripción detallada */}
                <motion.div
                    className="mt-12 grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-green-400">Desafío</h3>
                        <p className="text-gray-300">
                            Modernizar una plataforma obsoleta manteniendo la esencia de la marca y mejorando
                            la experiencia de usuario en un 40%.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-green-400">Solución</h3>
                        <p className="text-gray-300">
                            Rediseño completo del sistema de navegación e implementación de un nuevo
                            sistema de diseño basado en componentes modulares.
                        </p>
                    </div>
                </motion.div>

                {/* Resultados destacados */}
                <motion.div
                    className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {[{ metric: "↑ 150%", label: "Engagement" }, { metric: "↓ 35%", label: "Tasa de Rebote" }, { metric: "⏱ 2.1s", label: "Load Time" }].map((item, index) => (
                        <div key={index} className="p-6 bg-gray-800/30 rounded-xl border border-green-900/30">
                            <div className="text-3xl font-bold text-green-400">{item.metric}</div>
                            <div className="text-gray-300 mt-2">{item.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute top-1/3 right-20 w-2 h-2 bg-green-400 rounded-full animate-float" />
            <div className="absolute bottom-1/4 left-24 w-3 h-3 bg-green-500 rounded-full animate-float-delayed" />
        </section>
    );
};

export default CaseStudy;
