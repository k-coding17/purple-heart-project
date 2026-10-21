"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="mt-8 text-sm font-semibold text-brand" role="status">
        Thank you for signing up.
      </p>
    );
  }

  return (
    <form
      className="mt-8 flex flex-col sm:flex-row gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        if (email.trim()) setSubmitted(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email address"
        className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm text-brand focus:outline-none focus:ring-2 focus:ring-brand"
      />
      <button
        type="submit"
        className="shrink-0 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-white hover:bg-gold-dark transition-colors"
      >
        Sign up
      </button>
    </form>
  );
}
