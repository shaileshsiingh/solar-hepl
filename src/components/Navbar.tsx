import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import logo from '../pages/assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const leftNavItems = [
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const rightNavItems = [
    { name: 'Home', path: '/' },
    { name: 'Kusum Yojana (A)', path: '/kusum-yojana' },
    { name: 'About', path: '/about' },
  ];

  const dropdownItems = [
    { name: 'Our Projects', path: '/projects' },
    { name: 'Document Checklist', path: '/document-checklist' },
    { name: 'Register with us', path: 'https://docs.google.com/forms/d/e/1FAIpQLSdsTNcddJwsDiXn2TWB9UasHocmE-ZMm16xeYMrj4rsEAYd8Q/viewform', external: true },
    { name: 'Resco Solar Model', path: '/resco-solar' },
    { name: 'Franchise Opportunities', path: '/franchise-opportunities' },
  ];

  const sidebarVariants = {
    closed: {
      x: '-100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 0.5 }
  };

  return (
    <nav className="shadow-lg fixed w-full z-50" style={{backgroundColor:'#F8D9D9'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left-aligned Menu Items */}
          <div className="flex items-center space-x-8">
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sky-900 hover:text-yellow-500 transition-colors duration-200 hidden md:block"
              >
                {item.name}
              </Link>
            ))}
            <div 
              className="relative hidden md:block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center text-gray-600 hover:text-yellow-500 transition-colors duration-200"
              >
                More <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                  {dropdownItems.map((item) => (
                    item.external ? (
                      <a
                        key={item.name}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sky-900 hover:text-yellow-500 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sky-900 hover:text-yellow-500 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Centered Logo */}
          <div className="flex-grow flex justify-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="HEPL Solar Logo" className="h-16 w-16" />
              {/* <span className="ml-2 text-xl font-bold text-gray-800">HEPL Solar</span> */}
            </Link>
          </div>

          {/* Right-aligned Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            {rightNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-600 hover:text-yellow-500 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-yellow-500"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div 
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sidebar */}
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 left-0 h-screen w-64 bg-white shadow-xl z-50 overflow-y-auto"
            >
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <Link 
                    to="/" 
                    className="flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Sun className="h-6 w-6 text-yellow-500" />
                    <span className="ml-2 font-bold text-gray-800">HEPL Solar</span>
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="p-4">
                {/* All Nav Items */}
                <div className="space-y-4">
                  {rightNavItems.map((item) => (
                    <motion.div key={item.name} variants={itemVariants}>
                      <Link
                        to={item.path}
                        className="block py-2 text-gray-700 hover:text-yellow-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {leftNavItems.map((item) => (
                    <motion.div key={item.name} variants={itemVariants}>
                      <Link
                        to={item.path}
                        className="block py-2 text-gray-700 hover:text-yellow-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* More Dropdown */}
                  <motion.div variants={itemVariants}>
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-yellow-500 transition-colors"
                    >
                      <span>More</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {mobileDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-4 mt-2 space-y-2 overflow-hidden"
                        >
                          {dropdownItems.map((item) => (
                            item.external ? (
                              <a
                                key={item.name}
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center py-2 text-gray-600 hover:text-yellow-500"
                              >
                                <ChevronRight className="h-4 w-4 mr-2" />
                                {item.name}
                              </a>
                            ) : (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="flex items-center py-2 text-gray-600 hover:text-yellow-500"
                                onClick={() => setIsOpen(false)}
                              >
                                <ChevronRight className="h-4 w-4 mr-2" />
                                {item.name}
                              </Link>
                            )
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;