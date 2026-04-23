const SectionNumber = ({ id, isMobile }: { id: string; isMobile: boolean }) => {
  if (isMobile) return null;
  return (
    <div
      className={`w-[50vw] shrink-0  h-full flex items-center justify-center font-display font-black text-fluid-heading/150 ${id === 'FIN' ? 'text-crimson/30' : 'text-charcoal/10'} select-none pointer-events-none`}
    >
      {id}
    </div>
  );
};
export default SectionNumber;
