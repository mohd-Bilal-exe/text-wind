import { useRef } from 'react';
import { motion, useTransform, useMotionTemplate } from 'framer-motion';
import Hero from './components/Hero';
import HorizontalSection from './components/HorizontalSection';
import Playground from './components/Playground';
import { useLerpScroll } from './hooks/use-lerp-scroll';
import { useMediaQuery } from './hooks/use-media-query';

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
      content: (
        <div className="h-full flex flex-col justify-center p-12 md:p-0 relative overflow-hidden">
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
          {!isMobile && (
            <div className="absolute bottom-10 right-10 font-display font-black text-fluid-heading/150 text-charcoal/[0.03] select-none pointer-events-none">
              01
            </div>
          )}
        </div>
      ),
    },
    { id: '02', label: 'PLAYGROUND', color: 'bg-[#F7F3ED]', content: <Playground /> },
    {
      id: '03',
      label: 'REGISTRY',
      color: 'bg-warm-white',
      content: (
        <div className="h-full flex flex-col items-center justify-center text-center">
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
      ),
    },
    {
      id: '04',
      label: 'DEVELOPER',
      color: 'bg-white',
      content: (
        <div className="h-full flex flex-col justify-center">
          <h3 className="text-fluid-subheading/120 font-display font-black text-charcoal leading-[0.8] uppercase mb-8">
            SARTORIAL <span className="text-crimson">CODE.</span>
          </h3>
          <p className="font-sans text-fluid-body leading-relaxed text-charcoal/70 max-w-md">
            Textwind is the result of thousands of hours spent perfecting architectural type scales.
          </p>
        </div>
      ),
    },
    {
      id: 'FIN',
      label: 'THE END',
      color: 'bg-charcoal',
      content: (
        <div className="h-full flex flex-col items-center justify-center text-warm-white">
          <h4 className="text-fluid-subheading font-display font-bold max-w-2xl mx-auto leading-tight text-center">
            Designed for those who view typography as{' '}
            <span className="text-crimson italic">architecture.</span>
          </h4>
        </div>
      ),
    },
  ];

  if (isMobile) {
    return (
      <main className="bg-warm-white min-h-screen pb-20">
        <div className="p-8 pb-16">
          <Hero scrollProgress={scrollProgress} />
        </div>
        <div className="flex flex-col">
          {sections.map((section, i) => (
            <HorizontalSection
              key={section.id}
              {...section}
              index={i}
              scrollProgress={scrollProgress}
              totalSections={sections.length}
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
      {/* PERSISTENT MAIN SIDEBAR (Left) 
      <div className="fixed top-0 left-0 w-20 h-full border-r border-charcoal/10 flex flex-col justify-between items-center py-8 z-[2000] bg-warm-white/95 backdrop-blur-md">
        <div className="flex flex-col gap-1.5 cursor-pointer pointer-events-auto group p-4 border border-transparent hover:border-charcoal/10 transition-all">
          <div className="w-6 h-0.5 bg-charcoal group-hover:w-8 transition-all"></div>
          <div className="w-8 h-0.5 bg-charcoal group-hover:w-6 transition-all"></div>
        </div>
        <div className="rotate-[-90deg] origin-center whitespace-nowrap font-bold tracking-widest uppercase text-fluid-caption opacity-30 translate-y-[-100%]">
          Fluidwind // 2026
        </div>
        <div className="text-crimson font-bold text-3xl pointer-events-auto cursor-help animate-pulse">
          ✸
        </div>
      </div>*/}

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
        {sections.map((section, i) => (
          <HorizontalSection
            key={section.id}
            {...section}
            index={i}
            scrollProgress={scrollProgress}
            totalSections={sections.length}
          >
            {section.content}
          </HorizontalSection>
        ))}
      </div>
    </main>
  );
}

export default App;
