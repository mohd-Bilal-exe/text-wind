import { useState } from 'react';
import SectionNumber from './SectionNumber';
import { useMediaQuery } from '../../hooks/use-media-query';

export default function ThirdSection({ isMobile: isMobileProp = false }: { isMobile?: boolean }) {
  const isMobileHook = useMediaQuery('(max-width: 768px)');
  const isMobile = isMobileProp || isMobileHook;

  if (isMobile) {
    return (
      <div className="flex flex-col w-full h-auto p-12 items-center justify-center text-center">
        <h3 className="text-fluid-subheading font-display font-black mb-12 text-charcoal uppercase tracking-tighter">
          Ready to <span className="text-crimson italic">deploy?</span>
        </h3>
        <CopyCommand command="npm install text-wind" />
      </div>
    );
  }
  return (
    <div className="flex w-max h-full items-center">
      <div className="w-[35svw] h-full flex flex-col items-center justify-center text-center">
        <h3 className="text-fluid-subheading font-display font-black mb-12 text-charcoal uppercase tracking-tighter">
          Ready to <span className="text-crimson italic">deploy?</span>
        </h3>
        <CopyCommand command="npm install text-wind" />
      </div>
      <SectionNumber id="05" isMobile={isMobile} />
    </div>
  );
}
const CopyCommand = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="brutalist-card p-10 md:p-14 bg-charcoal text-white inline-block relative group cursor-pointer overflow-hidden transition-all active:scale-95"
      onClick={handleCopy}
    >
      <pre className="font-mono text-fluid-subheading relative z-10">
        {copied ? 'Copied!' : command}
      </pre>
      <div
        className={`absolute inset-0 bg-crimson transition-transform duration-500 ${copied ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}
      />
    </div>
  );
};
