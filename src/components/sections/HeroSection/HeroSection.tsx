import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../../assets/Filippo6039_w_1024-1.jpg.jpg";

const Hero = () => {
  return (
    <section className="min-h-[600px] lg:min-h-[800px] w-full bg-gradient-to-br from-[#081C15] to-gray-900 border-b border-green-900/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-12 lg:gap-24 pt-20 lg:pt-32">
          {/* Image Container */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Hero Image */}
              <img
                src={heroImage}
                alt="Hero Image"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Decorative Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-green-900/50" />
              <div className="absolute inset-0 border border-green-900/20 rounded-3xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 lg:space-y-12 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Full Stack Designer
              </span>
              <br />
              <span className="text-gray-300">
                UX/UI & Frontend Development
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0"
            >
              Crafting unique digital experiences by blending innovative design with cutting-edge technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link
                to="projects"
                className="inline-block px-8 py-4 lg:px-12 lg:py-5 text-lg font-semibold bg-gradient-to-r from-green-500 to-green-700 rounded-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 group"
              >
                <span className="flex items-center gap-3">
                  <span>View Projects</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform"
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
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-1/4 w-24 h-24 bg-gradient-to-r from-green-500/10 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-40 right-32 w-36 h-36 bg-gradient-to-br from-green-700/15 to-transparent rounded-full blur-xl" />
        </div>
      </div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-green-400 rounded-full animate-float" />
      <div className="absolute top-1/2 left-24 w-3 h-3 bg-green-500 rounded-full animate-float-delayed" />
    </section>
  );
};

export default Hero;
