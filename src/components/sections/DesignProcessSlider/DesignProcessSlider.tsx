import { motion } from "framer-motion";
import React from "react";

const DesignProcess = () => {
  const steps = [
    { title: "Research", color: "bg-green-500", text: "text-green-100" },
    { title: "Wireframing", color: "bg-green-600", text: "text-green-50" },
    { title: "Prototyping", color: "bg-green-700", text: "text-green-50" },
    { title: "Final Design", color: "bg-green-800", text: "text-green-100" },
    { title: "Testing", color: "bg-green-900", text: "text-green-100" },
  ];

  return (
    <div className="relative w-full py-20 bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-4"
          >
            My Design Process
          </motion.h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A carefully crafted journey from concept to final product, ensuring perfection at every stage.
          </p>
        </div>

        <motion.div
          className="flex gap-8 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ right: 0, left: -steps.length * 320 + 1000 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`${step.color} min-w-[320px] h-96 p-8 rounded-2xl shadow-2xl flex flex-col justify-between transform transition-all hover:scale-[1.02] relative overflow-hidden`}
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(0, 255, 127, 0.25)",
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={`${step.text} text-right`}>
                <span className="text-6xl font-black opacity-20">0{index + 1}</span>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                <p className="text-current opacity-90 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-2 bg-black/10">
                <motion.div
                  className="h-full bg-green-400"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default DesignProcess;