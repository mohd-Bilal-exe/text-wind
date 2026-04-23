import SectionNumber from './SectionNumber';

export default function ReferenceSection({ isMobile = false }: { isMobile: boolean }) {
  const categories = [
    {
      name: 'FLUID TYPES',
      items: [
        { class: 'text-fluid-display', desc: 'Extreme impact headings' },
        { class: 'text-fluid-heading', desc: 'Main headline scale' },
        { class: 'text-fluid-subheading', desc: 'Section headings' },
        { class: 'text-fluid-title', desc: 'Component level headers' },
        { class: 'text-fluid-body', desc: 'Primary reading text' },
        { class: 'text-fluid-label', desc: 'Input and button labels' },
        { class: 'text-fluid-overline', desc: 'Small structural labels' },
        { class: 'text-fluid-callout', desc: 'Important notices' },
        { class: 'text-fluid-caption', desc: 'Secondary metadata' },
        { class: 'text-fluid-footnote', desc: 'Smallest metadata' },
        { class: 'text-fluid-code', desc: 'Monospaced snippets' },
      ],
    },
    {
      name: 'MODIFIERS',
      items: [
        { class: '/50 ... /200', desc: 'Predefined scale steps' },
        { class: '/[75] ... /[120]', desc: 'Arbitrary decimal scales' },
        { class: '/10 ... /95', desc: 'Predefined opacity steps' },
        { class: '/[.5]', desc: 'Arbitrary opacity values' },
      ],
    },
    {
      name: 'COLOR UTILS',
      items: [
        { class: 'text-heading-color', desc: 'Primary text color' },
        { class: 'text-body-color', desc: 'Secondary text color' },
        { class: 'text-muted-color', desc: 'De-emphasized text' },
        { class: 'text-accent-color', desc: 'Brand accent highlights' },
        { class: 'text-callout-color', desc: 'Attention/Notice color' },
      ],
    },
  ];

  const customizationVars = [
    { var: '--fluid-vw-min', val: '320px', desc: 'Min viewport' },
    { var: '--fluid-vw-max', val: '1280px', desc: 'Max viewport' },
    { var: '--fluid-display-min', val: '5rem', desc: 'Display min' },
    { var: '--fluid-heading-min', val: '3rem', desc: 'Heading min' },
    { var: '--fluid-body-min', val: '1rem', desc: 'Body min' },
  ];

  return (
    <div className="flex w-max h-full items-center">
      <div className="flex px-12 md:px-24 gap-16 md:gap-32 items-center">
        <div className="flex flex-col max-w-sm shrink-0">
          <span className="font-sans font-black text-crimson text-fluid-caption tracking-[0.6em] uppercase mb-8 block">
            REFERENCE
          </span>
          <h2 className="text-fluid-heading/70 leading-[0.75] font-display font-black text-charcoal tracking-[-0.08em] uppercase mb-12">
            System <span className="text-crimson italic">Registry</span>
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-charcoal text-white rounded-sm border-l-4 border-crimson">
              <span className="text-[10px] font-mono opacity-50 block mb-4 uppercase">
                CORE VARIABLES
              </span>
              <div className="grid grid-cols-1 gap-3">
                {customizationVars.map((v, i) => (
                  <div key={i} className="flex justify-between items-center gap-4">
                    <code className="text-[10px] text-crimson font-bold">{v.var}</code>
                    <span className="text-[10px] opacity-40 font-mono italic">{v.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-fluid-caption font-medium text-charcoal/50 leading-relaxed italic">
              "Architecture begins where two bricks are put carefully together. Typography begins
              where two characters are tuned in mathematical harmony."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 h-full py-12">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col">
              <h3 className="font-display font-black text-fluid-caption tracking-[0.2em] uppercase mb-8 text-crimson pb-2 border-b border-crimson/20">
                {cat.name}
              </h3>
              <div className="space-y-8 max-h-[60svh] overflow-y-auto scrollbar-visible">
                {cat.items.map((item, j) => (
                  <div key={j} className="group">
                    <code className="text-fluid-caption font-mono font-bold text-charcoal group-hover:text-crimson transition-colors block mb-1">
                      {item.class.startsWith('.') ? item.class : `.${item.class}`}
                    </code>
                    <small className="text-[11px] font-sans font-medium text-charcoal/40 uppercase tracking-tighter block leading-tight">
                      {item.desc}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionNumber id="04" isMobile={isMobile} />
    </div>
  );
}
