import { motion } from "framer-motion";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";

const Contact = () => {
    const [state, handleSubmit] = useForm("mblgjade");
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
        <section className="min-h-screen py-20 bg-gradient-to-b from-[#0F1B0E] to-gray-900 relative overflow-hidden">
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

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-8">
                                {/* Campo Nombre */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <label htmlFor="name" className="block text-sm font-medium text-green-400 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-900/50 rounded-lg border border-green-900/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all text-gray-100"
                                        placeholder="John Doe"
                                        required
                                    />
                                    <ValidationError
                                        prefix="Name"
                                        field="name"
                                        errors={state.errors}
                                        className="text-red-400 text-sm mt-1"
                                    />
                                </motion.div>

                                {/* Campo Email */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <label htmlFor="email" className="block text-sm font-medium text-green-400 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-900/50 rounded-lg border border-green-900/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all text-gray-100"
                                        placeholder="john@example.com"
                                        required
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                        className="text-red-400 text-sm mt-1"
                                    />
                                </motion.div>

                                {/* Campo Mensaje */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <label htmlFor="message" className="block text-sm font-medium text-green-400 mb-2">
                                        Project Details
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 bg-gray-900/50 rounded-lg border border-green-900/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all text-gray-100 resize-none"
                                        placeholder="Describe your project here..."
                                        required
                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                        className="text-red-400 text-sm mt-1"
                                    />
                                </motion.div>

                                {/* Botón de Submit */}
                                <motion.div
                                    className="pt-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <button
                                        type="submit"
                                        disabled={state.submitting}
                                        className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        {state.submitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
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
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </motion.div>

                                {/* Mensaje de éxito */}
                                {state.succeeded && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center p-4 bg-green-900/20 rounded-lg border border-green-400/30 text-green-400"
                                    >
                                        🎉 Message sent successfully! I'll get back to you soon.
                                    </motion.div>
                                )}
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