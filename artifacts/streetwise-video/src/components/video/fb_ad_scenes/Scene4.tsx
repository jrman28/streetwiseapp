import { motion } from 'framer-motion';

export function Scene4() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#F7F5F0]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-[70vw]">
        <motion.h2 
          className="text-[5vw] font-display font-bold text-[#1A1814] leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Agents using Streetwise close <span className="text-[#D97706]">3x faster</span>.
        </motion.h2>
      </div>
    </motion.div>
  );
}
