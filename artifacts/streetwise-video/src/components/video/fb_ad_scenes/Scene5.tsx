import { motion } from 'framer-motion';
import iconPng from "@assets/streetwise-icon-1024-transparent.png";

export function Scene5() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#D97706]"
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative z-10 flex flex-col items-center text-center text-[#F7F5F0]">
        <motion.img 
          src={iconPng}
          className="w-40 h-40 mb-8 filter brightness-0 invert"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.h2 
          className="text-[4vw] font-display font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Know the neighborhood before they ask.
        </motion.h2>
        <motion.div
          className="mt-8 text-2xl font-bold tracking-widest uppercase opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          streetwise.app
        </motion.div>
      </div>
    </motion.div>
  );
}
