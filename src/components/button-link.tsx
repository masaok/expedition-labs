import type { ComponentProps } from "react";

const base =
  "display inline-flex h-12 items-center justify-center border px-5 text-center text-[0.8125rem] sm:px-7 tracking-[0.08em] transition-colors duration-200";

const variants = {
  solid:
    "border-regolith bg-regolith text-void hover:bg-transparent hover:text-regolith",
  outline:
    "border-regolith/40 text-regolith hover:border-regolith hover:bg-regolith hover:text-void",
};

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: keyof typeof variants;
};

export function ButtonLink({
  variant = "solid",
  className = "",
  ...props
}: ButtonLinkProps) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
