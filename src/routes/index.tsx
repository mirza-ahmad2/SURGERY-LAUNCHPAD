import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  GraduationCap, HeartPulse, Globe2, Compass, ArrowRight, Quote,
} from "lucide-react";
import { KineticHero } from "@/components/site/KineticHero";
import { MissionCallout } from "@/components/site/MissionCallout";
import { ProgramCard } from "@/components/site/ProgramCard";
import { Carousel } from "@/components/site/Carousel";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import mentor from "@/assets/hero-mentorship.jpg";
import conf from "@/assets/moment-conference.jpg";
import web from "@/assets/moment-webinar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Synergy Youth Consulting — From Vision to Impact" },
      {
        name: "description",
        content:
          "Practical skills, research capacity, and global exposure for young Africans. Certified programs, mental health webinars, and international conferences.",
      },
      {
        name: "keywords",
        content:
          "Synergy Youth Consulting, Pan-African youth, certification, mental health webinars, conferences, mentorship, From Vision to Impact",
      },
      { property: "og:title", content: "Synergy Youth Consulting — From Vision to Impact" },
      {
        property: "og:description",
        content:
          "Practical skills, research capacity, and global exposure for young Africans.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-home.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Synergy Youth Consulting — From Vision to Impact" },
      {
        name: "twitter:description",
        content:
          "Practical skills, research capacity, and global exposure for young Africans.",
      },
      { name: "twitter:image", content: "/og-home.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <KineticHero />

      <MissionCallout
        eyebrow="The gap we close"
        lines={[
          "Most graduate",
          "without real-world",
          "skills. We fix that.",
        ]}
        accentWord="fix"
      />

      {/* Programs preview */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container-syc">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">Our programs</p>
              <h2 className="mt-4 text-display text-5xl md:text-6xl text-charcoal max-w-2xl">
                Three pillars. One mission.
              </h2>
            </div>
            <Link to="/programs" className="hidden md:inline-flex items-center gap-2 text-orange font-semibold">
              See all programs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <ProgramCard
              icon={GraduationCap}
              index="01 / Learn"
              title="World-Class Learning & Certification"
              description="Global-standard courses and certifications engineered for real, employable skills."
              highlights={[
                "Certified pathways with international recognition",
                "Portfolio-first, project-driven learning",
                "Career-aligned curriculum, taught by practitioners",
              ]}
              tone="cream"
            />
            <ProgramCard
              icon={HeartPulse}
              index="02 / Well-being"
              title="Mental Health Webinar Series"
              description="Co-sponsored training reaching young people across Africa and Asia."
              highlights={[
                "Free access, expert-led sessions",
                "Practical tools for stress, focus, and resilience",
                "Community follow-up, not one-off talks",
              ]}
              tone="orange"
            />
            <ProgramCard
              icon={Globe2}
              index="03 / Exposure"
              title="International Conferences & Empowerment"
              description="Facilitated access to global stages and empowerment programs that build networks."
              highlights={[
                "Application support for global summits",
                "Delegate coaching and travel guidance",
                "Post-conference impact tracking",
              ]}
              tone="charcoal"
            />
          </div>
        </div>
      </section>

      {/* Mentorship teaser */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container-syc grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gold/40 -rotate-2" />
            <img
              src={mentor}
              alt="Mentorship session between a medical professional and a student"
              loading="lazy"
              className="relative rounded-3xl w-full aspect-[4/3] object-cover"
            />
          </motion.div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">
              1:1 Youth Consulting
            </p>
            <h2 className="mt-4 text-display text-charcoal text-5xl md:text-6xl">
              A mentor in your corner.
            </h2>
            <p className="mt-6 text-lg text-charcoal/75 leading-relaxed max-w-lg">
              Personal guidance for students and early-career professionals — research capacity,
              opportunity access, and honest advice from people who've walked the path.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: "3", l: "Focus tracks" },
                { k: "1:1", l: "Format" },
                { k: "PA", l: "Africa-wide" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-warm border border-border p-4">
                  <div className="text-display text-3xl text-orange">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-charcoal/60">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/mentorship" className="btn-orange btn-orange-hover">
                Apply for mentorship <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-charcoal/20 text-charcoal font-semibold hover:bg-charcoal hover:text-warm transition-colors">
                Meet Marwan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Synergy — founder story */}
      <section className="py-24 md:py-32 bg-charcoal text-warm">
        <div className="container-syc grid gap-16 lg:grid-cols-[1fr_1.4fr] items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Synergy</p>
            <h2 className="mt-4 text-display text-5xl md:text-6xl">
              Built by a young African leader — for young African leaders.
            </h2>
          </div>
          <div>
            <Quote className="h-10 w-10 text-orange" strokeWidth={1.4} />
            <p className="mt-6 text-2xl md:text-3xl font-display leading-tight text-warm/95">
              "I kept meeting brilliant students who had the ideas but not the doors.
              Synergy exists to open those doors — with real skills, real research, and
              real global exposure."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Compass className="h-5 w-5 text-gold" />
              <div>
                <p className="font-semibold">Marwan Awl</p>
                <p className="text-warm/60 text-sm">Founder · MD Candidate · Youth Advocate</p>
              </div>
              <Link to="/about" className="ml-auto inline-flex items-center gap-2 text-orange font-semibold">
                His story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Carousel
        eyebrow="On the ground"
        heading="Real moments, real momentum."
        items={[
          { image: conf, title: "Pan-African Youth Conference", caption: "Facilitating delegate access to Africa's biggest youth stages.", tag: "Conference" },
          { image: web, title: "Mental Health Webinar Series", caption: "Practical, expert-led sessions reaching students across Africa and Asia.", tag: "Webinar" },
        ]}
      />

      <ClosingCTA
        eyebrow="Ready when you are"
        title="Your future doesn't wait. Neither do we."
      />
    </>
  );
}
