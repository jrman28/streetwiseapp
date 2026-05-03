import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1800),
      setTimeout(() => setPhase(4), 4500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-[var(--color-bg-light)] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Abstract timer/loading circle */}
        <motion.div 
          className="relative w-32 h-32 mb-12 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <motion.svg className="absolute inset-0 w-full h-full text-[var(--color-accent)]" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="301.59"
              initial={{ strokeDashoffset: 301.59 }}
              animate={phase >= 2 ? { strokeDashoffset: 0 } : { strokeDashoffset: 301.59 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="origin-center -rotate-90"
            />
          </motion.svg>
          <motion.div 
            className="text-[2vw] font-mono text-[var(--color-accent)] font-semibold"
            initial={{ opacity: 0 }}
            animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            60s
          </motion.div>
        </motion.div>

        <h2 
          className="text-[6vw] font-display font-medium text-[var(--color-primary)] leading-[1.1] tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: '100%' }}
              animate={phase >= 2 ? { y: 0 } : { y: '100%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              All in under
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              className="text-[var(--color-accent)] italic"
              initial={{ y: '100%' }}
              animate={phase >= 2 ? { y: 0 } : { y: '100%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              60 seconds.
            </motion.div>
          </div>
        </h2>
        
        <motion.p
          className="mt-6 text-[1.5vw] text-[var(--color-secondary)] font-body max-w-[40vw]"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Enter a zip code. Get a comprehensive, client-ready PDF report instantly.
        </motion.p>
      </div>
    </motion.div>
  );
}
