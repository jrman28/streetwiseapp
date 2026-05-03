import { motion } from 'framer-motion';
import iconPng from "@assets/streetwise-icon-1024-transparent.png";

export function Scene4() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#D97706]"
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-[#F7F5F0] w-[80vw] h-[80vh]">
        <motion.div
          className="w-32 h-32 mb-6 bg-[#F7F5F0] rounded-3xl flex items-center justify-center shadow-2xl"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 250, damping: 20, delay: 0.4 }}
        >
          <img src={iconPng} className="w-24 h-24" alt="Streetwise icon" />
        </motion.div>
        <motion.h2 
          className="text-[10vw] font-display font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Streetwise
        </motion.h2>
        <motion.div
          className="text-[4vw] font-bold tracking-widest uppercase opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          streetwise.app
        </motion.div>
      </div>
    </motion.div>
  );
}
