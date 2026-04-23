import { useState } from 'react';
import SectionNumber from './SectionNumber';

export default function SetupSection({ isMobile = false }: { isMobile: boolean }) {
  const steps = [
    {
      title: 'INSTALLATION',
      description: 'Add the package to your project using your preferred package manager.',
      command: 'npm install text-wind',
    },
    {
      title: 'CONFIGURATION',
      description: 'Import and add the plugin to your tailwind.config.ts or CSS.',
      command: "@plugin 'text-wind';",
    },
    {
      title: 'VARIABLES',
      description: 'Define your design tokens using CSS variables in your global CSS.',
      command: '--fluid-heading-min: 2rem;',
    },
  ];

  return (
    <div className="flex w-max h-full items-center">
      <div className="flex px-12 md:px-24 gap-12 md:gap-24 items-center">
        <div className="flex flex-col max-w-md shrink-0">
          <span className="font-sans font-black text-crimson text-fluid-caption tracking-[0.6em] uppercase mb-8 block">
            HOW TO USE
          </span>
          <h2 className="text-fluid-heading/70 leading-[0.75] font-display font-black text-charcoal tracking-[-0.08em] uppercase mb-12">
            Setup <span className="text-crimson italic">Process</span>
          </h2>
          <p className="text-fluid-body font-medium text-charcoal/60 leading-relaxed">
            Textwind is designed to be plug-and-play. Follow these three stages to integrate fluid typography into your architectural workflow.
          </p>
        </div>

        <div className="flex gap-8 md:gap-16 items-start">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col w-[300px] md:w-[400px] shrink-0">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-crimson font-display font-black text-fluid-subheading italic leading-none">
                  {index + 1}.
                </span>
                <div className="h-[2px] grow bg-charcoal/10" />
              </div>
              <h3 className="font-display font-black text-fluid-caption tracking-[0.2em] uppercase mb-4 text-charcoal">
                {step.title}
              </h3>
              <p className="text-fluid-caption font-medium text-charcoal/50 mb-8 h-12">
                {step.description}
              </p>
              <CopyBlock command={step.command} />
            </div>
          ))}
        </div>
      </div>
      <SectionNumber id="03" isMobile={isMobile} />
    </div>
  );
}

const CopyBlock = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="brutalist-card p-6 md:p-8 bg-charcoal text-white relative group cursor-pointer overflow-hidden transition-all active:scale-95 border border-charcoal/20"
      onClick={handleCopy}
    >
      <pre className="font-mono text-fluid-caption relative z-10 truncate">
        {copied ? 'Copied!' : command}
      </pre>
      <div
        className={`absolute inset-0 bg-crimson transition-transform duration-500 ${copied ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}
      />
    </div>
  );
};
