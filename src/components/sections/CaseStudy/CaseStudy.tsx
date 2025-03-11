import { ReactCompareSlider } from "react-compare-slider";
import { motion } from "framer-motion";

const CaseStudy = () => {
    return (
        <section className="relative py-20 px-4 bg-gradient-to-b from-[#0F1B0E] to-gray-900 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(at_center_center,_#1a2e1a_0%,_transparent_70%)] pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-green-500/10 rounded-full blur-3xl" />

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
                        leftImage="before.jpg"
                        rightImage="after.jpg"
                        sliderColor="#4ADE80"
                        className="h-[600px] lg:h-[700px]"
                        handle={
                            <div className="h-14 w-14 rounded-full bg-white border-2 border-green-400 shadow-xl flex items-center justify-center hover:scale-110 transition-transform">
                                <div className="h-2 w-10 bg-green-400 rounded-full" />
                            </div>
                        }
                    />

                    {/* Labels */}
                    <div className="absolute bottom-6 left-6 bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-xl text-sm border border-green-900/30">
                        <span className="text-green-300">Before</span> / <span className="text-green-500">After</span>
                    </div>
                </motion.div>

                <motion.p
                    className="mt-12 text-lg max-w-2xl mx-auto text-center bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    Rediseño completo de interfaz utilizando principios modernos de UX/UI y stack tecnológico de vanguardia.
                </motion.p>
            </div>

            {/* Floating particles */}
            <div className="absolute top-1/3 right-20 w-2 h-2 bg-green-400 rounded-full animate-float" />
            <div className="absolute top-1/2 left-24 w-3 h-3 bg-green-500 rounded-full animate-float-delayed" />
        </section>
    );
};

export default CaseStudy;