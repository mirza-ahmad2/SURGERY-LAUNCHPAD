import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, BookOpen, Users, Globe } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import portrait from "@/assets/hero-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Marwan Awl — Synergy Youth Consulting" },
      {
        name: "description",
        content:
          "Marwan Awl — MD Candidate, medical writer, and youth leadership advocate — founded Synergy Youth Consulting to close the gap between education and real-world readiness.",
      },
      {
        name: "keywords",
        content:
          "Marwan Awl, Synergy Youth Consulting founder, youth leadership Africa, Addis Ababa, medical advocate",
      },
      { property: "og:title", content: "About Marwan Awl — Synergy Youth Consulting" },
      {
        property: "og:description",
        content:
          "MD candidate, medical writer, and youth leadership advocate building the platform he wished existed.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: "/og-home.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Marwan Awl — Synergy Youth Consulting" },
      {
        name: "twitter:description",
        content: "Meet the founder of Synergy Youth Consulting.",
      },
      { name: "twitter:image", content: "/og-home.jpg" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    icon: BookOpen,
    title: "Practical over theoretical",
    body: "Skills you can demonstrate on Monday morning — not concepts that stay on a slide.",
  },
  {
    icon: Award,
    title: "Research as leverage",
    body: "Real research capacity opens doors that grades alone never will.",
  },
  {
    icon: Globe,
    title: "Global exposure, African rooted",
    body: "We take young Africans to the world stage — proudly, and on their terms.",
  },
  {
    icon: Users,
    title: "Youth-led leadership",
    body: "Programs designed by young leaders for young leaders. No condescension.",
  },
];

const chapters = [
  {
    year: "MD Candidate",
    body: "Studying medicine at Hayat Medical College while actively writing and publishing in youth health advocacy.",
  },
  {
    year: "Youth Leadership",
    body: "Director of Programs at the Pan African Youth Conference 2026, member of the Africa Public Health Student Network Initiative, and active in FAMSA.",
  },
  {
    year: "Recognition",
    body: "Recipient of the Outstanding Leadership Award (Healing Hearts Initiative / MindTalks Global Series) for mental health advocacy and youth empowerment.",
  },
  {
    year: "Synergy — Est. April 2026",
    body: "Founded Synergy Youth Consulting to build the bridge he wished existed between education and the real world — for Africa, first.",
  },
];

function About() {
  return (
    <>
      <Hero
        image={portrait}
        imageAlt="Portrait of Marwan Awl, founder of Synergy Youth Consulting"
        eyebrow="Founder"
        title={
          <>
            Meet <span className="italic text-orange">Marwan.</span>
          </>
        }
        subtitle="MD candidate, medical writer, and youth leadership advocate — building the platform he wished existed when he started out."
        ctaLabel="Work with Marwan"
        ctaTo="/mentorship"
      />

      <section className="py-24 md:py-32 bg-cream">
        <div className="container-syc grid gap-16 lg:grid-cols-[1.2fr_1fr] items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">The story</p>
            <h2 className="mt-4 text-display text-5xl md:text-6xl text-charcoal">
              From a medical school desk in Addis Ababa to a Pan-African platform.
            </h2>
            <div className="mt-10 space-y-6 text-lg text-charcoal/80 leading-relaxed">
              <p>
                Marwan Awl is an MD candidate at Hayat Medical College, a medical writer, and a
                youth leader working across the Federation of African Medical Students'
                Associations, the Africa Public Health Student Network Initiative, and the Pan
                African Youth Conference 2026 — where he serves as Director of Programs.
              </p>
              <p>
                He founded Synergy Youth Consulting in April 2026 after years of watching
                brilliant African students hit the same wall: strong minds, weak infrastructure.
                No mentorship. No pathways to conferences. No research capacity. No hand-off from
                classroom to career.
              </p>
              <p>
                Synergy is the answer — a young-leader-run platform that treats young Africans as
                the serious professionals they already are.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {chapters.map((c, i) => (
              <motion.div
                key={c.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-3xl bg-warm border border-border p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-28px_rgba(35,31,26,0.3)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">
                  {c.year}
                </p>
                <p className="mt-3 text-charcoal/80 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-charcoal text-warm">
        <div className="container-syc">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">What we stand for</p>
          <h2 className="mt-4 text-display text-5xl md:text-6xl max-w-3xl">Values, not slogans.</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.article
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-3xl border border-warm/15 p-7 h-full bg-warm/5 transition-all duration-300 hover:bg-warm/10 hover:-translate-y-1"
              >
                <v.icon className="h-8 w-8 text-gold" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-6 text-display text-2xl">{v.title}</h3>
                <p className="mt-3 text-warm/70 leading-relaxed">{v.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        eyebrow="Build with us"
        title="If it moves the youth agenda forward, we want to hear about it."
      />
    </>
  );
}
