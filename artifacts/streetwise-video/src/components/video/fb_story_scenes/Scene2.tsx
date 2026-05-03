import { motion } from 'framer-motion';
import iconPng from "@assets/streetwise-icon-1024-transparent.png";

export function Scene2() {
  const cards = [
    '🏫 Schools 9/10', 
    '🚶 Walk Score 87', 
    '🍕 Dining 4.8★', 
    '📈 +8% Market', 
    '💬 "Love this area" Reddit'
  ];

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center overflow-hidden bg-[#F7F5F0]"
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative z-10 w-[85vw] h-[80vh] mt-[10vh] flex flex-col items-center">
        <motion.img 
          src={iconPng}
          className="w-24 h-24 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />

        <div className="flex flex-col gap-6 w-full">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-xl rounded-2xl px-6 py-5 text-[5vw] font-bold text-[#1A1814] border border-[#EAE6DF] w-full text-center"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.6 + i * 0.3 }}
            >
              {card}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
