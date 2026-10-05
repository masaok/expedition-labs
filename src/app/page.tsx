const sections = [
  {
    title: "Tools",
    description: "Small, focused utilities you can use directly in the browser.",
  },
  {
    title: "Resources",
    description: "Curated links and materials worth keeping around.",
  },
  {
    title: "References",
    description: "Quick lookups and cheat sheets.",
  },
  {
    title: "Guides",
    description: "Step-by-step walkthroughs.",
  },
];

const repoUrl = "https://github.com/masaok/expedition-labs";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-16 py-24 px-6 sm:px-16">
        <header className="flex flex-col gap-6">
          <p className="font-mono text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Open source
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-zinc-50">
            Expedition Labs
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A collection of tools, resources, references, and guides. Free to
            use, learn from, and build on.
          </p>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a
              className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
              href={`${repoUrl}#contributing`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute
            </a>
          </div>
        </header>

        <section aria-labelledby="sections-heading" className="flex flex-col gap-6">
          <h2
            id="sections-heading"
            className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50"
          >
            What&apos;s here
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {sections.map((section) => (
              <li
                key={section.title}
                className="flex flex-col gap-2 rounded-2xl border border-solid border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-zinc-950"
              >
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50">
                  {section.title}
                </h3>
                <p className="leading-7 text-zinc-600 dark:text-zinc-400">
                  {section.description}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            The project is in its early days, so content is still on the way.
          </p>
        </section>

        <footer className="mt-auto border-t border-solid border-black/[.08] pt-6 text-sm text-zinc-500 dark:border-white/[.145] dark:text-zinc-400">
          Released under the{" "}
          <a
            className="font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
            href={`${repoUrl}/blob/main/LICENSE`}
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT License
          </a>
          .
        </footer>
      </main>
    </div>
  );
}
