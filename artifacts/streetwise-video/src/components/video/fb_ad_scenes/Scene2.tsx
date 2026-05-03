import { motion } from 'framer-motion';

export function Scene2() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#F7F5F0]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="relative z-10 flex flex-col items-center text-center w-full h-full justify-center">
        {['Yelp', 'Zillow', 'Reddit', 'WalkScore'].map((tab, i) => (
          <motion.div
            key={i}
            className="absolute bg-white shadow-2xl rounded-xl p-8 text-2xl font-bold text-[#1A1814] border border-[#EAE6DF]"
            initial={{ opacity: 0, scale: 0.5, x: 0, y: 0, rotate: 0 }}
            animate={{ 
              opacity: [0, 1, 1], 
              scale: [0.5, 1.2, 1], 
              x: [(i%2===0?-300:300), (i%2===0?-100:100), (i%2===0?-200:200) + Math.random()*50], 
              y: [(i<2?-200:200), (i<2?-100:100), (i<2?-150:150) + Math.random()*50],
              rotate: [0, (i%2===0?-10:10), (i%2===0?-5:5)]
            }}
            transition={{ duration: 2, delay: i * 0.4, type: 'spring', bounce: 0.5 }}
          >
            {tab}
          </motion.div>
        ))}
        <motion.h2 
          className="text-[4vw] font-display text-[#1A1814] z-20 bg-[#F7F5F0]/90 px-8 py-4 rounded-full mt-32 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          Stop opening tabs.
        </motion.h2>
      </div>
    </motion.div>
  );
}
