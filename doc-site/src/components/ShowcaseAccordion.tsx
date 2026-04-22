import { motion, useTransform, useSpring, MotionValue } from 'framer-motion'
import Playground from './Playground'

const sections = [
  {
    id: '01',
    title: 'Scales',
    subtitle: 'THE EXHIBITION',
    label: 'SCALES',
    color: 'bg-white',
    content: (
      <div className="flex flex-col gap-8 max-w-xl text-charcoal/80">
        <div className="border-l-4 border-charcoal pl-6 group">
          <span className="text-text-caption font-bold opacity-30 font-sans tracking-[0.2em] block mb-2 uppercase">/50 MODIFIER</span>
          <p className="text-text-body leading-tight font-display font-medium">Text scaling at 50% intensity. Balanced for dense UI grids.</p>
        </div>
        <div className="border-l-4 border-charcoal pl-6 group">
          <span className="text-text-caption font-bold opacity-30 font-sans tracking-[0.2em] block mb-2 uppercase">Default Curve (100%)</span>
          <p className="text-text-body leading-tight font-display font-medium">The standard text curve. Optimal for architectural typography.</p>
        </div>
        <div className="border-l-4 border-charcoal pl-6 group">
          <span className="text-text-caption font-bold opacity-30 font-sans tracking-[0.2em] block mb-2 uppercase">/200 MODIFIER</span>
          <p className="text-text-body leading-tight font-display font-medium">Massive 200% scaling. Designed for high-impact display moments.</p>
        </div>
      </div>
    )
  },
  {
    id: '02',
    title: 'Play',
    subtitle: 'THE WORKSHOP',
    label: 'PLAYGROUND',
    color: 'bg-[#F7F3ED]',
    content: <Playground />
  },
  {
    id: '03',
    title: 'Install',
    subtitle: 'THE CORE',
    label: 'REGISTRY',
    color: 'bg-warm-white',
    content: (
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-text-subheading font-display font-black mb-8 text-charcoal uppercase tracking-tighter">Ready to <span className="text-crimson italic">deploy?</span></h3>
        <div 
          className="brutalist-card p-10 bg-charcoal text-white inline-block relative group cursor-pointer overflow-hidden"
          onClick={() => navigator.clipboard.writeText('npm install text-wind')}
        >
          <motion.div whileHover={{ y: -5 }} className="relative z-10">
            <pre className="font-mono text-text-body md:text-text-subheading">npm install text-wind</pre>
          </motion.div>
          <div className="absolute inset-0 bg-crimson translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </div>
        <p className="mt-6 font-sans font-bold text-charcoal opacity-40 uppercase tracking-widest text-text-caption">Click to copy command</p>
      </div>
    )
  },
  {
    id: '04',
    title: 'About',
    subtitle: 'THE CREATOR',
    label: 'DEVELOPER',
    color: 'bg-white',
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h3 className="text-text-subheading/120 font-display font-black text-charcoal leading-[0.8] uppercase">
            SARTORIAL <br/> 
            <span className="text-crimson">CODE.</span>
          </h3>
          <p className="font-sans text-text-body leading-relaxed text-charcoal/70 max-w-sm">
            Textwind is the result of thousands of hours spent perfecting architectural type scales. Built for developers who refuse to compromise on visual precision.
          </p>
          <div className="flex gap-5">
            <a href="#" className="font-display font-bold text-text-caption text-charcoal hover:text-crimson transition-colors underline underline-offset-4 tracking-widest">GITHUB</a>
            <a href="#" className="font-display font-bold text-text-caption text-charcoal hover:text-crimson transition-colors underline underline-offset-4 tracking-widest">TWITTER</a>
          </div>
        </div>
        <div className="aspect-square bg-charcoal relative group overflow-hidden grayscale max-w-sm">
           <div className="absolute inset-0 flex items-center justify-center text-warm-white font-display font-black text-text-heading/150 opacity-5">
             MB
           </div>
        </div>
      </div>
    )
  }
]

export default function ShowcaseAccordion({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  
  // Create horizontal slide maps for each section
  // range: [start, end]
  // x: [100%, 0]
  const x1 = useTransform(scrollProgress, [0.2, 0.4], ["100%", "0%"])
  const x2 = useTransform(scrollProgress, [0.4, 0.6], ["100%", "0%"])
  const x3 = useTransform(scrollProgress, [0.6, 0.8], ["100%", "0%"])
  const x4 = useTransform(scrollProgress, [0.8, 1.0], ["100%", "0%"])

  // Smooth springs
  const springConfig = { stiffness: 80, damping: 25, restDelta: 0.001 }
  const sx1 = useSpring(x1, springConfig)
  const sx2 = useSpring(x2, springConfig)
  const sx3 = useSpring(x3, springConfig)
  const sx4 = useSpring(x4, springConfig)

  const slides = [
    { x: sx1, color: 'bg-white', content: sections[0] },
    { x: sx2, color: 'bg-[#F7F3ED]', content: sections[1] },
    { x: sx3, color: 'bg-warm-white', content: sections[2] },
    { x: sx4, color: 'bg-white', content: sections[3] },
  ]

  return (
    <div className="relative w-full h-screen bg-warm-white overflow-hidden border-t-2 border-charcoal">
      
      <motion.div 
        style={{ opacity: useTransform(scrollProgress, [0.2, 0.9], [0.03, 0.01]) }}
        className="absolute inset-0 flex items-center justify-center font-display font-black text-fluid-heading/200 text-charcoal pointer-events-none select-none z-0 tracking-tighter"
      >
        TEXTWIND
      </motion.div>

      {/* Pages Container */}
      <div className="absolute inset-0 flex">
        {slides.map((slide, idx) => (
          <motion.div
            key={idx}
            style={{ 
              x: slide.x,
              zIndex: 10 + idx
            }}
            className={`absolute inset-0 ${slide.color} border-l-2 border-charcoal/30 flex shadow-[-20px_0_40px_rgba(0,0,0,0.05)]`}
          >
            {/* Content Area */}
            <div className="flex-1 p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
               <span className="font-sans font-black text-crimson text-fluid-caption tracking-[0.6em] uppercase mb-4 block">
                 {slide.content.subtitle}
               </span>
               
               <h2 className="text-fluid-heading leading-[0.75] font-display font-black text-charcoal tracking-[-0.08em] uppercase mb-12">
                 {slide.content.title}
               </h2>

               <div className="w-full relative z-10">
                 {slide.content.content}
               </div>

               {/* Large Background ID */}
               <div className="absolute bottom-[-5%] right-[-5%] font-display font-black text-fluid-heading/200 text-charcoal/[0.02] pointer-events-none select-none">
                 {slide.content.id}
               </div>
            </div>

            {/* Ribbon Tab (The "Accordion" Look) */}
            <div className="w-[60px] md:w-[100px] h-full border-l border-charcoal/10 flex flex-col items-center py-12 bg-inherit">
               <div className="rotate-90 origin-center whitespace-nowrap font-bold tracking-[0.4em] uppercase text-fluid-caption mt-12 opacity-40">
                 {slide.content.label}
               </div>
               <div className="mt-auto font-display text-fluid-subheading font-black text-crimson opacity-50">
                 §{slide.content.id}
               </div>
            </div>
          </motion.div>
        ))}
      </div>
      
    </div>
  )
}
