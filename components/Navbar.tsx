export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f2efe9]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center border border-black bg-black text-[10px] font-medium uppercase tracking-[0.2em] text-[#f2efe9]">
            B
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-black/65">Beneva</div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.22em] text-black/65 md:flex">
          <a href="#work" className="transition hover:text-black">Work</a>
          <a href="#capabilities" className="transition hover:text-black">Capabilities</a>
          <a href="#process" className="transition hover:text-black">Process</a>
          <a href="#about" className="transition hover:text-black">About</a>
          <a href="#contact" className="transition hover:text-black">Contact</a>
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-3 border border-black bg-black px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#f2efe9] transition hover:bg-[#1f1f1f]"
        >
          Start a project
          <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
        </a>
      </div>
    </header>
  );
}
