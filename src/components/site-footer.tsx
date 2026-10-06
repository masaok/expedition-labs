import { contactEmail, footerGroups } from "@/content/home";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-[84rem] px-6 py-16 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <a href="#top" className="display text-sm tracking-[0.14em]">
              Expedition Labs
            </a>
            <p className="mt-5 max-w-[48ch] leading-7 text-steel">
              A senior engineering studio in Los Angeles. Coding agents build
              inside guardrails we design, and senior engineers decide what
              ships.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-5 inline-block underline decoration-regolith/30 underline-offset-4 transition-colors hover:decoration-regolith"
            >
              {contactEmail}
            </a>
          </div>
          {footerGroups.map((group) => (
            <nav
              key={group.title}
              aria-label={group.title}
              className="lg:col-span-3"
            >
              <h2 className="text-sm text-steel">{group.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Expedition Labs. All rights reserved. Los Angeles,
            California.
          </p>
          <a
            href="#top"
            className="transition-colors hover:text-regolith"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
