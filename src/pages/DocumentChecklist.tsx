import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileIcon, 
  BadgeCheckIcon, 
  FolderIcon 
} from 'lucide-react';

const DocumentChecklist = () => {
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
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        type: "tween",
        duration: 0.3 
      }
    },
    hover: {
      translateX: 10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white shadow-xl rounded-2xl p-8 mb-8"
      >
        <div className="flex items-center justify-center mb-8">
          <FileIcon className="mr-4 text-blue-600" size={40} />
          <h1 className="text-3xl font-bold text-gray-800">Document Checklist</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2 flex items-center">
              <FolderIcon className="mr-2 text-blue-500" size={24} />
              Land Records
            </h2>
            <motion.ul variants={containerVariants} className="space-y-3">
              {['Khasra - Digitally Signed', 'Naksha - Digitally Signed', 'Khatauni - Digitally Signed', 'Rin-Pushtika - Digitally Signed'].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-all"
                >
                  <BadgeCheckIcon className="mr-3 text-green-500" size={20} />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2 flex items-center">
              <FolderIcon className="mr-2 text-blue-500" size={24} />
              Additional Documents
            </h2>
            <motion.ul variants={containerVariants} className="space-y-3">
              {['Aadhar Card - Self Attested', 'PAN Card - Self Attested', 'Email ID - 2 Contacts'].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-all"
                >
                  <BadgeCheckIcon className="mr-3 text-green-500" size={20} />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DocumentChecklist;