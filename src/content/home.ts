export const contactEmail = "hello@expeditionlabs.co";

export const navLinks = [
  { href: "#disciplines", label: "What we do" },
  { href: "#agentic", label: "Agentic engineering" },
  { href: "#method", label: "Process" },
  { href: "#outcomes", label: "Results" },
  { href: "#engage", label: "Engagements" },
  { href: "#faq", label: "FAQ" },
];

export const footerGroups = [
  {
    title: "Services",
    links: [
      { href: "#disciplines", label: "What we do" },
      { href: "#agentic", label: "Agentic engineering" },
      { href: "#engage", label: "Engagements" },
    ],
  },
  {
    title: "Approach",
    links: [
      { href: "#method", label: "Process" },
      { href: "#outcomes", label: "Results" },
      { href: "#faq", label: "FAQ" },
    ],
  },
];

// Degrees from the top of the horizon arc, left to right.
export const milestones = [
  { label: "Idea", angle: -18 },
  { label: "Design", angle: -6 },
  { label: "Build", angle: 6 },
  { label: "Launch", angle: 18 },
];

export const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node",
  "Postgres",
  "Python",
  "Swift",
  "Kotlin",
  "React Native",
  "tRPC",
  "Tailwind",
  "AWS",
];

export const disciplines = [
  {
    name: "Frontend",
    description:
      "Interfaces that feel fast and considered. Design systems, complex state, and the last-10%-polish that AI drafts but rarely finishes on its own.",
    stack: "React, Next.js, Tailwind, Motion",
    metric: "Δ LCP",
    value: "3.9s → 0.9s",
  },
  {
    name: "Backend",
    description:
      "APIs and data layers that hold up under real load. Typed contracts, migrations and observability, with the boilerplate generated and the architecture decided by us.",
    stack: "Node, Python, Postgres, tRPC",
    metric: "Δ p99",
    value: "740ms → 90ms",
  },
  {
    name: "Full-stack",
    description:
      "Idea to production, one accountable team. We move across the whole stack in a single loop, so features land end-to-end instead of stalling at a handoff.",
    stack: "Next.js, Prisma, Queues, AWS",
    metric: "Δ idea to prod",
    value: "6 wks → 6 days",
  },
  {
    name: "Mobile",
    description:
      "Native-feeling apps for iOS and Android. We pick cross-platform where it pays and go native where it counts, and we ship to both stores from one codebase.",
    stack: "Swift, Kotlin, React Native",
    metric: "Δ platforms",
    value: "2 → 1 codebase",
  },
];

export const pillars = [
  {
    key: "Verify",
    title: "Done means proven",
    body: "An agent is not finished when the code compiles. It runs the real thing and shows the output, and an engineer reads the evidence.",
  },
  {
    key: "Guardrails",
    title: "Rules the build enforces",
    body: "Instructions are suggestions. We encode the rules as lint, types and required checks, so an agent cannot ship around them.",
  },
  {
    key: "Trust",
    title: "Autonomy is earned",
    body: "Agents get more room one rung at a time, and each rung is unlocked by something the repository can check.",
  },
  {
    key: "Audit",
    title: "Work you can audit",
    body: "Every step leaves an issue, a branch, a pull request or a decision-log row. You can review a long run without the transcript.",
  },
];

export const stages = [
  {
    key: "Assess",
    title: "Assess the codebase",
    body: "We read your codebase and your goal, then plan the smallest set of changes that gets you there. No greenfield rewrites sold as progress.",
  },
  {
    key: "Build",
    title: "Agents build, engineers review",
    body: "Coding agents write scaffolding, tests, and migrations at machine speed, inside guardrails the build enforces. A senior engineer reviews every change before it moves forward, so the judgment stays with a person.",
  },
  {
    key: "Verify",
    title: "Verify every change",
    body: "Types, tests, and load harnesses gate every merge. If it can't be verified, it doesn't ship. AI writes the coverage; we decide where the bar sits.",
  },
  {
    key: "Ship",
    title: "Ship continuously",
    body: "Small, reviewable PRs land continuously behind flags. You see working software within days, and you own all of the code.",
  },
];

export const outcomes = [
  {
    value: "+63%",
    label: "deploy frequency",
    note: "shipping in small, reviewable diffs",
  },
  {
    value: "−71%",
    label: "time to first release",
    note: "scaffolding and tests, generated",
  },
  {
    value: "312",
    label: "tests per feature, typical",
    note: "coverage written as code is written",
  },
  {
    value: "1",
    label: "senior owner per project",
    note: "the same engineer from start to finish",
  },
];

export const engagements = [
  {
    name: "Sprint",
    tag: "fixed scope",
    terms: "2 weeks, fixed scope",
    body: "One well-defined problem, delivered fast. A prototype, a stubborn bug, or a proof of concept you need in real code by Friday.",
    includes: ["Scoped in a day", "Daily previews", "You keep everything"],
  },
  {
    name: "Project",
    tag: "end-to-end",
    terms: "6 to 12 weeks, embedded",
    body: "A product or a major feature, taken from first commit to production. We own delivery end-to-end and merge to your main branch continuously.",
    includes: [
      "Full-stack delivery",
      "Tests + observability",
      "Handover or stay on",
    ],
  },
  {
    name: "Retainer",
    tag: "ongoing",
    terms: "monthly, fractional team",
    body: "A senior AI-augmented team on call. We plug into your roadmap and help your whole team ship faster.",
    includes: ["Ongoing capacity", "Reviews + mentoring", "Cancel anytime"],
  },
];

export const faqs = [
  {
    question: "Is this just vibe-coding my product?",
    answer:
      "No. AI drafts, a senior engineer decides. Every line is reviewed, typed, and tested before it merges. The speed comes from automating the boilerplate. The judgment is still ours.",
  },
  {
    question: "Who owns the code and the IP?",
    answer:
      "You do. We work in your repo or hand over a clean one with full history. There is no lock-in and no proprietary runtime, so you can fork the code and walk away at any time.",
  },
  {
    question: "How is AI used day to day?",
    answer:
      "Coding agents do the high-volume work: scaffolding, migrations, test coverage, refactors and research. They work inside checks they cannot skip, and they have to show the output that proves each change. Architecture, tradeoffs, and correctness stay with the engineer whose name is on the PR.",
  },
  {
    question: "What if you introduce a subtle bug at that speed?",
    answer:
      "That's what the verify stage is for. Types and tests gate the merge, changes land in small reviewable diffs behind flags, and nothing reaches production unproven.",
  },
  {
    question: "Can you work inside our existing stack and process?",
    answer:
      "Yes. We adapt to your repo, your CI, and your review conventions. We bring the method and work in your environment.",
  },
];
