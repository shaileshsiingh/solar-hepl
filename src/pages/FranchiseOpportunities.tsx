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

const HEPLFranchisePage = () => {
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
      details: [
        "Proven Track Record: Join a company with a successful history in providing EPC services, rooftop solar solutions, and participation in initiatives like Kusum A Yojana.",
        "Growing Market: Tap into the increasing demand for renewable energy solutions as more individuals and businesses shift towards sustainable energy.",
        "Comprehensive Training: Benefit from extensive training programs to equip you with the skills and knowledge necessary for success in the renewable energy sector.",
        "Ongoing Support: Receive continuous operational, technical, and marketing support from our experienced team."
      ]
    },
    {
      title: "Franchise Model Overview",
      details: [
        "Initial Investment: ₹15 lakh (one-time franchise fee)",
        "Profit Sharing: 50-50% profit-sharing model on all sales generated",
        "Exclusive Territory: Enjoy exclusive Head Sub-EPC status for your chosen districts, allowing you to operate without competition from other franchisees."
      ]
    },
    {
      title: "What We Offer",
      details: [
        {
          section: "Training & Development",
          items: [
            "Comprehensive onboarding training covering operations, sales, and technical aspects.",
            "Ongoing workshops and updates on industry trends and technologies."
          ]
        },
        {
          section: "Marketing Support",
          items: [
            "Access to marketing materials, including brochures, flyers, and digital assets.",
            "Guidance on local marketing strategies to promote your franchise effectively."
          ]
        },
        {
          section: "Operational Guidance",
          items: [
            "Assistance in establishing your office with a minimum area of 200 sq ft.",
            "Access to standard operating procedures and best practices to ensure efficiency."
          ]
        },
        {
          section: "Supply Chain Access",
          items: [
            "Direct access to quality products and services related to renewable energy.",
            "Support in sourcing and managing inventory for your franchise."
          ]
        },
        {
          section: "Networking Opportunities",
          items: [
            "Join a network of franchisees for collaboration and sharing of best practices.",
            "Participate in regional and national franchise meetings."
          ]
        }
      ]
    },
    {
      title: "Who We Are Looking For",
      details: [
        "Motivated individuals or businesses with:",
        "A passion for renewable energy and sustainability",
        "Entrepreneurial spirit and desire to succeed",
        "Strong communication and customer service skills",
        "Ability to invest in a long-term business relationship"
      ]
    },
    {
      title: "How to Get Started",
      details: [
        "1. Express Your Interest: Fill out the Franchise enquiry Form below.",
        "2. Initial Discussion: Our team will contact you to discuss the opportunity in detail.",
        "3. Evaluation: We'll evaluate your application to ensure a mutual fit.",
        "4. Training & Setup: Once approved, you'll undergo training and begin setting up your franchise."
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
      <div className="text-center mb-12 mt-12">
        
        <h1 className="text-4xl font-extrabold text-green-800 tracking-tight mb-4">
          Join the HEPL Renewable Energy Family
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Are you looking to invest in a growing industry with immense potential? HEPL Renewable Energy Pvt. Ltd. offers you a unique franchise opportunity to be a part of the renewable energy revolution. As a franchisee, you'll benefit from our established brand, proven business model, and comprehensive support system.
        </p>
      </div>

      {sections.map((section, index) => (
        <motion.div 
          key={index}
          variants={itemVariants}
          className="bg-white shadow-lg rounded-2xl p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-6">{section.title}</h2>
          {typeof section.details[0] === 'object' ? (
            <div className="grid md:grid-cols-2 gap-6">
              {section.details.map((item, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-gray-700 mb-4">{item.section}</h3>
                  <ul className="space-y-2">
                    {item.items.map((subItem, subIdx) => (
                      <li key={subIdx} className="flex items-center text-gray-700">
                        <CheckCircleIcon className="mr-3 text-green-500" size={20} />
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="space-y-3">
              {section.details.map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <CheckCircleIcon className="mr-3 text-green-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}

      <motion.div 
        className="bg-white shadow-lg rounded-2xl p-8 mb-12"
      >
        <h2 className="text-2xl font-semibold text-green-800 mb-6 flex items-center">
          <PhoneIcon className="mr-3 text-green-600" size={32} />
          Contact Us
        </h2>
        <p className="mb-6 text-gray-700">
          For more information about our franchise opportunities, please reach out to us.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-gray-700 mb-4">Phone</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <PhoneIcon className="mr-2 text-green-500" size={20} />
                +91 62634 71229
              </li>
              <li className="flex items-center">
                <PhoneIcon className="mr-2 text-green-500" size={20} />
                +91 91525 91652
              </li>
              <li className="flex items-center">
                <PhoneIcon className="mr-2 text-green-500" size={20} />
                +91 89622 59191
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 mb-4">Email</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MailIcon className="mr-2 text-blue-500" size={20} />
                <a href="mailto:hr@heplsolarin" className="text-blue-600 hover:underline">
                  hr@heplsolarin
                </a>
              </li>
              <li className="flex items-center">
                <MailIcon className="mr-2 text-blue-500" size={20} />
                <a href="mailto:enquiry@heplsolarin" className="text-blue-600 hover:underline">
                  enquiry@heplsolarin
                </a>
              </li>
              <li className="flex items-center">
                <MailIcon className="mr-2 text-blue-500" size={20} />
                <a href="mailto:sales@heplsolarin" className="text-blue-600 hover:underline">
                  sales@heplsolarin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="text-center mb-12"
      >
        <h2 className="text-2xl font-semibold text-green-800 mb-6">
          Join Us in Shaping a Sustainable Future!
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto mb-8">
          Be a part of the solution. Partner with HEPL Renewable Energy Pvt. Ltd. and make a difference in the renewable energy landscape!
        </p>
        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdLmRoC_aJmkCVPNklHVFSdsuJDKDjl2FVGZAQHqU8wFX_6Vw/viewform?usp=send_form"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 text-white text-lg py-3 px-6 rounded-full 
          hover:bg-green-700 transition duration-300 
          shadow-lg hover:shadow-xl flex items-center mx-auto inline-block"
        >
          <FileTextIcon className="mr-3" size={24} />
          Enquiry Form
        </motion.a>
      </motion.div>

      <div className="text-center text-gray-500 text-sm">
        Copyright © 2025 HEPL. All Rights Reserved.
      </div>
    </motion.div>
  );
};

export default HEPLFranchisePage;