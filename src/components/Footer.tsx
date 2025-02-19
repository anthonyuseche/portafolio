import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, MessageCircle, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="mb-8 bg-gradient-to-r from-purple-600 to-blue-500 p-3 rounded-full text-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <ArrowUp size={24} />
          </motion.button>

          <div className="flex gap-6 mb-8">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            
            <motion.a
              href="https://wa.me/yourphone"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              <MessageCircle size={24} />
            </motion.a>
          </div>

          <p className="text-gray-600 text-center">
            © 2023 Anthony José Useche Ruiz. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;