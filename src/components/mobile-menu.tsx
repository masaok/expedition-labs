"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { navLinks } from "@/content/home";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const close = () => setOpen(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      close();
      buttonRef.current?.focus();
    };
    // Matches Tailwind's lg breakpoint, where the inline nav takes over.
    const desktop = window.matchMedia("(min-width: 64rem)");

    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", close);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", close);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="relative -mr-2 flex h-10 w-10 items-center justify-center"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span
          aria-hidden="true"
          className={`absolute h-px w-6 bg-regolith transition-transform duration-200 ${
            open ? "rotate-45" : "-translate-y-1"
          }`}
        />
        <span
          aria-hidden="true"
          className={`absolute h-px w-6 bg-regolith transition-transform duration-200 ${
            open ? "-rotate-45" : "translate-y-1"
          }`}
        />
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-void px-6 pt-4 pb-10 sm:px-10"
      >
        <nav aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="display block py-5 text-xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink
          href="#engage"
          onClick={() => setOpen(false)}
          className="mt-8 w-full"
        >
          Start a project
        </ButtonLink>
      </div>
    </div>
  );
}
