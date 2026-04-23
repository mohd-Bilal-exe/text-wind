import Playground from '../Playground';
import SectionNumber from './SectionNumber';
import { useMediaQuery } from '../../hooks/use-media-query';

export default function SecondSection({ isMobile: isMobileProp = false }: { isMobile?: boolean }) {
  const isMobileHook = useMediaQuery('(max-width: 768px)');
  const isMobile = isMobileProp || isMobileHook;

  if (isMobile) {
    return (
      <div className="flex flex-col w-full h-auto p-12 items-center justify-center">
        <Playground />
      </div>
    );
  }
  return (
    <div className="flex w-max h-full items-center">
      <Playground />
      <SectionNumber id="02" isMobile={isMobile} />
    </div>
  );
}
