// src/components/LoadingAnimation/LoadingAnimation.tsx
import { useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const LoadingAnimation = () => {
  useEffect(() => {
    gsap.fromTo(
      ".loading-logo",
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
    );
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center z-50">
      <motion.div
        className="loading-logo text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        Portafolio
      </motion.div>
    </div>
  );
};

export default LoadingAnimation;