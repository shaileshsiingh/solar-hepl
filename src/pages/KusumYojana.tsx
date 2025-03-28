import { motion } from 'framer-motion';

const KusumYojana = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const sections = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Paper Work Process",
      description: "A comprehensive documentation journey",
      points: [
        "Registration",
        "Verification of documents",
        "Submission of before LOA FORMAT",
        "EMD SUBMISSION",
        "BANK FD FOR PBG",
        "POWER PURCHASE AGREEMENT (PPA)"
      ],
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      title: "Bank Loan",
      description: "Simplified financial support",
      points: [
        "Easy bank loans for solar plant setup",
        "Loan processing typically takes 60 days",
        "Comprehensive financial guidance"
      ],
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H20.5a9.003 9.003 0 00-7-7v7h7z" />
        </svg>
      ),
      title: "Plant Installation",
      description: "Professional solar plant setup",
      points: [
        "Installation takes up to 3 months",
        "Requires available water and electricity source",
        "Expert technical implementation"
      ],
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-green-700 mt-12 mb-12 uppercase tracking-tight"
      >
        KUSUM YOJANA (A)
      </motion.h1>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {sections.map((section, index) => (
          <motion.div 
            key={section.title}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            <div className="relative h-64 w-full">
              <img 
                src={section.image} 
                alt={section.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-green-700 opacity-30"></div>
            </div>
            
            <div className="p-6">
              {section.icon}
              <h2 className="text-2xl font-bold text-center text-green-800 mb-4">
                {section.title}
              </h2>
              <p className="text-center text-gray-600 mb-4">
                {section.description}
              </p>
              <ul className="text-left list-disc list-inside text-gray-700 space-y-2">
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="pl-2">{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default KusumYojana;