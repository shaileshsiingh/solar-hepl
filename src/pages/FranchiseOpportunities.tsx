import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SunIcon, 
  CheckCircleIcon, 
  MapPinIcon, 
  PhoneIcon, 
  MailIcon,
  FileTextIcon 
} from 'lucide-react';

const FranchiseOpportunities = () => {
  const [activeSection, setActiveSection] = useState(null);

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
      scale: 1.03,
      transition: { duration: 0.2 }
    }
  };

  const sections = [
    {
      title: "Why Choose HEPL Renewable Energy?",
      icon: <SunIcon className="mr-3 text-green-600" size={32} />,
      items: [
        "Proven Track Record in EPC services and rooftop solar solutions",
        "Tap into the growing renewable energy market",
        "Comprehensive training programs",
        "Continuous operational and technical support"
      ]
    },
    {
      title: "Franchise Model Overview",
      icon: <MapPinIcon className="mr-3 text-blue-600" size={32} />,
      items: [
        "Initial Investment: ₹15 lakh (one-time franchise fee)",
        "50-50% profit-sharing model",
        "Exclusive Head Sub-EPC status for chosen districts"
      ]
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-green-50 to-white"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center items-center mb-6">
          <FileTextIcon className="mr-4 text-green-600" size={48} />
          <h1 className="text-4xl font-extrabold text-green-800 tracking-tight mt-20">
            Join the HEPL Renewable Energy Family
          </h1>
        </div>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Invest in a growing industry with immense potential. HEPL Renewable Energy offers a unique franchise opportunity to be part of the renewable energy revolution.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {sections.map((section, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover="hover"
            onClick={() => setActiveSection(activeSection === index ? null : index)}
            className={`
              bg-white shadow-lg rounded-2xl p-6 cursor-pointer 
              transition-all duration-300 
              ${activeSection === index ? 'ring-4 ring-green-500' : 'hover:shadow-xl'}
            `}
          >
            <div className="flex items-center mb-4">
              {section.icon}
              <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
            </div>
            <motion.ul 
              initial="hidden"
              animate={activeSection === index ? "visible" : "hidden"}
              variants={containerVariants}
              className="space-y-3"
            >
              {section.items.map((item, itemIndex) => (
                <motion.li 
                  key={itemIndex}
                  variants={itemVariants}
                  className="flex items-center text-gray-700"
                >
                  <CheckCircleIcon className="mr-3 text-green-500" size={20} />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white shadow-lg rounded-2xl p-8 mb-12"
      >
        <h2 className="text-2xl font-semibold text-green-800 mb-6 flex items-center">
          <PhoneIcon className="mr-3 text-green-600" size={32} />
          Contact Information
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-gray-700 mb-4">Phone Numbers</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <PhoneIcon className="mr-2 text-green-500" size={20} />
                +91 62634-71229
              </li>
              <li className="flex items-center">
                <PhoneIcon className="mr-2 text-green-500" size={20} />
                +91 91525-91652
              </li>
              <li className="flex items-center">
                <PhoneIcon className="mr-2 text-green-500" size={20} />
                +91 89622-59191
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 mb-4">Email Addresses</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MailIcon className="mr-2 text-blue-500" size={20} />
                <a href="mailto:ho@heplsolarin" className="text-blue-600 hover:underline">ho@heplsolarin</a>
              </li>
              <li className="flex items-center">
                <MailIcon className="mr-2 text-blue-500" size={20} />
                <a href="mailto:enquiry@heplsolarin" className="text-blue-600 hover:underline">enquiry@heplsolarin</a>
              </li>
              <li className="flex items-center">
                <MailIcon className="mr-2 text-blue-500" size={20} />
                <a href="mailto:sales@heplsolarin" className="text-blue-600 hover:underline">sales@heplsolarin</a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div className="text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 text-white text-lg py-3 px-6 rounded-full 
          hover:bg-green-700 transition duration-300 
          shadow-lg hover:shadow-xl flex items-center mx-auto"
        >
          <FileTextIcon className="mr-3" size={24} />
          Franchise Enquiry Form
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default FranchiseOpportunities;