import SectionNumber from './SectionNumber';

export default function FinSection({ isMobile = false }: { isMobile: boolean }) {
  return (
    <div className="flex w-max h-full items-center">
      <div className="w-[20vw] h-full flex flex-col items-center justify-center text-warm-white">
        <h4 className="text-fluid-subheading font-display font-bold max-w-2xl mx-auto leading-tight text-center">
          Designed for those who view typography as{' '}
          <span className="text-crimson italic">architecture.</span>
        </h4>
      </div>
      <SectionNumber id="FIN" isMobile={isMobile} />
    </div>
  );
}
