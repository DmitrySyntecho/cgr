import Link from "next/link";
import { Loader2 } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "emergency" | "outline" | "ghost" | "link";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-heading font-bold tracking-[-0.01em] rounded-[var(--radius-btn)] transition-all duration-200 ease-[var(--ease-out-soft)] focus-visible:outline-3 focus-visible:outline-offset-2 disabled:opacity-55 disabled:pointer-events-none select-none";

const sizes: Record<Size, string> = {
  md: "h-12 px-5 text-[15px]",
  lg: "h-[54px] px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-blue-primary text-white shadow-[var(--shadow-btn)] hover:bg-blue-primary-hover hover:-translate-y-0.5 active:translate-y-0",
  emergency:
    "bg-red-emergency text-white shadow-[var(--shadow-btn-red)] hover:bg-red-emergency-hover hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border-2 border-white/70 text-white hover:bg-white hover:text-navy-950 backdrop-blur-sm",
  ghost:
    "text-slate-900 hover:bg-slate-200/70",
  link:
    "text-blue-primary hover:text-blue-primary-hover underline-offset-4 hover:underline px-0 h-auto",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  loading,
  children,
  className = "",
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      disabled={loading || rest.disabled}
      {...rest}
    >
      {loading && <Loader2 className="size-[18px] animate-spin" aria-hidden />}
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...rest
}: CommonProps & { href: string } & Omit<ComponentProps<typeof Link>, "href">) {
  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
