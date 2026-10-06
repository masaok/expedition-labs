import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/button-link";
import { milestones } from "@/content/home";

// Fixed seed so the sky is identical on every render.
function makeStars(count: number) {
  let seed = 20260;
  const next = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  return Array.from({ length: count }, () => ({
    cx: Math.round(next() * 1600),
    cy: Math.round(next() * 900),
    r: Number((0.4 + next() * 0.9).toFixed(2)),
    opacity: Number((0.15 + next() * 0.65).toFixed(2)),
  }));
}

const stars = makeStars(170);

// Seconds for the horizon sweep to reach a milestone; mirrors limb-sweep in globals.css.
const sweepDelay = (angle: number) => 0.4 + ((angle + 19) / 37) * 2.4;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {stars.map((star, index) => (
          <circle
            key={index}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="#eef1f4"
            opacity={star.opacity}
          />
        ))}
      </svg>

      <div className="relative mx-auto flex w-full max-w-[84rem] flex-1 flex-col justify-center px-6 pt-32 pb-[calc(clamp(7rem,19vw,18rem)+5rem)] sm:px-10">
        <p className="text-sm text-steel">Agentic product engineering</p>
        <h1 className="headline mt-6 text-[clamp(1.875rem,3.4vw,3rem)]">
          <span className="block">Ship software</span>
          <del className="mt-[0.2em] grid grid-cols-[1em_1fr] text-steel/70 decoration-1">
            <span aria-hidden="true" className="no-underline">
              −
            </span>
            <span>at the speed of meetings</span>
          </del>
          <ins className="mt-[0.2em] grid grid-cols-[1em_1fr] no-underline">
            <span aria-hidden="true" className="text-limb">
              +
            </span>
            <span>at the speed of thought</span>
          </ins>
        </h1>
        <p className="mt-10 max-w-[60ch] text-lg leading-8 text-steel">
          Expedition Labs is a senior engineering studio that practices agentic
          engineering. Coding agents build inside guardrails we design, and
          senior engineers decide what ships. We build production-grade
          frontend, backend, full-stack and mobile software in a fraction of
          the usual time.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="#engage">Start a project</ButtonLink>
          <ButtonLink href="#agentic" variant="outline">
            How agentic engineering works
          </ButtonLink>
        </div>
      </div>

      <div className="limb">
        <div className="limb-planet" />
        <div className="limb-sweep" />
        <ol aria-label="From idea to launch">
          {milestones.map((milestone) => (
            <li
              key={milestone.label}
              className="limb-node"
              style={
                {
                  "--a": `${milestone.angle}deg`,
                  "--d": `${sweepDelay(milestone.angle).toFixed(2)}s`,
                } as CSSProperties
              }
            >
              <span className="limb-label display text-[0.6875rem] tracking-[0.12em] sm:text-xs">
                {milestone.label}
              </span>
              <span className="limb-dot" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
