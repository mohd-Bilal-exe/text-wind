import SectionNumber from './SectionNumber';

export default function FirstSection({ isMobile = false }: { isMobile: boolean }) {
  return (
    <div className="flex w-max h-full items-center">
      <div className="w-[35vw] h-full flex flex-col items-start justify-center text-start">
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
  );
}
