import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import iconPng from "@assets/streetwise-icon-1024-transparent.png";

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1000), // pin drop
      setTimeout(() => setPhase(2), 2000), // cards fly in
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const cards = ['🏫 Schools 9/10', '🚶 Walk Score 87', '🍕 Dining 4.8★', '📈 +8% Market', '💬 "Love this area"'];

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#F7F5F0]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <img src={`${import.meta.env.BASE_URL}images/fb_ad_bg.png`} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply" />
      
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <motion.div
          className="absolute text-5xl font-display font-bold text-[#1A1814]"
          initial={{ opacity: 1, y: 0 }}
          animate={phase >= 1 ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Enter one zip code...
        </motion.div>

        <motion.img 
          src={iconPng}
          className="w-32 h-32 absolute"
          initial={{ opacity: 0, y: -200, scale: 0.5 }}
          animate={phase >= 1 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -200, scale: 0.5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        />

        {cards.map((card, i) => {
          const angle = (i / cards.length) * Math.PI * 2;
          const radius = 250;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={i}
              className="absolute bg-white shadow-xl rounded-full px-6 py-3 text-xl font-bold text-[#1A1814] border border-[#EAE6DF]"
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={phase >= 2 ? { opacity: 1, scale: 1, x, y } : { opacity: 0, scale: 0, x: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.15 }}
            >
              {card}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
