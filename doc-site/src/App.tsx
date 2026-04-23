import { useRef, useState } from 'react';
import { motion, useTransform, useMotionTemplate } from 'framer-motion';
import Hero from './components/Hero';
import HorizontalSection from './components/HorizontalSection';

import { useLerpScroll } from './hooks/use-lerp-scroll';
import { useMediaQuery } from './hooks/use-media-query';
import FirstSection from './components/SECTIONS/First';
import SecondSection from './components/SECTIONS/SecondSection';
import ThirdSection from './components/SECTIONS/ThirdSection';
import FourthSection from './components/SECTIONS/FourthSection';
import FinSection from './components/SECTIONS/FinSection';
import SetupSection from './components/SECTIONS/SetupSection';
import ReferenceSection from './components/SECTIONS/ReferenceSection';
import Sidebar from './components/ui/Sidebar';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [animationComplete, setAnimationComplete] = useState(false);
  // Custom smoothed scroll progress (0-1)
  const scrollProgress = useLerpScroll();

  // Hero stays visible, its own text will fade/shrink based on scrollProgress
  const heroOpacity = useTransform(scrollProgress, [0, 0.9], [1, 1]);

  // Sync the hero padding to the first 0.08 scroll progress (part of the 0 to 0.12 flight time)
  // so the padding increases matching the section slide-in, keeping text centered in visible space,
  // then stops at 0.08, while section continues sliding and overlaps.
  const heroPrVw = useTransform(scrollProgress, [0, 0.08], [15, 60]);
  const heroPaddingRight = useMotionTemplate`${heroPrVw}vw`;

  const sections = [
    {
      id: '01',
      label: 'SCALES',
      color: 'bg-white',
      width: 125,
      content: <FirstSection isMobile={isMobile} />,
    },
    {
      id: '02',
      label: 'PLAYGROUND',
      color: 'bg-[#F7F3ED]',
      width: 135,
      content: <SecondSection isMobile={isMobile} />,
    },
    {
      id: '03',
      label: 'SETUP',
      color: 'bg-white',
      width: 230,
      content: <SetupSection isMobile={isMobile} />,
    },
    {
      id: '04',
      label: 'REFERENCE',
      color: 'bg-[#F7F3ED]',
      width: 190,
      content: <ReferenceSection isMobile={isMobile} />,
    },
    {
      id: '05',
      label: 'REGISTRY',
      color: 'bg-warm-white',
      width: 50,
      content: <ThirdSection isMobile={isMobile} />,
    },
    {
      id: '06',
      label: 'DEVELOPER',
      color: 'bg-white',
      width: 80,
      content: <FourthSection isMobile={isMobile} />,
    },
    {
      id: 'FIN',
      label: 'THE END',
      color: 'bg-charcoal',
      width: 20,
      content: <FinSection isMobile={isMobile} />,
    },
  ];

  // Calculate proportional scroll ranges
  const totalWeight = sections.reduce((acc, s) => acc + s.width, 0);
  let currentStart = 0;
  const sectionsWithRange = sections.map(section => {
    const sectionWeight = section.width / totalWeight;
    const range = {
      start: currentStart,
      end: currentStart + sectionWeight,
    };
    currentStart += sectionWeight;
    return { ...section, range };
  });

  if (isMobile) {
    return (
      <main className="bg-warm-white min-h-screen pb-20">
        <div className="p-8 pb-16">
          <Hero scrollProgress={scrollProgress} setAnimationComplete={setAnimationComplete} />
        </div>
        <motion.div animate={{ opacity: animationComplete ? 1 : 0 }} className="flex flex-col">
          {sectionsWithRange.map((section, i) => (
            <HorizontalSection
              key={section.id}
              {...section}
              index={i}
              width={section.width}
              scrollProgress={scrollProgress}
              totalSections={sections.length}
              startProgress={section.range.start}
              endProgress={section.range.end}
            >
              {section.content}
            </HorizontalSection>
          ))}
        </motion.div>
      </main>
    );
  }

  return (
    <main
      ref={containerRef}
      className={`relative bg-warm-white ${animationComplete ? 'h-[800vh]' : 'h-screen overflow-hidden'} overflow-x-hidden selection:bg-crimson selection:text-white scrollbar-hide`}
    >
      <Sidebar />
      {/* STICKY STACK CONTAINER */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* HERO CONTENT - Changed to fixed to prevent vertical scroll */}
        <motion.div
          style={{ opacity: heroOpacity, paddingRight: heroPaddingRight }}
          className="fixed inset-0 z-0 pl-4 md:pl-16 lg:pl-20"
        >
          <Hero scrollProgress={scrollProgress} setAnimationComplete={setAnimationComplete} />
        </motion.div>
        <motion.span
          initial={{ x: 500 }}
          animate={{ x: animationComplete ? 0 : 500 }}
          transition={{ stiffness: 100, damping: 25 }}
          className="fixed h-screen bg-red-500 "
        >
          {/* DYNAMIC SECTIONS */}
          {sectionsWithRange.map((section, i) => (
            <HorizontalSection
              key={section.id}
              {...section}
              index={i}
              scrollProgress={scrollProgress}
              totalSections={sectionsWithRange.length}
              startProgress={section.range.start}
              endProgress={section.range.end}
            >
              {section.content}
            </HorizontalSection>
          ))}
        </motion.span>
      </div>
    </main>
  );
}

export default App;
