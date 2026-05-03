import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 4500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center bg-[var(--color-bg-light)] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Abstract Map UI on the right */}
      <motion.div 
        className="absolute right-[-5vw] top-[10vh] w-[60vw] h-[80vh]"
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.img 
          src={`${import.meta.env.BASE_URL}images/map_ui.png`}
          className="w-full h-full object-contain object-right"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
        />
      </motion.div>

      {/* Content on the left */}
      <div className="relative z-10 w-[50vw] pl-[10vw]">
        <h2 
          className="text-[5vw] font-display font-medium text-[var(--color-primary)] leading-[1.1] tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Before your
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              client asks.
            </motion.div>
          </div>
        </h2>
        
        <motion.div
          className="mt-8 text-[1.5vw] text-[var(--color-secondary)] font-body leading-relaxed max-w-[30vw]"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Anticipate questions about schools, walkability, and dining before the showing even begins.
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="absolute left-[8vw] top-[5vh] bottom-[5vh] w-[1px] bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ originY: 0 }}
        />
      </div>
    </motion.div>
  );
}
