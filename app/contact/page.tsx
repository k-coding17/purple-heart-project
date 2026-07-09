import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Purple Heart Project. We're here for veterans, families, volunteers, and supporters.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(253) 381-4113",
    sub: "Leave a message and we'll get back to you",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@ThePurpleHeartProject.org",
    sub: "We respond within 1–2 business days",
  },
  {
    icon: MapPin,
    label: "Mailing Address",
    value: "P.O. Box 61",
    sub: "Hilo, HI 96721",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-dark py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h1>
        <p className="mt-4 text-white/70 max-w-xl mx-auto text-lg">
          Whether you&rsquo;re a veteran, supporter, volunteer, or press — we&rsquo;d love
          to hear from you.
        </p>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  I am a…
                </label>
                <select className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent text-gray-700">
                  <option value="">Select one</option>
                  <option>Combat-Wounded Veteran (Scholarship Inquiry)</option>
                  <option>Family Member / Caregiver</option>
                  <option>Supporter / Donor</option>
                  <option>Volunteer / Bench Brigade</option>
                  <option>Nominating a Veteran (Blue Chip)</option>
                  <option>Media / Press</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-gold py-3.5 text-white font-semibold hover:bg-gold-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-light flex items-center justify-center shrink-0">
                      <Icon className="text-brand w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-semibold text-gray-900">{item.value}</p>
                      <p className="text-sm text-gray-500">{item.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Crisis note */}
            <div className="mt-10 rounded-2xl bg-brand-light border border-neutral-200 p-6">
              <p className="font-semibold text-brand mb-1">
                Are You in Crisis?
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                If you or a veteran you know is in crisis, please call the{" "}
                <strong>Veterans Crisis Line at 988 (Press 1)</strong> or text{" "}
                <strong>838255</strong>. Help is available 24/7.
              </p>
            </div>

            {/* Follow us */}
            <div className="mt-8">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Follow Us
              </p>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand font-medium text-sm hover:underline"
              >
                X (Twitter) →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
