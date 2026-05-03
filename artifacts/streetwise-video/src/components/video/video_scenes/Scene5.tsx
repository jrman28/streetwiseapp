import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 3500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-[#1A1A1A] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/home_interior.jpg`}
          className="w-full h-full object-cover opacity-30"
          alt="Luxury interior"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          className="w-20 h-[2px] bg-[var(--color-accent)] mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.h2 
          className="text-[8vw] font-display font-medium text-white leading-none tracking-tight mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Streetwise
        </motion.h2>
        
        <motion.p
          className="text-[2vw] text-[var(--color-accent)] font-body font-light tracking-wide uppercase"
          initial={{ opacity: 0, letterSpacing: "0em" }}
          animate={phase >= 2 ? { opacity: 1, letterSpacing: "0.2em" } : { opacity: 0, letterSpacing: "0em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Impress your clients
        </motion.p>
      </div>
      
      {/* Subtle particle overlay for depth */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{ y: [0, -50] }}
        transition={{ duration: 5, ease: 'linear' }}
      >
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 2 + 0.5})`
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
