'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left"
    >
      <div
        className="h-full w-full"
        style={{
          background:
            'linear-gradient(90deg, #D6336C 0%, #FF4081 50%, #FFB6C1 100%)',
        }}
      />
    </motion.div>
  );
}
