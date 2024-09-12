import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            Awesome Product
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#" className="text-white hover:text-blue-200 px-3 py-2">Home</a>
            <a href="#" className="text-white hover:text-blue-200 px-3 py-2">Features</a>
            <a href="#" className="text-white hover:text-blue-200 px-3 py-2">Pricing</a>
            <a href="#" className="text-white hover:text-blue-200 px-3 py-2">Contact</a>
          </motion.div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-2 text-blue-800"
          >
            Welcome to Awesome Product
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl mb-8 text-gray-600"
          >
            Solve your problems with our amazing solution
          </motion.h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-blue-400"
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-8"
        >
          Features
        </motion.h2>
        <div className="flex flex-wrap">
          {[
            { title: "Easy to Use", description: "Our product is designed with user experience in mind, making it incredibly easy to use." },
            { title: "Powerful Features", description: "Packed with powerful features to help you achieve your goals faster and more efficiently." },
            { title: "24/7 Support", description: "Our dedicated support team is always ready to help you with any questions or issues." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full md:w-1/3 px-4 mb-8"
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              © 2023 Awesome Product. All rights reserved.
            </div>
            <div>
              <a href="#" className="text-white hover:text-blue-200 px-3 py-2">Privacy Policy</a>
              <a href="#" className="text-white hover:text-blue-200 px-3 py-2">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
