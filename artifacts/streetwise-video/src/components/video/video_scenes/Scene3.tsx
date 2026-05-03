import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2000),
      setTimeout(() => setPhase(5), 2500),
      setTimeout(() => setPhase(6), 6500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const items = [
    { id: 1, text: "Schools & Ratings", phase: 2 },
    { id: 2, text: "Dining & Walkability", phase: 3 },
    { id: 3, text: "Market Data", phase: 4 },
    { id: 4, text: "Reddit Sentiment", phase: 5 },
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-[var(--color-bg-muted)] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background charts */}
      <motion.div 
        className="absolute inset-0 opacity-20 mix-blend-multiply"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.img 
          src={`${import.meta.env.BASE_URL}images/charts_ui.png`}
          className="w-full h-full object-cover"
          animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
          transition={{ duration: 15, ease: 'linear', repeat: Infinity }}
        />
      </motion.div>

      <div className="relative z-10 flex w-[80vw] gap-[10vw]">
        {/* Left side: Heading */}
        <div className="w-1/2 flex flex-col justify-center">
          <motion.div
            className="text-[var(--color-accent)] font-body font-semibold tracking-widest uppercase text-[1.2vw] mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            The Full Picture
          </motion.div>
          <h2 
            className="text-[5vw] font-display font-medium text-[var(--color-primary)] leading-[1.1] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                One-page
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                className="italic"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                intelligence.
              </motion.div>
            </div>
          </h2>
        </div>

        {/* Right side: List */}
        <div className="w-1/2 flex flex-col justify-center gap-6">
          {items.map((item, index) => (
            <motion.div 
              key={item.id}
              className="flex items-center gap-6"
              initial={{ opacity: 0, x: 30 }}
              animate={phase >= item.phase ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
              <div className="text-[2vw] font-body text-[var(--color-primary)]">{item.text}</div>
            </motion.div>
          ))}
          
          <motion.div
            className="absolute left-[calc(50%+4.5vw)] top-1/2 -translate-y-1/2 w-[1px] h-[60%] bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={phase >= 2 ? { scaleY: 1, opacity: 0.3 } : { scaleY: 0, opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}
