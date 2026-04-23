import { useRef } from 'react';
import { motion, useTransform, useMotionTemplate } from 'framer-motion';
import Hero from './components/Hero';
import HorizontalSection from './components/HorizontalSection';
import Playground from './components/Playground';
import { useLerpScroll } from './hooks/use-lerp-scroll';
import { useMediaQuery } from './hooks/use-media-query';

const SectionNumber = ({ id, isMobile }: { id: string; isMobile: boolean }) => {
  if (isMobile) return null;
  return (
    <div
      className={`w-[50vw] shrink-0  h-full flex items-center justify-center font-display font-black text-fluid-heading/150 ${id === 'FIN' ? 'text-crimson/30' : 'text-charcoal/10'} select-none pointer-events-none`}
    >
      {id}
    </div>
  );
};

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

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
      width: 150,
      content: (
        <div className="flex w-max h-full items-center">
          <div className="w-[75vw] h-full flex flex-col justify-center p-12 md:p-24 relative overflow-hidden">
            <span className="font-sans font-black text-crimson text-fluid-caption tracking-[0.6em] uppercase mb-8 block">
              THE EXHIBITION
            </span>
            <h2 className="text-fluid-heading/70 leading-[0.75] font-display font-black text-charcoal tracking-[-0.08em] uppercase mb-12">
              Scales
            </h2>
            <div className="flex flex-col gap-8 max-w-xl text-charcoal/80">
              <div className="border-l-4 border-charcoal pl-6">
                <span className="text-fluid-caption font-bold opacity-30 tracking-[0.2em] block mb-2 uppercase">
                  /50 MODIFIER
                </span>
                <p className="text-fluid-body font-display font-medium">
                  Text scaling at 50% intensity. Balanced for dense UI grids.
                </p>
              </div>
              <div className="border-l-4 border-charcoal pl-6">
                <span className="text-fluid-caption font-bold opacity-30 tracking-[0.2em] block mb-2 uppercase">
                  Default Curve
                </span>
                <p className="text-fluid-body font-display font-medium">
                  The standard text curve. Optimal for architectural typography.
                </p>
              </div>
            </div>
          </div>
          <SectionNumber id="01" isMobile={isMobile} />
        </div>
      ),
    },
    {
      id: '02',
      label: 'PLAYGROUND',
      color: 'bg-[#F7F3ED]',
      width: 170,
      content: (
        <div className="flex w-max h-full items-center">
          <div className="w-[75svw]">
            <Playground />
          </div>
          <SectionNumber id="02" isMobile={isMobile} />
        </div>
      ),
    },
    {
      id: '03',
      label: 'REGISTRY',
      color: 'bg-warm-white',
      width: 85,
      content: (
        <div className="flex w-max h-full items-center">
          <div className="w-[35svw] h-full flex flex-col items-center justify-center text-center">
            <h3 className="text-fluid-subheading font-display font-black mb-12 text-charcoal uppercase tracking-tighter">
              Ready to <span className="text-crimson italic">deploy?</span>
            </h3>
            <div
              className="brutalist-card p-10 md:p-14 bg-charcoal text-white inline-block relative group cursor-pointer overflow-hidden transition-all active:scale-95"
              onClick={() => navigator.clipboard.writeText('npm install text-wind')}
            >
              <pre className="font-mono text-fluid-subheading relative z-10">
                npm install text-wind
              </pre>
              <div className="absolute inset-0 bg-crimson translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </div>
          </div>
          <SectionNumber id="03" isMobile={isMobile} />
        </div>
      ),
    },
    {
      id: '04',
      label: 'DEVELOPER',
      color: 'bg-white',
      width: 80,
      content: (
        <div className="flex w-max h-full items-center">
          <div className="w-[30vw] h-full flex flex-col justify-center px-24">
            <h3 className="text-fluid-subheading/120 font-display font-black text-charcoal leading-[0.8] uppercase mb-8">
              SARTORIAL <span className="text-crimson">CODE.</span>
            </h3>
            <p className="font-sans text-fluid-body leading-relaxed text-charcoal/70 max-w-md">
              Textwind is the result of thousands of hours spent perfecting architectural type
              scales.
            </p>
          </div>
          <SectionNumber id="04" isMobile={isMobile} />
        </div>
      ),
    },
    {
      id: 'FIN',
      label: 'THE END',
      color: 'bg-charcoal',
      width: 20,
      content: (
        <div className="flex w-max h-full items-center">
          <div className="w-[20vw] h-full flex flex-col items-center justify-center text-warm-white">
            <h4 className="text-fluid-subheading font-display font-bold max-w-2xl mx-auto leading-tight text-center">
              Designed for those who view typography as{' '}
              <span className="text-crimson italic">architecture.</span>
            </h4>
          </div>
          <SectionNumber id="FIN" isMobile={isMobile} />
        </div>
      ),
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
          <Hero scrollProgress={scrollProgress} />
        </div>
        <div className="flex flex-col">
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
        </div>
      </main>
    );
  }

  return (
    <main
      ref={containerRef}
      className="relative bg-warm-white h-[800vh] overflow-x-hidden selection:bg-crimson selection:text-white scrollbar-hide"
    >
      {/* STICKY STACK CONTAINER */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* HERO CONTENT - Changed to fixed to prevent vertical scroll */}
        <motion.div
          style={{ opacity: heroOpacity, paddingRight: heroPaddingRight }}
          className="fixed inset-0 z-0 pl-4 md:pl-16 lg:pl-20"
        >
          <Hero scrollProgress={scrollProgress} />
        </motion.div>

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
      </div>
    </main>
  );
}

export default App;
