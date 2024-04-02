import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="w-full py-12" // Adjusted for full width
    >
      <div className="container mx-auto px-6"> {/* Content container */}
        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedSection;
