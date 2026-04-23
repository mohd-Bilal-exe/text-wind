import Playground from '../Playground';
import SectionNumber from './SectionNumber';

export default function SecondSection({ isMobile = false }: { isMobile: boolean }) {
  return (
    <div className="flex w-max h-full items-center">
      <Playground />
      <SectionNumber id="02" isMobile={isMobile} />
    </div>
  );
}
