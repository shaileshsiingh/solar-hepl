import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Settings, PenTool as Tool, LineChart, HeartHandshake } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solar solutions from consultation to maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Settings,
                title: "Installation Services",
                description: "Professional installation of solar panels and systems",
                features: [
                  "Site assessment and planning",
                  "Custom system design",
                  "Professional installation",
                  "Quality assurance testing"
                ]
              },
              {
                icon: Tool,
                title: "Maintenance & Repair",
                description: "Regular maintenance and prompt repair services",
                features: [
                  "Scheduled maintenance",
                  "Emergency repairs",
                  "System optimization",
                  "Performance monitoring"
                ]
              },
              {
                icon: LineChart,
                title: "Consultation & Design",
                description: "Expert consultation and custom system design",
                features: [
                  "Energy needs analysis",
                  "ROI calculations",
                  "Custom system design",
                  "Financial planning assistance"
                ]
              },
              {
                icon: HeartHandshake,
                title: "After-Sales Support",
                description: "Dedicated support throughout your solar journey",
                features: [
                  "24/7 customer support",
                  "Performance monitoring",
                  "Warranty service",
                  "System upgrades"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <service.icon className="h-12 w-12 text-yellow-500 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;