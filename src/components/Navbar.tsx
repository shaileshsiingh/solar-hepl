import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    { name: 'Resco Solar Modal', path: '/resco-solar' },
    { name: 'Franchise Opportunities', path: '/franchise-opportunities' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left-aligned Menu Items */}
          <div className="flex items-center space-x-8">
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-600 hover:text-yellow-500 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
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
                        className="block px-4 py-2 text-gray-600 hover:text-yellow-500 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-gray-600 hover:text-yellow-500 hover:bg-gray-50"
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
              <Sun className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">HEPL Solar</span>
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
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {leftNavItems.concat(rightNavItems).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 text-gray-600 hover:text-yellow-500 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 mt-2 pt-2">
              {dropdownItems.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-gray-600 hover:text-yellow-500 hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-3 py-2 text-gray-600 hover:text-yellow-500 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;