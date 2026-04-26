import React, { useState } from 'react';
import { motion, useTransform, MotionValue, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../hooks/use-media-query';

interface HorizontalSectionProps {
  id: string;
  label: string;
  children: React.ReactNode;
  color?: string;
  className?: string;
  index: number;
  scrollProgress: MotionValue<number>;
  totalSections: number;
  width: number;
  startProgress: number;
  endProgress: number;
}

export default function HorizontalSection({
  id,
  label,
  children,
  index,
  scrollProgress,
  totalSections,
  width,
  startProgress,
  endProgress,
  color = 'bg-warm-white',
  className = '',
}: HorizontalSectionProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isOpen, setIsOpen] = useState(false);

  // Range for desktop flight
  const start = startProgress;
  const end = endProgress;

  // Desktop Positions
  const stackOffset = (totalSections - index) * 56;
  const stickyLeftPx = index * 40;

  const rightStackX_px = `calc(100vw + ${-stackOffset}px)`;
  const leftStickX_px = `calc(0vw + ${stickyLeftPx}px)`;

  // Flight ranges - We use a fixed percentage of the section's duration for the slide-in
  // To match previous behavior (0.12 / 0.2 = 60%), we'll use 60% of the allocated space
  const flightInEnd = start + (end - start) * 0.6;
  const flightOutStart = end;

  const sliceX = useTransform(
    scrollProgress,
    [start, flightInEnd],
    [rightStackX_px, leftStickX_px],
    { clamp: true }
  );

  // Ribbon width collapse: 56px (right stack) -> 80px (active) -> 40px (left stack)
  const currentRibbonWidth = useTransform(
    scrollProgress,
    [0, start, flightInEnd, flightOutStart, flightOutStart + (end - start) * 0.05, 1],
    [56, 56, 80, 80, 40, 40]
  );

  // Per-section progress bar (0 to 1 while content is active)
  const isCurrentlyActive = useTransform(
    scrollProgress,
    [start, flightInEnd, flightOutStart, flightOutStart + (end - start) * 0.05],
    [0, 1, 1, 0]
  );

  const sectionProgress = useTransform(scrollProgress, [flightInEnd, flightOutStart], [0, 1], {
    clamp: true,
  });

  // Calculate internal scroll distance: contentWidth - viewportWidth
  // If width is 100 (meaning 100vw), distance is 0.
  // If width is 150, distance is 50vw.
  const extraWidthVw = Math.max(0, width - 100);
  const internalX = useTransform(
    scrollProgress,
    [flightInEnd, flightOutStart],
    ['0vw', `-${extraWidthVw}vw`],
    { clamp: true }
  );

  if (isMobile) {
    return (
      <div className={`w-full border-b border-charcoal/10 ${color} ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-20 flex items-center justify-between px-6 focus:outline-none"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-crimson font-bold">§{id}</span>
            <span className="font-display font-black tracking-widest uppercase text-fluid-caption">
              {label}
            </span>
          </div>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="text-crimson font-black text-xl"
          >
            {isOpen ? '−' : '+'}
          </motion.span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="p-6 pb-12">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <section className="absolute top-0 right-0 left-12 bottom-0 h-screen w-svw overflow-hidden pointer-events-none">
      <motion.div
        style={{ x: sliceX, zIndex: 10 + index }}
        className="absolute inset-0 h-full flex pointer-events-none"
      >
        {/* Ribbon - Anchors to the moving section wrapper */}
        <motion.div
          style={{ width: currentRibbonWidth }}
          className={`shrink-0 h-full border-l border-r border-charcoal/10 flex flex-col items-center justify-start py-12 ${color} bg-opacity-10  backdrop-blur-sm shadow-xl pointer-events-auto relative overflow-hidden transition-all duration-300`}
        >
          {/* Active Indicator (Asterisk) */}
          <motion.div
            style={{ opacity: isCurrentlyActive }}
            className="text-crimson font-black text-4xl mb-16 leading-none"
          >
            *
          </motion.div>

          <div
            className={`rotate-90 origin-center whitespace-nowrap font-bold tracking-[0.4em] uppercase text-fluid-caption opacity-80 ${id === 'FIN' ? 'text-crimson' : ''}`}
          >
            {label}
          </div>

          <div className="mt-auto font-display text-fluid-subheading/40 font-black text-crimson mb-4">
            §{id}
          </div>
        </motion.div>

        {/* Content Area - Moves with the section, but its inner layer scrolls more */}
        <motion.div
          className={`shrink-0 h-full ${color} bg-opacity-100 w-svw py-12 px-24 flex items-center pointer-events-auto border-l border-charcoal/5 relative overflow-hidden`}
        >
          <motion.div style={{ x: internalX }} className="flex h-full w-max">
            {children}
          </motion.div>

          {/* Section Progress Bar (Bottom) */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-charcoal/5 overflow-hidden">
            <motion.div
              style={{ scaleX: sectionProgress, transformOrigin: 'left' }}
              className="h-full bg-crimson"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
