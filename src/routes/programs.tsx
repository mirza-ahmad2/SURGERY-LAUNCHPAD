import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, HeartPulse, Globe2, CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import img from "@/assets/hero-programs.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Synergy Youth Consulting" },
      {
        name: "description",
        content:
          "Three program pillars: World-Class Learning & Certification, Mental Health Webinars, and International Conferences & Empowerment.",
      },
      {
        name: "keywords",
        content:
          "youth programs Africa, certification courses, mental health webinars, youth conferences, Synergy Youth Consulting",
      },
      { property: "og:title", content: "Programs — Synergy Youth Consulting" },
      {
        property: "og:description",
        content:
          "Three program pillars that close the gap between education and the world young people walk into.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/programs" },
      { property: "og:image", content: "/og-home.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Programs — Synergy Youth Consulting" },
      {
        name: "twitter:description",
        content:
          "Learning & Certification, Mental Health Webinars, and International Conferences for young Africans.",
      },
      { name: "twitter:image", content: "/og-home.jpg" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: Programs,
});

const pillars = [
  {
    icon: GraduationCap,
    tag: "01",
    title: "World-Class Learning & Certification",
    lede: "Global-standard courses and internationally recognized certifications engineered around real, employable skills — not theory that expires the day you graduate.",
    bullets: [
      "Certified pathways aligned to international employer standards",
      "Portfolio-first learning: you build things you can show",
      "Cohorts taught by working practitioners, not lecturers-in-a-vacuum",
    ],
    tone: "cream" as const,
  },
  {
    icon: HeartPulse,
    tag: "02",
    title: "Mental Health Webinar Series",
    lede: "Co-sponsored training reaching young people across Africa and Asia — practical tools for the pressures of student and early-career life, delivered by clinicians and advocates.",
    bullets: [
      "Free access, expert-led sessions with real Q&A",
      "Concrete frameworks for stress, focus, and resilience",
      "Community follow-through — never one-off talks",
    ],
    tone: "orange" as const,
  },
  {
    icon: Globe2,
    tag: "03",
    title: "International Conferences & Empowerment",
    lede: "Facilitated access to global conferences and empowerment programs, plus the coaching and logistical support to actually show up prepared and make it count.",
    bullets: [
      "Application support for major global summits",
      "Delegate coaching, pitch prep, and travel guidance",
      "Post-conference impact tracking so momentum doesn't stall",
    ],
    tone: "charcoal" as const,
  },
];

const toneMap = {
  cream: "bg-cream text-charcoal",
  orange: "bg-orange text-warm",
  charcoal: "bg-charcoal text-warm",
};

function Programs() {
  return (
    <>
      <Hero
        image={img}
        imageAlt="Young people collaborating on laptops in a bright learning space"
        eyebrow="Programs"
        title={
          <>
            Real skills.
            <br />
            Real capacity.
            <br />
            <span className="italic text-orange">Real reach.</span>
          </>
        }
        subtitle="Three pillars, one mission: close the gap between education and the world young people actually walk into."
      />

      {pillars.map((p, i) => {
        const isDark = p.tone !== "cream";
        return (
          <section key={p.tag} className={`py-24 md:py-32 ${toneMap[p.tone]}`}>
            <div className="container-syc grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                    isDark ? "text-gold" : "text-orange"
                  }`}
                >
                  Pillar {p.tag}
                </p>
                <div
                  className={`mt-6 inline-grid place-items-center h-16 w-16 rounded-2xl transition-transform duration-300 hover:scale-105 ${
                    isDark ? "bg-warm/10" : "bg-orange/10"
                  }`}
                >
                  <p.icon
                    className={`h-8 w-8 ${isDark ? "text-gold" : "text-orange"}`}
                    strokeWidth={1.6}
                    aria-hidden
                  />
                </div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mt-6 text-display text-4xl sm:text-5xl md:text-6xl leading-tight"
                >
                  {p.title}
                </motion.h2>
              </div>
              <div>
                <p
                  className={`text-lg md:text-xl leading-relaxed ${
                    isDark ? "text-warm/85" : "text-charcoal/75"
                  }`}
                >
                  {p.lede}
                </p>
                <ul className="mt-10 space-y-4">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-4">
                      <CheckCircle2
                        className={`h-6 w-6 flex-none ${isDark ? "text-gold" : "text-orange"}`}
                        strokeWidth={1.6}
                        aria-hidden
                      />
                      <span className={`text-lg ${isDark ? "text-warm/90" : "text-charcoal/85"}`}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {i < pillars.length - 1 && (
              <div className="container-syc mt-16">
                <div className={`h-px w-full ${isDark ? "bg-warm/15" : "bg-charcoal/10"}`} />
              </div>
            )}
          </section>
        );
      })}

      <ClosingCTA
        eyebrow="Pick your pillar"
        title="Learn the skills. Own the room. Cross borders."
      />
    </>
  );
}
