"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { whatsappHref } from "@/lib/site";
import { cn } from "@/lib/cn";

type Field = "name" | "email" | "phone" | "scope" | "message";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "submitting" | "success";

const scopes = [
  "New construction",
  "Interiors / fit-out",
  "Modular kitchen",
  "Renovation",
  "Not sure yet",
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[0-9+\-\s]{7,15}$/;

function validate(values: Record<Field, string>): Errors {
  const e: Errors = {};
  if (!values.name.trim()) e.name = "Please tell us your name.";
  if (!values.email.trim()) e.email = "We need an email to reply.";
  else if (!emailRe.test(values.email)) e.email = "That email doesn't look right.";
  if (values.phone && !phoneRe.test(values.phone))
    e.phone = "Use digits, spaces or +, 7–15 long.";
  if (!values.message.trim()) e.message = "A line or two about your project helps.";
  return e;
}

const initial: Record<Field, string> = {
  name: "",
  email: "",
  phone: "",
  scope: scopes[0]!,
  message: "",
};

export function ContactForm() {
  const reduce = useReducedMotion();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function update(field: Field, value: string) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (touched[field]) setErrors(validate(next));
  }

  function blur(field: Field) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(values));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, phone: true, message: true });
    if (Object.keys(found).length) return;

    setStatus("submitting");
    // No backend wired yet — hand the enquiry to WhatsApp, the channel this
    // business already uses. Swap for a POST to /api/contact when ready.
    const text = `New enquiry from ${values.name}%0A${values.scope}%0A${values.message}%0A${values.email}${values.phone ? " · " + values.phone : ""}`;
    window.setTimeout(() => {
      setStatus("success");
      window.open(whatsappHref(decodeURIComponent(text)), "_blank", "noopener");
    }, 700);
  }

  if (status === "success") {
    return (
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        className="flex h-full flex-col items-start justify-center rounded-card border border-line bg-surface p-8"
        role="status"
        aria-live="polite"
      >
        <span className="grid h-12 w-12 place-items-center rounded-full bg-success text-paper">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h3 className="mt-5 text-h3">Thanks, {values.name.split(" ")[0]}.</h3>
        <p className="mt-2 text-body text-ink-soft">
          We&rsquo;ve opened WhatsApp so you can send your details to our team
          directly. We typically reply the same working day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-card border border-line bg-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id="name" label="Name" value={values.name} error={touched.name ? errors.name : undefined} onChange={(v) => update("name", v)} onBlur={() => blur("name")} autoComplete="name" />
        <TextField id="phone" label="Phone (optional)" value={values.phone} error={touched.phone ? errors.phone : undefined} onChange={(v) => update("phone", v)} onBlur={() => blur("phone")} autoComplete="tel" inputMode="tel" />
      </div>

      <div className="mt-5">
        <TextField id="email" label="Email" type="email" value={values.email} error={touched.email ? errors.email : undefined} onChange={(v) => update("email", v)} onBlur={() => blur("email")} autoComplete="email" inputMode="email" />
      </div>

      <div className="mt-5">
        <label htmlFor="scope" className="mb-1.5 block text-small font-medium text-forest">
          What do you need?
        </label>
        <select
          id="scope"
          value={values.scope}
          onChange={(e) => update("scope", e.target.value)}
          className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-body text-ink transition-colors duration-fast focus:border-forest"
        >
          {scopes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-small font-medium text-forest">
          About your project
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => blur("message")}
          aria-invalid={Boolean(touched.message && errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            "w-full rounded-xl border bg-paper px-4 py-3 text-body text-ink transition-colors duration-fast focus:border-forest",
            touched.message && errors.message ? "border-error" : "border-line",
          )}
          placeholder="Plot size, location, rough budget or timeline — whatever you have."
        />
        {touched.message && errors.message ? (
          <p id="message-error" className="mt-1.5 text-small text-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-7 py-3.5 text-body font-medium text-paper shadow-soft transition-all duration-base ease-out hover:bg-forest-700 hover:shadow-lift disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper/40 border-t-paper" />
            Sending&hellip;
          </>
        ) : (
          "Send enquiry"
        )}
      </button>
      <p className="mt-3 text-center text-small text-ink-soft">
        Prefer to talk? Call or WhatsApp — details on the right.
      </p>
    </form>
  );
}

interface TextFieldProps {
  id: Field;
  label: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  type?: string;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "email";
}

function TextField({
  id,
  label,
  value,
  error,
  onChange,
  onBlur,
  type = "text",
  autoComplete,
  inputMode,
}: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-small font-medium text-forest">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full rounded-xl border bg-paper px-4 py-3 text-body text-ink transition-colors duration-fast focus:border-forest",
          error ? "border-error" : "border-line",
        )}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-small text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
