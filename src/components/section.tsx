import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  lede?: string;
  children?: ReactNode;
};

export function Section({ id, label, title, lede, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-[84rem] px-6 py-20 sm:px-10 lg:py-32">
        <div className="grid gap-x-10 gap-y-6 lg:grid-cols-12">
          <p className="text-sm text-steel lg:col-span-3 lg:pt-2">{label}</p>
          <div className="lg:col-span-9">
            <h2
              id={`${id}-title`}
              className="headline max-w-[26ch] text-[clamp(1.625rem,2.5vw,2.25rem)] text-balance"
            >
              {title}
            </h2>
            {lede && (
              <p className="mt-6 max-w-[62ch] text-lg leading-8 text-steel">
                {lede}
              </p>
            )}
          </div>
        </div>
        {children && <div className="mt-14 lg:mt-20">{children}</div>}
      </div>
    </section>
  );
}
