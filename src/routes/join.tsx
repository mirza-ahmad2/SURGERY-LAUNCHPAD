import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Facebook, MessageCircle, Mail, MapPin } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { JoinEnquiryForm } from "@/components/site/JoinEnquiryForm";
import img from "@/assets/hero-join.jpg";

const LINKEDIN_URL = "https://www.linkedin.com/company/synergy-youth-consulting/home/";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Synergy — Start Your Journey" },
      {
        name: "description",
        content:
          "Apply to Synergy Youth Consulting programs — Learning & Certification, Mental Health Webinars, Conferences & Empowerment, or 1:1 Youth Consulting.",
      },
      {
        name: "keywords",
        content:
          "join Synergy, apply youth program, mentorship application, Synergy Youth Consulting contact",
      },
      { property: "og:title", content: "Join Synergy — Start Your Journey" },
      {
        property: "og:description",
        content: "Tell us where you are and where you're headed. We'll take it from there.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/join" },
      { property: "og:image", content: "/og-home.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Join Synergy — Start Your Journey" },
      {
        name: "twitter:description",
        content: "Apply to Synergy Youth Consulting programs and start your journey.",
      },
      { name: "twitter:image", content: "/og-home.jpg" },
    ],
    links: [{ rel: "canonical", href: "/join" }],
  }),
  component: Join,
});

function Join() {
  return (
    <>
      <Hero
        image={img}
        imageAlt="Young professionals collaborating in a bright workspace"
        eyebrow="Join Synergy"
        title={
          <>
            Start your <span className="italic text-orange">journey.</span>
          </>
        }
        subtitle="Tell us where you are and where you're headed. We'll take it from there."
        ctaLabel=""
        overlay="warm"
        tone="dark"
        minHeight="min-h-[100svh]"
        showScroll
      />

      <section className="py-24 md:py-32 bg-cream">
        <div className="container-syc grid gap-14 lg:grid-cols-[1.4fr_1fr] items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">
              Enquiry form
            </p>
            <h2 className="mt-4 text-display text-4xl md:text-5xl text-charcoal">
              Four fields. One next step.
            </h2>
            <p className="mt-4 text-charcoal/70 max-w-xl">
              Applications go straight to our program team. Expect a response within three
              working days.
            </p>
            <div className="mt-10">
              <JoinEnquiryForm />
            </div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-charcoal text-warm p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Prefer to reach out directly?
              </p>
              <h3 className="mt-4 text-display text-3xl">We're on the platforms you use.</h3>
              <ul className="mt-8 space-y-4">
                <ContactLink
                  icon={Mail}
                  label="General enquiries"
                  value="Add me"
                  href="#contact-email"
                />
                <ContactLink
                  icon={Linkedin}
                  label="LinkedIn"
                  value="Synergy Youth Consulting"
                  href={LINKEDIN_URL}
                />
                <ContactLink
                  icon={Facebook}
                  label="Facebook"
                  value="Add here"
                  href="https://facebook.com"
                />
                <ContactLink
                  icon={MessageCircle}
                  label="WhatsApp Channel"
                  value="Add here"
                  href="https://whatsapp.com"
                />
              </ul>
            </div>

            <div className="rounded-3xl bg-warm border border-border p-8 transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(35,31,26,0.35)]">
              <MapPin className="h-6 w-6 text-orange" aria-hidden />
              <h3 className="mt-4 text-display text-2xl text-charcoal">Based in Addis Ababa</h3>
              <p className="mt-2 text-charcoal/70">
                Serving a growing community of young people across Africa and Asia.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Facebook;
  label: string;
  value: string;
  href: string;
}) {
  const external = href.startsWith("http");
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group flex items-center gap-4 rounded-2xl border border-warm/10 bg-warm/5 p-4 hover:bg-warm/10 transition-all duration-300 hover:-translate-y-0.5"
      >
        <span className="grid place-items-center h-11 w-11 rounded-xl bg-orange text-warm transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="flex-1">
          <span className="block text-xs uppercase tracking-widest text-warm/60">{label}</span>
          <span className="block font-semibold text-warm group-hover:text-orange transition-colors">
            {value}
          </span>
        </span>
      </a>
    </li>
  );
}
