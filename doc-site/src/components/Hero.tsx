import { motion, useTransform, MotionValue } from 'framer-motion';
import { useState, useEffect } from 'react';

const lines = ['HOW DO DESIGNERS', 'DEFINE THE RIGID', 'PRECISION OF THE', 'ARCHITECTURAL GRID?'];

export default function Hero({
  scrollProgress,
  setAnimationComplete,
}: {
  scrollProgress: MotionValue<number>;
  setAnimationComplete: (value: boolean) => void;
}) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1200);
    const t2 = setTimeout(() => setPhase(2), 2800);
    const t3 = setTimeout(() => setPhase(3), 4200);
    const t4 = setTimeout(() => setAnimationComplete(true), 4300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  // SCROLL-LINKED TRANSFORMS
  const globalOpacity = useTransform(scrollProgress, [0.08, 0.2], [1, 0.2]);
  const titleScale = useTransform(scrollProgress, [0, 0.08], [0.93, 0.43]);
  const phraseOpacity = useTransform(scrollProgress, [0.05, 0.12], [1, 0.2]);

  return (
    <motion.div
      initial={{ scale: 3.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
      className="relative w-full h-svh flex flex-col bg-warm-white  select-none"
    >
      {/* 0. ABSOLUTE METADATA (Top Right - Matching the small paragraph in image) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={phase >= 2 ? { opacity: 0.8, y: 0 } : { opacity: 0, y: -20 }}
        className="absolute top-12 right-24 text-left max-w-sm font-sans text-[11px] leading-relaxed tracking-tight text-charcoal z-20 pointer-events-none"
      >
        <div className="flex flex-col gap-0 border-l border-crimson pl-4">
          <p>
            <span className="text-crimson font-bold">Textwind</span> is the architectural foundation
            for modern web typography. By eliminating the friction of manual breakpoints, it enables
            a mathematical harmony between viewport and scale, ensuring your design vision remains
            uncompromised on every screen.
          </p>
        </div>
      </motion.div>

      {/* 1. THE PHRASE (Centered-Left) */}
      <motion.div
        initial={{ scale: 1, y: '35vh', left: '1%', x: '0%' }}
        animate={
          phase >= 2
            ? { scale: 0.25, y: '45vh', left: '85%', x: '-50%' }
            : { scale: 1, y: '30vh', left: '1%', x: '0%' }
        }
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: 'left center', opacity: phraseOpacity }}
        className="absolute z-10 w-max flex flex-col items-start pointer-events-none"
      >
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="flex  whitespace-nowrap">
            {line.split(' ').map((word, wordIndex) => (
              <div key={wordIndex} className="inline-flex mr-[3em] tracking-tighter">
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: lineIndex * 0.1 + wordIndex * 0.05 + charIndex * 0.01,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`inline-block font-display leading-[0.85]  font-black uppercase ${
                      word === 'DESIGNERS' ? 'text-crimson' : 'text-charcoal'
                    } text-[6vw] md:text-[7vw]`}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </motion.div>

      {/* 2. THE MAIN TITLE (TEXTWIND - Massive edge-to-edge text) */}
      <motion.div
        style={{
          opacity: globalOpacity,
          scale: titleScale,
          transformOrigin: 'left bottom',
        }}
        className="absolute bottom-[-2vh] left-0 w-full flex justify-between pointer-events-none z-0 "
      >
        <div className="flex w-full justify-between items-end overflow-hidden pt-12 pb-4">
          {'TEXTWIND'.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: '130%' }}
              animate={phase >= 2 ? { y: 0 } : { y: '130%' }}
              transition={{
                delay: index * 0.05,
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[10vw] leading-[0.7] font-display font-black text-charcoal tracking-[-0.02em] uppercase inline-block select-none"
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Background Section Index Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={phase >= 3 ? { opacity: 0.1 } : { opacity: 0 }}
        className="absolute bottom-12 right-12 font-mono font-bold text-xs pointer-events-none z-[-1] flex flex-col items-end"
      >
        <span className="text-crimson">§00</span>
        <span className="tracking-[0.5em] text-[8px] opacity-50 mt-1">CORE_INIT</span>
      </motion.div>
    </motion.div>
  );
}
