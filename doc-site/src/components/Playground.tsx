import { useState } from 'react';
import { useMediaQuery } from '../hooks/use-media-query';

export default function Playground() {
  const [classes, setClasses] = useState('text-fluid-heading/150 text-crimson uppercase');
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className="flex flex-col h-full justify-center relative w-[150svw]">
      <h2 className="text-fluid-subheading mb-12 uppercase tracking-widest text-crimson font-sans font-bold">
        02. Playground
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[60vh] min-h-[400px]">
        <div className="brutalist-card bg-charcoal p-6 flex flex-col h-full hover:scale-[1.01] transition-transform">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-mono text-fluid-caption opacity-50 uppercase tracking-widest">
              Text_Term -- v0.0.0
            </span>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 bg-[#FF5F56] rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-[#FFBD2E] rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-[#27C93F] rounded-full"></div>
            </div>
          </div>
          <label htmlFor="playground-input" className="sr-only">
            Tailwind classes for text typography
          </label>
          <textarea
            id="playground-input"
            value={classes}
            onChange={e => setClasses(e.target.value)}
            className="flex-1 bg-transparent text-white font-mono outline-none resize-none text-fluid-body selection:bg-crimson/30"
            spellCheck="false"
          />
          <div
            className={`mt-4 p-3 bg-crimson text-white font-mono text-fluid-caption ${classes.includes('text-fluid') || classes.includes('/') ? 'animate-in slide-in-from-bottom-2 fade-in duration-300' : 'hidden'}`}
          >
            <span className="opacity-70 font-bold">SUGGESTED MODIFIERS:</span> /50, /80, /120, /150,
            /200, /[custom]
          </div>
        </div>
        <div className="brutalist-card p-12 flex items-center justify-center overflow-hidden bg-white relative">
          <div className="absolute top-4 left-4 text-fluid-caption uppercase font-bold opacity-20 tracking-tighter">
            Live Preview
          </div>
          <p className={`${classes} leading-none transition-all duration-300`}>Text Preview</p>
        </div>
      </div>
      {!isMobile && (
        <div className="absolute bottom-10 right-10 font-display font-black text-fluid-heading/150 text-charcoal/[0.03] select-none pointer-events-none">
          01
        </div>
      )}
    </div>
  );
}
