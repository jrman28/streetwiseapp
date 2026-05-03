import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import iconPng from "@assets/streetwise-icon-1024-transparent.png";

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 1500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#D97706]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <img src={`${import.meta.env.BASE_URL}images/fb_story_bg.png`} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm mix-blend-multiply" />
      
      <div className="relative z-10 w-[80vw] h-[80vh] flex flex-col items-center justify-center">
        {phase < 2 && (
          <motion.div 
            className="text-[20vw] font-display font-bold text-white text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            78901
          </motion.div>
        )}
        
        {phase >= 2 && (
          <motion.img 
            src={iconPng}
            className="w-48 h-48"
            initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        )}
      </div>
    </motion.div>
  );
}
