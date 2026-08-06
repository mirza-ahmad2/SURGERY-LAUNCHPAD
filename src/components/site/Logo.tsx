import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoMark from "@/assets/logo-mark.svg";

type LogoProps = {
  className?: string;
  markClassName?: string;
  wordmark?: boolean;
  to?: "/" | string;
  onClick?: () => void;
  inverted?: boolean;
};

export function Logo({
  className,
  markClassName,
  wordmark = true,
  to = "/",
  onClick,
  inverted = false,
}: LogoProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn("inline-flex items-center gap-2.5 group", className)}
      aria-label="Synergy Youth Consulting — Home"
    >
      <img
        src={logoMark}
        alt=""
        width={36}
        height={36}
        className={cn(
          "h-9 w-9 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-105",
          markClassName,
        )}
        decoding="async"
      />
      {wordmark && (
        <span
          className={cn(
            "font-display font-bold tracking-tight text-lg leading-none",
            inverted ? "text-warm" : "text-charcoal",
          )}
        >
          Synergy<span className="text-orange">.</span>
        </span>
      )}
    </Link>
  );
}
