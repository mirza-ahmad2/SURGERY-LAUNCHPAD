import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/mentorship", label: "Mentorship" },
  { to: "/about", label: "About" },
  { to: "/join", label: "Join" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-cream/95 backdrop-blur-xl border-b border-border shadow-[0_8px_30px_-18px_rgba(35,31,26,0.35)]"
          : "bg-cream/80 backdrop-blur-md border-b border-border/60"
      }`}
    >
      <div className="container-syc flex items-center justify-between py-3.5 md:py-4">
        <Logo onClick={() => setOpen(false)} />

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-3.5 py-2 text-sm font-medium text-charcoal/75 hover:text-orange transition-colors duration-200 rounded-full"
              activeProps={{
                className:
                  "relative px-3.5 py-2 text-sm font-semibold text-orange rounded-full after:absolute after:left-3.5 after:right-3.5 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-orange",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/join"
            className="btn-orange btn-orange-hover text-sm px-5 py-2.5"
          >
            Join Synergy <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden grid place-items-center h-11 w-11 rounded-full bg-charcoal text-warm transition-transform duration-200 hover:scale-105 active:scale-95"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-cream border-t border-border"
          >
            <div className="container-syc py-6 flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-xl font-display font-semibold text-charcoal hover:text-orange transition-colors"
                    activeProps={{ className: "block py-2.5 text-xl font-display font-semibold text-orange" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/join"
                onClick={() => setOpen(false)}
                className="btn-orange btn-orange-hover mt-3 self-start"
              >
                Join Synergy <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
