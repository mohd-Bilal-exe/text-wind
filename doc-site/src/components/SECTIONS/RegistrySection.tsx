import SectionNumber from './SectionNumber';
import { useMediaQuery } from '../../hooks/use-media-query';
import { CopyBlock } from './SetupSection';

export default function ThirdSection({ isMobile: isMobileProp = false }: { isMobile?: boolean }) {
  const isMobileHook = useMediaQuery('(max-width: 768px)');
  const isMobile = isMobileProp || isMobileHook;

  if (isMobile) {
    return (
      <div className="flex flex-col w-full h-auto p-12 items-center justify-center text-center">
        <h3 className="text-fluid-subheading font-display font-black mb-12 text-charcoal uppercase tracking-tighter">
          Ready to <span className="text-crimson italic">deploy?</span>
        </h3>
        <CopyBlock command="npm install text-wind" />
      </div>
    );
  }
  return (
    <div className="flex w-max h-full items-center">
      <div className="w-[35svw] h-full flex flex-col items-center justify-center text-center">
        <h3 className="text-fluid-subheading font-display font-black mb-12 text-charcoal uppercase tracking-tighter">
          Ready to <span className="text-crimson italic">deploy?</span>
        </h3>
        <CopyBlock command="npm install text-wind" />
      </div>
      <SectionNumber id="05" isMobile={isMobile} />
    </div>
  );
}
