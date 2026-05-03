import { motion } from 'framer-motion';

export function Scene1() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#F7F5F0]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-[80vw]">
        <motion.div
          className="absolute top-0 left-0 w-2 h-full bg-[#D97706]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'top' }}
        />
        <h1 className="text-[6vw] font-display font-medium text-[#1A1814] leading-[1.1] tracking-tight pl-8">
          {'Your clients are already Googling the neighborhood.'.split(' ').map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-4"
              initial={{ opacity: 0, y: 40, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25, delay: i * 0.1 }}
              style={{ display: 'inline-block' }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </div>
    </motion.div>
  );
}
