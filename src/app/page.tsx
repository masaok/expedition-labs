import { ButtonLink } from "@/components/button-link";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  contactEmail,
  disciplines,
  engagements,
  faqs,
  outcomes,
  pillars,
  stack,
  stages,
} from "@/content/home";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />

        <ul
          aria-label="Technologies we work in"
          className="mx-auto flex w-full max-w-[84rem] flex-wrap gap-x-8 gap-y-3 border-t border-line px-6 py-8 text-sm text-steel sm:px-10"
        >
          {stack.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        <Section
          id="disciplines"
          label="What we build"
          title="One senior team across the whole stack."
          lede="AI is the fastest junior engineer you'll ever hire. It still needs a senior engineer deciding what to build and how to build it. That's us, across the whole stack."
        >
          <ul className="border-b border-line">
            {disciplines.map((discipline) => (
              <li
                key={discipline.name}
                className="grid gap-x-10 gap-y-5 border-t border-line py-10 lg:grid-cols-12"
              >
                <h3 className="display text-lg lg:col-span-3">
                  {discipline.name}
                </h3>
                <div className="lg:col-span-5">
                  <p className="leading-7">{discipline.description}</p>
                  <p className="mt-4 text-sm text-steel">{discipline.stack}</p>
                </div>
                <dl className="lg:col-span-4 lg:text-right">
                  <dt className="text-sm text-steel">{discipline.metric}</dt>
                  <dd className="mt-2 text-xl font-medium tabular-nums">
                    {discipline.value}
                  </dd>
                </dl>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="agentic"
          label="Agentic engineering"
          title="Coding agents build inside a system designed to check them."
          lede="Agentic engineering is how we work. Coding agents do the building, inside a system we design to check them: verification loops, hard guardrails and an explicit trust ladder. Senior engineers decide what gets built and sign off on the proof."
        >
          <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <li key={pillar.key} className="bg-void py-8 sm:px-8 lg:py-10 lg:first:pl-0">
                <p className="text-sm text-limb">{pillar.key}</p>
                <h3 className="mt-4 text-xl font-medium">{pillar.title}</h3>
                <p className="mt-4 leading-7 text-steel">{pillar.body}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="method"
          label="How we work"
          title="How a project runs, from first read to release."
          lede="This is the process we run on every engagement. Each stage gates the next, so the speed does not come at the cost of quality."
        >
          <ol className="grid gap-y-12 lg:grid-cols-4">
            {stages.map((stage, index) => (
              <li
                key={stage.key}
                className="relative border-l border-line pl-8 lg:border-t lg:border-l-0 lg:pt-10 lg:pr-8 lg:pl-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-1 -left-[5px] h-[9px] w-[9px] rounded-full bg-regolith lg:-top-[5px] lg:left-0"
                />
                <p className="display text-sm tracking-[0.1em] tabular-nums">
                  <span className="text-steel">0{index + 1}</span>{" "}
                  {stage.key}
                </p>
                <h3 className="mt-4 text-xl font-medium">{stage.title}</h3>
                <p className="mt-4 leading-7 text-steel">{stage.body}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="outcomes"
          label="Results"
          title="Outcomes you can measure."
          lede="These are the shifts teams tend to see once AI augmentation is run with discipline. Treat them as directional. Results depend on your codebase and your team."
        >
          <dl className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome) => (
              <div key={outcome.label} className="flex flex-col">
                <dt className="order-2 mt-4">
                  {outcome.label}
                  <span className="mt-1 block text-sm text-steel">
                    {outcome.note}
                  </span>
                </dt>
                <dd className="order-1 text-[clamp(2.5rem,4vw,3.5rem)] leading-none font-light tracking-tight tabular-nums">
                  {outcome.value}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section
          id="engage"
          label="Engagements"
          title="Choose an engagement."
          lede="Three ways to work with us, sized to the scope of the work. Every one ends the same way: working software, merged to your main branch."
        >
          <ul className="grid gap-px bg-line lg:grid-cols-3">
            {engagements.map((engagement) => (
              <li
                key={engagement.name}
                className="flex flex-col bg-void py-10 lg:px-8 lg:first:pl-0 lg:last:pr-0"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="display text-lg">{engagement.name}</h3>
                  <p className="text-sm text-limb">{engagement.tag}</p>
                </div>
                <p className="mt-3 text-sm text-steel">{engagement.terms}</p>
                <p className="mt-6 leading-7">{engagement.body}</p>
                <ul className="mt-6 mb-10 flex flex-col gap-2 text-steel">
                  {engagement.includes.map((item) => (
                    <li key={item} className="grid grid-cols-[1.25rem_1fr]">
                      <span aria-hidden="true" className="text-limb">
                        +
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href="#contact"
                  variant="outline"
                  className="mt-auto self-start"
                >
                  Start here
                </ButtonLink>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="faq"
          label="Objections, answered"
          title="Questions we get asked."
        >
          <div className="border-b border-line lg:ml-[calc(25%+0.625rem)]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-t border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="text-2xl font-light text-limb transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[68ch] pb-8 leading-7 text-steel">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          label="Get in touch"
          title="Let's scope your project."
          lede="Tell us what you're building and where it's stuck. You'll hear back within a day with a scoped first plan. We skip the pitch deck and the discovery retainer."
        >
          <div className="flex flex-col gap-4 sm:flex-row lg:ml-[calc(25%+0.625rem)]">
            <ButtonLink href={`mailto:${contactEmail}`}>
              Start a project
            </ButtonLink>
            <ButtonLink href="#method" variant="outline">
              See how we work
            </ButtonLink>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
