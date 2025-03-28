import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, MapPin, CheckCircle } from 'lucide-react';

const OurProjects = () => {
  const [activeSection, setActiveSection] = useState('2MW');

  const projectSections = {
    '2MW': [
      "BAHRI (SIDHI) - 2 M.W",
      "MASURAHI (SAGAR) - 4 M.W",
      "BHAPEL (SAGAR) - 2 M.W",
      "BHAISA (SAGAR) - 2 M.W",
      "MEERKHEDI (SAGAR) - 4 M.W",
      "MAHSAWN (REWA) - 2 M.W",
      "MAUGANJ JAIL ROAD (MAUGANJ) - 2 M.W",
      "GODAHA (REWA) - 6 M.W",
      "KAKRAWADA (VIDISHA) - 1.2 M.W",
      "BANWA BASODA (VIDISHA) - 4 M.W",
      "SIRNOTA (VIDISHA) - 2 M.W",
      "MANDI BAMORA (SAGAR) - 2 M.W",
      "UKSA (SIDHI) - 1.2 M.W",
      "Kothiya (SIDHI) - 2 M.W",
      "Multai (BETUL) - 2 M.W",
      "SIDHI MAIN (SIDHI) - 2 M.W",
      "KOTAR KALA (SIDHI) - 2 M.W",
      "BAGHWARI (SIDHI) - 1.5 M.W",
      "KATHMANA (REWA) - 1 M.W",
      "GAURKHEDA (VIDISHA) - 1 M.W",
      "TEEKAR (REWA) - 2 M.W",
      "PATPARA (SIDHI) - 1.5 M.W",
      "KHATIYA BICCHIYA (MANDLA) - 2 M.W",
      "HANUMANGARH (SIDHI) - 2 M.W",
      "SUSERA (GWALIOR) - 2 M.W",
      "CHILLARI (SIDHI) - 2 M.W"
    ],
    '500KW': [
      "Dhanha - 500 K.W (Project in Sidhi district)"
    ]
  };

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center mb-4 mt-12">
            <Sun className="text-yellow-500 mr-4" size={48} />
            <h1 className="text-4xl font-bold text-green-800">
              Our Solar Projects (67 MEGA WATTS)
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforming landscapes with sustainable solar energy solutions across multiple districts
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex bg-white shadow-lg rounded-full p-1"
          >
            {Object.keys(projectSections).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeSection === section 
                    ? 'bg-green-600 text-white' 
                    : 'text-green-700 hover:bg-green-100'
                }`}
              >
                {section === '2MW' ? '2 MegaWatts' : '500 KiloWatts'}
              </button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeSection}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
          >
            {projectSections[activeSection].map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300 flex items-center space-x-4"
              >
                <MapPin className="text-green-500" size={24} />
                <span className="text-gray-800 font-medium">{project}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 flex justify-center items-center"
        >
          <CheckCircle className="text-green-600 mr-4" size={32} />
          <p className="text-gray-700 text-lg">
            Committed to sustainable energy solutions across Madhya Pradesh
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurProjects;