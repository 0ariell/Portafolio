import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-t from-[#0F1B0E] to-gray-900 py-20 px-6 border-t border-green-900/30 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(at_center_center,_#1a2e1a_0%,_transparent_70%)] pointer-events-none" />
            <div className="absolute top-0 left-20 w-48 h-48 bg-green-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.h3
                    className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Let's Connect
                </motion.h3>

                <motion.div
                    className="flex justify-center space-x-8 mb-8 flex-wrap gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {['LinkedIn', 'GitHub', 'Email'].map((item) => (
                        <motion.a
                            key={item}
                            href={
                                item === "LinkedIn"
                                    ? "https://www.linkedin.com"
                                    : item === "GitHub"
                                        ? "https://www.github.com"
                                        : "mailto:contacto@miportafolio.com"
                            }
                            target={item !== "Email" ? "_blank" : undefined}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-900/20 transition-all group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Iconos SVG */}
                            {item === 'LinkedIn' && (
                                <svg className="w-6 h-6 fill-current text-green-400" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            )}
                            {item === 'GitHub' && (
                                <svg className="w-6 h-6 fill-current text-green-400" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            )}
                            {item === 'Email' && (
                                <svg className="w-6 h-6 fill-current text-green-400" viewBox="0 0 24 24">
                                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                                </svg>
                            )}
                            <span className="font-medium bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                                {item}
                            </span>
                        </motion.a>
                    ))}
                </motion.div>

                <motion.p
                    className="text-sm text-green-400/80"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    © {new Date().getFullYear()} Mi Portafolio<br className="sm:hidden" />
                    <span className="hidden sm:inline"> - </span>
                    Diseñado con ♥ y{" "}
                    <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                        React & Next.js | ArielDS
                    </span>
                </motion.p>
            </div>

            {/* Floating elements */}
            <div className="absolute bottom-20 right-32 w-3 h-3 bg-green-400 rounded-full animate-float" />
            <div className="absolute bottom-1/3 left-24 w-2 h-2 bg-green-300 rounded-full animate-float-delayed" />
        </footer>
    );
};

export default Footer;