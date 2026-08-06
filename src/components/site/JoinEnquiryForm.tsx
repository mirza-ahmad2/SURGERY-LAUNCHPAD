import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const programs = [
  "Learning & Certification",
  "Mental Health Webinars",
  "Conference & Empowerment",
  "1:1 Youth Consulting",
];

export function JoinEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [program, setProgram] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!program) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl bg-charcoal text-warm p-10 md:p-14 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="h-14 w-14 mx-auto text-gold" strokeWidth={1.5} aria-hidden />
        <h3 className="mt-6 text-display text-4xl">You're in. Welcome to Synergy.</h3>
        <p className="mt-4 max-w-lg mx-auto text-warm/75">
          Thanks for reaching out. Our team will get back to you within 3 working days with
          next steps for your program of interest.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-warm border border-border p-8 md:p-12 shadow-[0_30px_80px_-40px_rgba(35,31,26,0.25)]"
      aria-label="Program enquiry form"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full name" name="name" placeholder="Amina Okoye" required />
        <Field
          label="Email address"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          autoComplete="email"
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="program"
          className="block text-xs font-semibold uppercase tracking-[0.25em] text-charcoal/70"
        >
          Program of interest
        </label>
        <input type="hidden" name="program" value={program} required />
        <Select value={program || undefined} onValueChange={setProgram}>
          <SelectTrigger
            id="program"
            className="mt-2 h-auto w-full rounded-2xl border border-border bg-cream px-5 py-4 text-base font-medium text-charcoal shadow-none focus:ring-2 focus:ring-orange/40 focus:border-orange data-[placeholder]:text-charcoal/40 [&>svg]:text-orange [&>svg]:opacity-100"
          >
            <SelectValue placeholder="Select a program…" />
          </SelectTrigger>
          <SelectContent
            className="rounded-2xl border border-border bg-cream text-charcoal shadow-[0_20px_50px_-20px_rgba(35,31,26,0.35)] overflow-hidden"
            position="popper"
          >
            {programs.map((p) => (
              <SelectItem
                key={p}
                value={p}
                className="cursor-pointer rounded-xl mx-1 my-0.5 px-4 py-3 text-base text-charcoal focus:bg-orange focus:text-warm data-[highlighted]:bg-orange data-[highlighted]:text-warm data-[state=checked]:bg-orange/15 data-[state=checked]:text-orange"
              >
                {p}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-[0.25em] text-charcoal/70"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a bit about your goals and how we can support you…"
          className="mt-2 w-full rounded-2xl border border-border bg-cream px-5 py-4 text-charcoal focus:border-orange transition-colors resize-none"
        />
      </div>

      <button type="submit" className="mt-8 btn-orange btn-orange-hover w-full md:w-auto min-h-12">
        Send enquiry <Send className="h-4 w-4" aria-hidden />
      </button>
      <p className="mt-4 text-xs text-charcoal/50">
        We'll only use your details to respond to your enquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold uppercase tracking-[0.25em] text-charcoal/70"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-2xl border border-border bg-cream px-5 py-4 text-charcoal placeholder:text-charcoal/40 focus:border-orange transition-colors min-h-12"
      />
    </div>
  );
}
