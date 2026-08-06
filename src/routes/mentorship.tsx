import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Microscope, Compass, Sparkles, ArrowRight, Users2 } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import img from "@/assets/hero-mentorship.jpg";

export const Route = createFileRoute("/mentorship")({
  head: () => ({
    meta: [
      { title: "Mentorship & Consulting — Synergy Youth Consulting" },
      {
        name: "description",
        content:
          "1:1 Youth Consulting for African students and early-career professionals: research capacity, opportunity access, and personal growth guidance.",
      },
      {
        name: "keywords",
        content:
          "youth mentorship Africa, 1:1 consulting, research coaching, career guidance, Synergy Youth Consulting",
      },
      { property: "og:title", content: "Mentorship & Consulting — Synergy Youth Consulting" },
      {
        property: "og:description",
        content:
          "Personal 1:1 guidance for students and early-career professionals across Africa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mentorship" },
      { property: "og:image", content: "/og-home.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mentorship & Consulting — Synergy Youth Consulting" },
      {
        name: "twitter:description",
        content: "1:1 Youth Consulting — research, opportunity access, and growth guidance.",
      },
      { name: "twitter:image", content: "/og-home.jpg" },
    ],
    links: [{ rel: "canonical", href: "/mentorship" }],
  }),
  component: Mentorship,
});

const offers = [
  {
    icon: Microscope,
    title: "Research capacity strengthening",
    body: "From framing a research question to writing publishable work — structured coaching that turns curiosity into credible output.",
  },
  {
    icon: Compass,
    title: "Opportunity access",
    body: "Scholarships, fellowships, delegate spots, submissions — we help you find the ones worth chasing and prepare applications that land.",
  },
  {
    icon: Sparkles,
    title: "Personal & professional growth",
    body: "Honest 1:1 guidance on positioning, confidence, and long-term career direction from someone actively navigating the same terrain.",
  },
];

function Mentorship() {
  return (
    <>
      <Hero
        image={img}
        imageAlt="Mentor and mentee in a professional conversation at a table"
        eyebrow="Mentorship & Consulting"
        title={
          <>
            A <span className="italic text-orange">mentor</span> in your corner.
          </>
        }
        subtitle="Personal 1:1 guidance for students and early-career professionals across Africa — practical, direct, and built around your goals."
        ctaLabel="Apply for mentorship"
      />

      <section className="py-24 md:py-32 bg-cream">
        <div className="container-syc">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">What you get</p>
          <h2 className="mt-4 text-display text-5xl md:text-6xl text-charcoal max-w-3xl">
            More than advice — infrastructure for your ambition.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {offers.map((o, i) => (
              <motion.article
                key={o.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="rounded-3xl bg-warm border border-border p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(35,31,26,0.35)]"
              >
                <div className="grid place-items-center h-14 w-14 rounded-2xl bg-orange/10">
                  <o.icon className="h-7 w-7 text-orange" strokeWidth={1.6} aria-hidden />
                </div>
                <h3 className="mt-6 text-display text-2xl text-charcoal">{o.title}</h3>
                <p className="mt-3 text-charcoal/70 leading-relaxed">{o.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-charcoal text-warm">
        <div className="container-syc grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Who it's for</p>
            <h2 className="mt-4 text-display text-5xl md:text-6xl">
              For young Africans building something real.
            </h2>
          </div>
          <div className="space-y-6">
            {[
              "University students who want more than a degree — practical skills and portfolio.",
              "Early-career professionals looking for structured research and publication support.",
              "Aspiring delegates preparing for international conferences and summits.",
              "Advocates and youth leaders scaling community initiatives across Africa.",
            ].map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex gap-4 border-b border-warm/10 pb-6"
              >
                <Users2 className="h-6 w-6 text-gold flex-none" strokeWidth={1.6} aria-hidden />
                <p className="text-lg text-warm/90">{line}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gold text-charcoal">
        <div className="container-syc text-center">
          <h2 className="text-display text-5xl md:text-7xl max-w-3xl mx-auto">
            One conversation can change your trajectory.
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-charcoal/80 text-lg">
            Applications are reviewed on a rolling basis. Cohort spaces are intentionally small.
          </p>
          <div className="mt-10">
            <Link
              to="/join"
              className="inline-flex items-center gap-2 rounded-full bg-charcoal text-warm px-7 py-4 font-semibold transition-all duration-300 hover:bg-orange hover:-translate-y-0.5"
            >
              Apply for mentorship <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
