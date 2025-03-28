import React from 'react';
import { motion } from 'framer-motion';
import { 
  SunIcon, 
  SparklesIcon, 
  ServerIcon 
} from 'lucide-react';

const RescoSolarModal = () => {
  // Animation variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-green-50 to-white"
    >
      <motion.h1 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-4xl font-extrabold text-center text-green-800 mt-12 mb-12 tracking-tight"
      >
        Renewable Energy Service Company (RESCO)
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Zero Investment */}
        <motion.div 
          variants={itemVariants}
          whileHover="hover"
          className="text-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
        >
          <motion.div 
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SunIcon className="mx-auto mb-4 text-green-600" size={64} />
          </motion.div>
          <h2 className="text-xl font-semibold mb-4 text-green-800">No upfront investment</h2>
          <p className="text-gray-600">Unlike a SOLAR EPC or capex proposition, the RESCO model is a zero-investment model. Pay only for electricity generated while the solar plant is owned by the RESCO developer.</p>
        </motion.div>

        {/* Continuous Operations */}
        <motion.div 
          variants={itemVariants}
          whileHover="hover"
          className="text-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ServerIcon className="mx-auto mb-4 text-blue-600" size={64} />
          </motion.div>
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Continuous Operations Support</h2>
          <p className="text-gray-600">Complete ownership and responsibility for system operations and maintenance. Experienced engineers ensure maximum plant performance throughout its lifetime.</p>
        </motion.div>

        {/* Better Monitoring */}
        <motion.div 
          variants={itemVariants}
          whileHover="hover"
          className="text-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
        >
          <motion.div 
            initial={{ rotate: 10 }}
            animate={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SparklesIcon className="mx-auto mb-4 text-purple-600" size={64} />
          </motion.div>
          <h2 className="text-xl font-semibold mb-4 text-purple-800">Advanced Monitoring</h2>
          <p className="text-gray-600">Remote monitoring system providing real-time energy data analytics. Track load and consumption patterns for enhanced efficiency and quick response.</p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16 bg-green-50 rounded-xl py-8 px-4"
      >
        <h2 className="text-3xl font-bold text-green-900 mb-6">Online Appointments</h2>
        <motion.p 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="text-green-700 text-lg font-medium"
        >
          New services are coming soon!
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default RescoSolarModal;