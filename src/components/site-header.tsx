import { MobileMenu } from "@/components/mobile-menu";
import { navLinks } from "@/content/home";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-void/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[84rem] items-center justify-between gap-4 px-6 lg:gap-8 sm:px-10">
        <a href="#top" className="display text-xs tracking-[0.14em] whitespace-nowrap sm:text-sm">
          Expedition Labs
        </a>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex gap-7 text-sm text-steel">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-regolith"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#engage"
          className="display ml-auto hidden border border-regolith/40 sm:block lg:ml-0 px-4 py-2 text-xs tracking-[0.08em] whitespace-nowrap transition-colors hover:border-regolith hover:bg-regolith hover:text-void"
        >
          Start a project
        </a>
        <MobileMenu />
      </div>
    </header>
  );
}
