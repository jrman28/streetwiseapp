import { motion } from 'framer-motion';

export function Scene3() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#F7F5F0]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="relative z-10 w-[80vw] text-center">
        <motion.h2 
          className="text-[12vw] font-display font-bold text-[#1A1814] leading-tight"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: [0.9, 1, 1.05, 1], opacity: 1 }}
          transition={{ duration: 3.5, times: [0, 0.2, 0.8, 1] }}
        >
          Know before they ask.
        </motion.h2>
      </div>
    </motion.div>
  );
}
