import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const text = "Anthony José Useche Ruiz";
  const description = "15 años de experiencia en Desarrollo Web. Programador Senior especializado en JavaScript, HTML, CSS y WordPress. Experto en aceleración de tiempos de carga y solución de errores en WordPress.";

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 shadow-xl"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {text.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.03,
                  }}
                  className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              Ver Portafolio
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-50 transition-colors"
            >
              Descargar CV
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;