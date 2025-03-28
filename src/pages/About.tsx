import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Target, Shield } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/api/placeholder/1920/800?text=Solar+Energy+Landscape")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0,0,0,0.6)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-extrabold text-white mb-6">About HEPL Solar</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Leading the renewable energy revolution with innovative solar solutions since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="mb-6">
                <img 
                  src="https://img.freepik.com/premium-photo/solar-panel-plantation_149301-2282.jpg" 
                  alt="Our Vision" 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading force in transforming India's energy landscape through sustainable solar solutions, making clean energy accessible to all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="mb-6">
                <img 
                  src="https://th.bing.com/th/id/OIP.XCXLbROz1FSR2W9q_zzRrAHaFB?w=2102&h=1426&rs=1&pid=ImgDetMain" 
                  alt="Our Mission" 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide innovative and reliable solar energy solutions that help businesses and households reduce their carbon footprint while maximizing energy efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at HEPL Solar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Excellence", description: "Striving for the highest quality in everything we do" },
              { icon: Users, title: "Collaboration", description: "Working together to achieve common goals" },
              { icon: Target, title: "Innovation", description: "Continuously improving our solutions" },
              { icon: Shield, title: "Integrity", description: "Maintaining the highest ethical standards" },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <value.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experts leading HEPL Solar's mission for a sustainable future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                position: "CEO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
               },
              {
                name: "Jane Smith",
                position: "Technical Director",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
               },
              {
                name: "Mike Johnson",
                position: "Operations Head",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
               }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <img 
              src="https://th.bing.com/th/id/OIP.IwoIgAC-XrjdjFEOPqGHdwHaEO?w=1344&h=768&rs=1&pid=ImgDetMain" 
              alt="Sustainability Commitment" 
              className="w-full h-96 object-cover rounded-2xl mb-8"
            />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to a Sustainable Future</h2>
            <p className="text-gray-600 text-xl">
              At HEPL Solar, we are dedicated to driving positive change through innovative renewable energy solutions that empower communities and protect our planet.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;