import Link from "next/link";
import { ArrowRight, Heart, Hammer, Users, Quote } from "lucide-react";
import Sponsors from "@/components/Sponsors";

const testimonials = [
  {
    quote:
      "You have not only taught me how to work wood with hand tools, but you have also shown me how to work through my PTSD. Thank you for that. That is something I can never repay you in any lifetime. My wife told me that since I started using only hand tools, I have become more relaxed and that my nightmares have been reduced.",
    attribution: "PHP Scholarship Recipient",
  },
  {
    quote:
      "Woodworking and using hand tools has been a turning point for me facing daily battles of recovery from combat. You suddenly find yourself in a really disruptive life that you're not used to visiting. Things are different. Life is different.",
    attribution: "Army Vet Mark from Idaho — PHP Scholarship Recipient",
  },
];

const highlights = [
  {
    icon: Hammer,
    title: "Hand Tool Woodworking",
    description:
      "Traditional hand tool woodworking — quiet, focused, and meditative. For combat-wounded veterans, that stillness can be transformative.",
  },
  {
    icon: Heart,
    title: "Healing Through Craft",
    description:
      "Working with your hands diverts anxiety, builds focus, and produces real, tangible results veterans can be proud of.",
  },
  {
    icon: Users,
    title: "Community & Connection",
    description:
      "Veterans are connected through the PHP community so they know they are supported and never alone or forgotten.",
  },
];

const impactCards = [
  {
    title: "Donate",
    description:
      "We can't empower veterans without you. Support those who served with a one-time or recurring gift.",
    href: "/donate",
    cta: "Give now",
  },
  {
    title: "Apply",
    description:
      "Apply for a scholarship to attend a hand tool woodworking workshop and begin your journey.",
    href: "/programs#scholarship",
    cta: "Apply now",
  },
  {
    title: "Get Involved",
    description:
      "Join the Bench Brigade, explore peer-to-peer fundraising, or spread the word.",
    href: "/bench-brigade",
    cta: "Learn more",
  },
];

const journeyLinks = [
  { href: "/about#what-is-php", label: "Start Your Journey" },
  { href: "/programs", label: "Our Programs" },
  { href: "/gallery#wall-of-heroes", label: "See the Difference" },
];

const newsItems = [
  {
    date: "April 15, 2026",
    title: "Spring 2026 Scholarship Recipients Announced",
    href: "/news",
  },
  {
    date: "March 5, 2026",
    title: "2026 Bench Brigade Build Day Recap",
    href: "/news",
  },
  {
    date: "January 28, 2026",
    title: "PHP Earns Platinum Seal of Transparency from Candid",
    href: "/news",
  },
];

function FeaturedQuote({
  quote,
  attribution,
}: {
  quote: string;
  attribution: string;
}) {
  return (
    <section className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-y border-neutral-200">
      <div className="mx-auto max-w-3xl text-center">
        <Quote
          className="text-gold w-8 h-8 mx-auto mb-6 opacity-40"
          strokeWidth={1.5}
        />
        <blockquote className="text-xl md:text-2xl text-brand leading-relaxed font-medium italic">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <footer className="mt-6 text-brand-mid text-sm font-semibold uppercase tracking-wide">
          {attribution}
        </footer>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
              Serving Those Who Served
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Finding Peace &amp; Joy Through Hand Tool Woodworking
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-2xl">
              The Purple Heart Project introduces combat-wounded veterans to the
              peace and joy found through the therapy of traditional hand tool
              woodworking — and connects them to a community that never forgets.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
              <Link
                href="/programs#scholarship"
                className="rounded-md bg-gold px-6 py-3 text-white font-semibold hover:bg-gold-dark transition-colors text-sm"
              >
                Apply Now
              </Link>
              <Link
                href="/donate"
                className="rounded-md border border-white/40 px-6 py-3 text-white font-semibold hover:bg-white/10 transition-colors text-sm"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission — WWP-style empowering block */}
      <section className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-brand leading-tight">
            Empowering Veterans Through Woodworking, Community, and Support
          </h2>
          <p className="mt-6 text-brand-mid leading-relaxed max-w-3xl mx-auto">
            The Purple Heart Project introduces physically and mentally
            combat-wounded veterans to the peace and joy that can be found
            through traditional hand tool woodworking. From scholarships and
            hand tools to the Bench Brigade and a lifelong community — we help
            veterans find peace through craft and know they are never alone or
            forgotten.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {journeyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gold font-semibold text-sm hover:underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeaturedQuote
        quote={testimonials[0].quote}
        attribution={testimonials[0].attribution}
      />

      {/* Make an Impact */}
      <section className="bg-brand-light py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand text-center mb-3">
            Make an Impact
          </h2>
          <p className="text-brand-mid text-center max-w-xl mx-auto mb-10 text-sm">
            By donating, applying, or spreading the word, you help veterans
            find peace through woodworking.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-neutral-200 rounded-md p-8 flex flex-col"
              >
                <h3 className="text-lg font-bold text-brand">{card.title}</h3>
                <p className="mt-3 text-sm text-brand-mid leading-relaxed flex-1">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-1 text-gold font-semibold text-sm hover:gap-2 transition-all"
                >
                  {card.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand">
              How We Help
            </h2>
            <p className="mt-3 text-brand-mid max-w-2xl mx-auto text-sm">
              Working with hand tools is quiet woodworking — and for many
              combat-wounded veterans, that quiet is exactly what they need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="border border-neutral-200 rounded-md p-8"
                >
                  <div className="w-10 h-10 rounded-md bg-gold-light flex items-center justify-center mb-5">
                    <Icon className="text-gold w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-brand mb-3">
                    {item.title}
                  </h3>
                  <p className="text-brand-mid leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's New */}
      <section className="bg-brand-light py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand">
              What&apos;s New at PHP
            </h2>
            <Link
              href="/news"
              className="text-gold font-semibold text-sm hover:underline underline-offset-4 shrink-0"
            >
              View all news
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-white border border-neutral-200 rounded-md p-6 hover:border-gold transition-colors group"
              >
                <p className="text-xs text-brand-mid uppercase tracking-wide">
                  {item.date}
                </p>
                <h3 className="mt-2 text-brand font-semibold leading-snug group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1 text-gold text-sm font-semibold">
                  Read more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeaturedQuote
        quote={testimonials[1].quote}
        attribution={testimonials[1].attribution}
      />

      {/* Get Involved */}
      <section className="bg-brand-dark py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Get Involved with PHP
          </h2>
          <p className="mt-4 text-white/70 text-sm leading-relaxed">
            Whether you donate, volunteer with the Bench Brigade, or share our
            mission — every action helps a combat-wounded veteran find peace
            through woodworking.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/donate"
              className="rounded-md bg-gold px-6 py-3 text-white font-semibold hover:bg-gold-dark transition-colors text-sm"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/40 px-6 py-3 text-white font-semibold hover:bg-white/10 transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Sponsors />
    </>
  );
}
