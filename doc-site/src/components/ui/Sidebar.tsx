import AppLogo from './AppLogo';

export default function Sidebar() {
  return (
    <aside className="w-12 h-svh z-300 fixed left-0 top-0 border-r border-gray-200 bg-warm-white/5 backdrop-blur-lg">
      <div className="p-2  flex justify-center items-center mt-2">
        <AppLogo width={28} height={28} className="" />
      </div>
      <h1 className="text-2xl font-bold text-charcoal rotate-90  translate-y-[35vh]">Textwind</h1>
    </aside>
  );
}
