import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { elementAnimations } from '@/lib/video/animations';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 4800),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#1A1A1A]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Video */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: 'linear' }}
      >
        <video 
          src={`${import.meta.env.BASE_URL}videos/neighborhood.mp4`}
          className="w-full h-full object-cover opacity-60"
          autoPlay 
          muted 
          loop 
          playsInline
        />
      </motion.div>
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-[#1A1A1A]/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[80vw]">
        <motion.div
          className="w-16 h-[2px] bg-[var(--color-accent)] mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        
        <h1 
          className="text-[6vw] font-display font-medium text-white leading-[1.1] tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              Know the
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              className="text-[var(--color-accent)] italic"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              neighborhood
            </motion.div>
          </div>
        </h1>
        
        <motion.p
          className="mt-8 text-[1.8vw] text-white/80 font-body font-light tracking-wide uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Streetwise Intelligence
        </motion.p>
      </div>
    </motion.div>
  );
}
