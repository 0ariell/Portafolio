import { motion } from "framer-motion";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";

const Contact = () => {
    const [state, handleSubmit] = useForm("TU_ID_DE_FORMSPREE");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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

                {/* Contenedor grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Tarjeta de Descripción */}
                    <motion.div
                        className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-green-900/30 h-fit"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                                ¿Qué deberías incluir?
                            </h3>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-5 h-5 bg-green-400/20 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                    <p className="text-gray-300">
                                        Detalles sobre tu proyecto o idea principal
                                    </p>
                                </li>

                                <li className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-5 h-5 bg-green-400/20 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                    <p className="text-gray-300">
                                        Requerimientos técnicos específicos
                                    </p>
                                </li>

                                <li className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-5 h-5 bg-green-400/20 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                    <p className="text-gray-300">
                                        Plazos estimados y presupuesto
                                    </p>
                                </li>
                            </ul>

                            {/* Botón parpadeante */}
                            <motion.div
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-green-900/30 border border-green-400/20 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                animate={{
                                    boxShadow: [
                                        "0 0 12px -2px rgba(16,185,129,0)",
                                        "0 0 12px -2px rgba(16,185,129,0.3)",
                                        "0 0 12px -2px rgba(16,185,129,0)"
                                    ]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut"
                                }}
                            >
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-green-400 font-medium">Disponible para trabajar</span>
                            </motion.div>

                            <p className="text-gray-400 mt-6 text-sm leading-relaxed">
                                Normalmente respondo en menos de 24 horas. Si es urgente,
                                puedes contactarme directamente a través de mis redes sociales.
                            </p>
                        </div>
                    </motion.div>

                    {/* Tarjeta de Formulario */}
                    <motion.div
                        className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-green-900/30"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="text-center mb-12">
                            <motion.h2
                                className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                            >
                                Let's start a project together
                            </motion.h2>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-8">
                                {/* Campos del formulario (igual que antes) */}
                                {/* ... (Mantener los mismos campos del formulario anteriores) ... */}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Efectos de fondo */}
            <div className="absolute top-1/3 right-20 w-2 h-2 bg-green-400 rounded-full animate-float" />
            <div className="absolute top-1/2 left-24 w-3 h-3 bg-green-500 rounded-full animate-float-delayed" />
        </section>
    );
};

export default Contact;