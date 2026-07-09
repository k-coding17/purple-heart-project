import type { Metadata } from "next";
import Link from "next/link";
import { Heart, RefreshCw, Users, Megaphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Ways to Donate",
  description:
    "Support the Purple Heart Project with a one-time or recurring donation. Every dollar helps combat-wounded veterans find peace through woodworking.",
};

const givingOptions = [
  {
    icon: Heart,
    title: "Make a Donation",
    description:
      "A one-time gift of any amount directly funds scholarships, hand tools, materials, and programs for combat-wounded veterans.",
    cta: "Donate Now",
    href: "#one-time",
    highlight: true,
  },
  {
    icon: RefreshCw,
    id: "monthly",
    title: "Monthly Giving",
    description:
      "Become a sustaining supporter. Monthly gifts provide reliable, ongoing funding that lets us plan programs and serve more veterans.",
    cta: "Give Monthly",
    href: "#monthly",
    highlight: false,
  },
  {
    icon: Users,
    id: "peer",
    title: "Peer to Peer",
    description:
      "Create a personal fundraising page and rally your community to support veterans in your name.",
    cta: "Start a Fundraiser",
    href: "/fundraising#peer",
    highlight: false,
  },
  {
    icon: Megaphone,
    id: "spread",
    title: "Get the Word Out",
    description:
      "Share the PHP story on social media, forward our emails, or hand out flyers. Awareness helps us reach the veterans who need us.",
    cta: "Download Flyers",
    href: "/about#flyers",
    highlight: false,
  },
];

const amounts = [25, 50, 100, 250, 500, 1000];

export default function DonatePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-dark py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Ways to Donate</h1>
        <p className="mt-4 text-white/70 max-w-xl mx-auto text-lg">
          Your support gives combat-wounded veterans access to the peace and joy
          of hand tool woodworking.
        </p>
      </section>

      {/* Quick donate widget */}
      <section id="one-time" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Make a Donation
          </h2>
          <p className="text-gray-500 mb-8 text-sm">
            Purple Heart Project is a 501(c)(3) nonprofit. Your gift is
            tax-deductible.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {amounts.map((amount) => (
              <button
                key={amount}
                className="rounded-xl border-2 border-gray-200 py-3 font-semibold text-gray-700 hover:border-brand hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand"
              >
                ${amount}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Or enter a custom amount"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-brand mb-6 text-center"
          />
          <button className="w-full rounded-md bg-gold py-3.5 text-white font-bold text-lg hover:bg-gold-dark transition-colors shadow-md">
            Donate Now
          </button>
          <p className="mt-4 text-xs text-gray-400">
            Secure payment processing. You will receive a receipt via email.
          </p>
        </div>
      </section>

      {/* Other ways to give */}
      <section className="bg-brand-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            More Ways to Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {givingOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.title}
                  id={"id" in option ? option.id : undefined}
                  className={`rounded-2xl p-7 ${
                    option.highlight ? "bg-gold text-white" : "bg-white shadow-sm"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 mb-4 ${option.highlight ? "text-gold" : "text-brand"}`}
                    strokeWidth={1.5}
                  />
                  <h3
                    className={`text-lg font-semibold mb-2 ${option.highlight ? "text-white" : "text-gray-900"}`}
                  >
                    {option.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-5 ${option.highlight ? "text-brand-mid" : "text-gray-600"}`}
                  >
                    {option.description}
                  </p>
                  <a
                    href={option.href}
                    className={`text-sm font-semibold underline underline-offset-2 ${
                      option.highlight
                        ? "text-gold hover:text-amber-300"
                        : "text-brand hover:text-brand-dark"
                    } transition-colors`}
                  >
                    {option.cta} →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
