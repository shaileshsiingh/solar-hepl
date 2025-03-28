import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sun, Battery, Cpu, Gauge } from 'lucide-react';

const Products = () => {
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
            <h1 className="text-4xl font-bold text-white mb-6">Our Products</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our range of high-quality solar solutions designed for maximum efficiency and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Sun,
                title: "Solar Panels",
                description: "High-efficiency monocrystalline solar panels with 25-year warranty",
                features: ["Efficiency up to 21.5%", "Anti-reflective coating", "Robust aluminum frame", "PID resistant"],
                image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              },
              {
                icon: Battery,
                title: "Solar Batteries",
                description: "Advanced lithium-ion batteries for reliable energy storage",
                features: ["10-year warranty", "Smart monitoring", "Compact design", "Scalable capacity"],
                image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              },
              {
                icon: Cpu,
                title: "Inverters",
                description: "Smart inverters with advanced monitoring capabilities",
                features: ["98.5% efficiency", "Built-in monitoring", "Wide voltage range", "Multiple MPPT"],
                image: "https://images.unsplash.com/photo-1623127899673-39264566a100?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              },
              {
                icon: Gauge,
                title: "Monitoring Systems",
                description: "Real-time monitoring and analytics for your solar installation",
                features: ["Mobile app", "Energy analytics", "Performance alerts", "Remote control"],
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <product.icon className="h-8 w-8 text-yellow-500 mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-900">{product.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;