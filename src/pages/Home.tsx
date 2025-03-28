import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sun, ArrowRight, CheckCircle2, Globe2, Factory, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Hero from './assets/wmremove-transformed.jpeg'

const Home = () => {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '10K+', label: 'Solar Panels Installed' },
    { value: '50MW+', label: 'Power Generated' },
    { value: '30K+', label: 'Tons CO₂ Saved' },
  ];

  const features = [
    {
      title: 'Customized Renewable Solutions',
      description: 'Tailored solar energy solutions for your specific needs',
      icon: Sun,
      image: 'https://images.unsplash.com/photo-1544245607-99ac92ec1da5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c29sYXIlMjBwbGV4dXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
      title: 'Commitment to Sustainability',
      description: 'Driving green energy transformation',
      icon: HomeIcon,
      image: 'https://th.bing.com/th/id/OIP.2MYBqDUHB-K_Inw5oJCnrgHaD4?rs=1&pid=ImgDetMain'
    },
    {
      title: 'Expertise and Reliability',
      description: 'Proven track record in solar installations',
      icon: Factory,
      image: 'https://th.bing.com/th/id/OIP.1Xw8m8OFA_CQmkijq-3iPAHaD4?rs=1&pid=ImgDetMain'
    }
  ];

  const solarServices = [
    {
      title: 'Residential Solar Panel Installation',
      description: 'Transform your home with clean, renewable energy',
      icon: HomeIcon
    },
    {
      title: 'Commercial Solar Solutions',
      description: 'Reduce operational costs with solar power',
      icon: Factory
    },
    {
      title: 'Solar Panel Maintenance',
      description: 'Ensuring optimal performance of your solar system',
      icon: CheckCircle2
    },
    {
      title: 'Solar Battery Backup',
      description: 'Reliable power storage for uninterrupted energy',
      icon: Sun
    },
    {
      title: 'Flexible Financing',
      description: 'Affordable solar solutions for every budget',
      icon: Globe2
    }
  ];

  const solarActionSlides = [
    {
      image: 'https://arsglasstech.com/blog/wp-content/uploads/2022/06/BHADLA-SOLAR-PLANT-edited.jpeg',
      title: 'Residential Solar Transformation',
      description: 'Turning homes into sustainable energy powerhouses'
    },
    {
      image: 'https://media.istockphoto.com/id/1349360708/photo/solar-panels-on-the-tiled-roof-of-the-building-in-the-sun.jpg?b=1&s=170667a&w=0&k=20&c=LzQ5mE_k3JUppbcN3RgskCJ8ca2lfiILPbt08GRBjjI=',
      title: 'Commercial Solar Integration',
      description: 'Empowering businesses with clean energy solutions'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.GRNnBWyhXjS8pKlPKJOrmQHaFF?rs=1&pid=ImgDetMain',
      title: 'Large-Scale Solar Farms',
      description: 'Generating renewable energy at an unprecedented scale'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.2rMfeci9k84ZNDrze801VAHaFj?rs=1&pid=ImgDetMain',
      title: 'Solar Energy Storage',
      description: 'Advanced battery technologies for continuous power supply'
    },
    {
      image: 'https://solarpanels-for-homes.com/wp-content/uploads/2021/12/Cleaning-solar-panels-on-roof-768x503.jpg',
      title: 'Grid Integration',
      description: 'Seamlessly connecting solar power to electrical grids'
    },
    {
      image: 'https://th.bing.com/th/id/R.b9a8b90e01b18eb635b19882b7418941?rik=wsErFe8b9D8LSQ&riu=http%3a%2f%2fjournoviews.com%2fwp-content%2fuploads%2f2022%2f10%2fWhatsApp-Image-2022-10-07-at-14.33.40-1.jpeg&ehk=s%2b2mtd4bEbV3tFnL6b9ojkqEKtNBMEHhLZHz4RXL4pA%3d&risl=&pid=ImgRaw&r=0',
      title: 'Innovative Solar Technologies',
      description: 'Cutting-edge solar panel designs and efficiency improvements'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={Hero}
            alt="Solar Panels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-24 left-1/2 -translate-x-1/2"
            >
              <Sun className="h-40 w-40 text-yellow-500 opacity-20" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Convert Your Land
              <span className="block text-yellow-500">To A Commercial Solar Park</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Leading sustainable energy solutions with innovative solar technologies
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300"
              >
                Get A Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={featuresRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={featuresInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our commitment to sustainable and innovative solar solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <feature.icon className="h-8 w-8 text-yellow-500 mb-3" />
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Energy in Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Solar Energy in Action
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="solar-action-slider"
          >
            {solarActionSlides.map((slide, index) => (
              <SwiperSlide key={index} className="group">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Solar Services Section */}
      <section ref={statsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Going Solar Has Never Been Easier
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solarServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <service.icon className="mx-auto h-12 w-12 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Globe2 className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Solar Innovation
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on solar technology and energy solutions
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-yellow-500 text-gray-900 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;