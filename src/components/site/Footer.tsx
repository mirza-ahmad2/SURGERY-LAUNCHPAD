import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import logoMark from "@/assets/logo-mark.svg";

const LINKEDIN_URL = "https://www.linkedin.com/company/synergy-youth-consulting/home/";

export function Footer() {
  return (
    <footer className="bg-charcoal text-warm mt-24">
      <div className="container-syc py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 group"
              aria-label="Synergy Youth Consulting — Home"
            >
              <img
                src={logoMark}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full transition-transform duration-300 group-hover:scale-105"
                decoding="async"
              />
              <span className="font-display font-bold text-xl text-warm leading-tight">
                Synergy Youth Consulting
              </span>
            </Link>
            <p className="mt-6 max-w-md text-warm/70 leading-relaxed">
              From Vision to Impact — equipping young people across Africa with practical
              skills, research capacity, and global exposure.
            </p>
            <p className="mt-4 text-sm text-warm/50">Founded April 2026 · Addis Ababa, Ethiopia</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">Explore</h2>
            <ul className="mt-5 space-y-3">
              {[
                { to: "/", l: "Home" },
                { to: "/programs", l: "Programs" },
                { to: "/mentorship", l: "Mentorship" },
                { to: "/about", l: "About Marwan" },
                { to: "/join", l: "Join / Contact" },
              ].map((i) => (
                <li key={i.to}>
                  <Link
                    to={i.to}
                    className="text-warm/80 hover:text-orange transition-colors duration-200"
                  >
                    {i.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">Connect</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-warm/80 hover:text-orange transition-colors duration-200"
                >
                  <Linkedin className="h-4 w-4" aria-hidden /> Synergy Youth Consulting
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-warm/80 hover:text-orange transition-colors duration-200"
                >
                  <Facebook className="h-4 w-4" aria-hidden /> Add here
                </a>
              </li>
              <li>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-warm/80 hover:text-orange transition-colors duration-200"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden /> Add here
                </a>
              </li>
              <li>
                <a
                  href="#contact-email"
                  className="inline-flex items-center gap-2 text-warm/80 hover:text-orange transition-colors duration-200"
                >
                  <Mail className="h-4 w-4" aria-hidden /> Add me
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-warm/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-warm/50">
          <p>© {new Date().getFullYear()} Synergy Youth Consulting. All rights reserved.</p>
          <p>
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gold hover:text-orange transition-colors"
            >
              The Innovations <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
