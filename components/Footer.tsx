export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f2efe9]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center border border-black bg-black text-[10px] font-medium uppercase tracking-[0.2em] text-[#f2efe9]">
              B
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-black/65">Beneva</div>
          </div>
          <p className="max-w-sm text-sm leading-6 text-black/70">
            Software • ERP • AI • Web • Design
          </p>
        </div>

        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-black/50">Navigation</p>
          <ul className="space-y-3 text-sm text-black/70">
            <li><a href="#work" className="hover:text-black">Work</a></li>
            <li><a href="#capabilities" className="hover:text-black">Capabilities</a></li>
            <li><a href="#about" className="hover:text-black">About</a></li>
            <li><a href="#contact" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-black/50">Services</p>
          <ul className="space-y-3 text-sm text-black/70">
            <li>Software Development</li>
            <li>ERP Solutions</li>
            <li>AI Automation</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-black/50">Connect</p>
          <ul className="space-y-3 text-sm text-black/70">
            <li><a href="mailto:hello@beneva.studio" className="hover:text-black">hello@beneva.studio</a></li>
            <li><a href="#" className="hover:text-black">LinkedIn</a></li>
            <li><a href="#" className="hover:text-black">Behance</a></li>
            <li className="pt-1 text-[10px] uppercase tracking-[0.25em] text-black/50">System Status: Online</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10 px-5 py-4 text-center text-[10px] uppercase tracking-[0.2em] text-black/50 md:px-8">
        © 2026 Beneva Studio. All rights reserved.
      </div>
    </footer>
  );
}
