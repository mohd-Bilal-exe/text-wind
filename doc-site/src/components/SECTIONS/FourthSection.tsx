import SectionNumber from './SectionNumber';
import { useMediaQuery } from '../../hooks/use-media-query';

export default function FourthSection({ isMobile: isMobileProp = false }: { isMobile?: boolean }) {
  const isMobileHook = useMediaQuery('(max-width: 768px)');
  const isMobile = isMobileProp || isMobileHook;

  if (isMobile) {
    return (
      <div className="flex flex-col w-full h-auto p-12 items-start justify-center">
        <h3 className="text-fluid-subheading/120 font-display font-black text-charcoal leading-[0.8] uppercase mb-8 text-start">
          SARTORIAL <span className="text-crimson">CODE.</span>
        </h3>
        <p className="font-sans text-fluid-body leading-relaxed text-charcoal/70 max-w-sm text-start">
          Textwind is the result of thousands of hours spent perfecting architectural type scales.
        </p>
      </div>
    );
  }
  return (
    <div className="flex w-max h-full items-center">
      <div className="w-[30vw] h-full flex flex-col justify-center px-24">
        <h3 className="text-fluid-subheading/120 font-display font-black text-charcoal leading-[0.8] uppercase mb-8">
          SARTORIAL <span className="text-crimson">CODE.</span>
        </h3>
        <p className="font-sans text-fluid-body leading-relaxed text-charcoal/70 max-w-md">
          Textwind is the result of thousands of hours spent perfecting architectural type scales.
        </p>
      </div>
      <SectionNumber id="06" isMobile={isMobile} />
    </div>
  );
}
