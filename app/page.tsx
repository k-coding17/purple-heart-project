import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Heart,
  Hammer,
  Users,
  Quote,
  BadgeCheck,
  Flag,
  Landmark,
  User,
  Megaphone,
} from "lucide-react";
import Sponsors from "@/components/Sponsors";
import NewsletterSignup from "@/components/NewsletterSignup";

const testimonials = [
  {
    quote:
      "You have not only taught me how to work wood with hand tools, but you have also shown me how to work through my PTSD. Thank you for that. That is something I can never repay you in any lifetime. My wife told me that since I started using only hand tools, I have become more relaxed and that my nightmares have been reduced.",
    attribution: "PHP Scholarship Recipient",
  },
  {
    quote:
      "You suddenly find yourself in a really disruptive life that you're not used to visiting. Things are different. Life is different. Woodworking and using hand tools has been a turning point for me facing daily battles of recovery from combat.",
    attribution: "Mark, Army Veteran, Idaho",
  },
  {
    quote:
      "PTSD and TBI aren't visible. A lot of people think maybe some are faking it because you can't see physical scars or missing limbs, but that is so far from the truth. Everything we've done this week with learning woodworking has contributed to not only helping me regain some of the peace I have been missing in my life, but it has given me a sense of being valuable and able to do something.",
    attribution: "Bill, Army Veteran, Nebraska",
  },
];

const helpWays = [
  {
    icon: Heart,
    title: "Give",
    description:
      "Fund a veteran's week in the shop, a premium hand-tool kit, or the lumber for a bench. Every dollar goes to the program.",
    href: "/donate",
    cta: "Ways to give",
  },
  {
    icon: Hammer,
    title: "Volunteer & the Bench Brigade",
    description:
      "Past students return to assist in class. Bench Brigade volunteers build and hand-deliver a workbench to each graduate's home.",
    href: "/bench-brigade",
    cta: "Get involved",
  },
  {
    icon: Megaphone,
    title: "Spread the word",
    description:
      "Tell a veteran who needs this. Bring the PHP to your civic club, VFW, or American Legion post with ready-made materials.",
    href: "/about#flyers",
    cta: "Downloadable materials",
  },
];

const credentials = [
  {
    icon: BadgeCheck,
    label: "US 501(c)3 Non-Profit Organization",
  },
  {
    icon: Flag,
    label: "Canadian Registered Charity",
  },
  {
    icon: Landmark,
    label: "US Federal Tax ID 88-2217122",
  },
];

const highlights = [
  {
    icon: Hammer,
    title: "Hand Tool Woodworking",
    description:
      "Traditional hand-tool woodworking offers combat-wounded veterans a rewarding blend of therapeutic, emotional, and practical benefits. Shaping wood with only hand tools—without the dust, danger, and noise of power tools—focuses the mind and develops skills. It can be transformative by helping veterans address combat trauma, rebuild confidence, and experience a renewed sense of purpose and connection.",
  },
  {
    icon: Heart,
    title: "Healing Through Craft",
    description:
      "The quiet, focused practice of crafting wood by hand provides a calming, meditative outlet for veterans coping with the lasting effects of combat. The deliberate pace of hand-tool work offers a peaceful respite and channels anxious energy into purposeful, creative action. Many veterans report reduced nightmares, greater relaxation, and a sense of peace after engaging in this craft.",
  },
  {
    icon: Users,
    title: "Community and Connection",
    description:
      "PHP provides selected combat-wounded veterans with free woodworking training retreats and tools. Training alongside other combat-wounded peers who “get it” — strengthens resilience and fosters long-term support networks. Continued connection after training reminds veterans that they remain part of a community and are never alone or forgotten.",
  },
];

const veteranStories: {
  id: string;
  name: string;
  beforeSrc?: string;
  afterSrc?: string;
}[] = [
  { id: "story-1", name: "Veteran name" },
  { id: "story-2", name: "Veteran name" },
  { id: "story-3", name: "Veteran name" },
];

/** Repeated so one loop is wider than the screen and the drift has no gap. */
const storyLoop = [...veteranStories, ...veteranStories];
const marqueeStories = [...storyLoop, ...storyLoop];

const journeyLinks = [
  { href: "/about", label: "Learn More about PHP" },
  { href: "/programs", label: "Explore our Program" },
  { href: "/programs#scholarship", label: "Apply for a PHP scholarship" },
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

function StoryPhoto({
  label,
  src,
}: {
  label: "Before" | "After";
  src?: string;
}) {
  return (
    <figure>
      <div className="relative aspect-[3/4] overflow-hidden rounded-md border border-dashed border-neutral-300 bg-brand-light">
        {src ? (
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 768px) 200px, 40vw"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 px-2 text-center">
            <User className="h-8 w-8 text-brand-mid" strokeWidth={1.5} />
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-mid">
              {label} photo
            </span>
          </div>
        )}
      </div>
      <figcaption className="mt-2 text-center text-xs font-semibold uppercase tracking-wide text-brand">
        {label}
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero — photo with overlaid text */}
      <section className="relative min-h-[28rem] md:min-h-[34rem] overflow-hidden bg-brand-dark">
        <Image
          src="/hero-workbench1.png"
          alt="Hand tools, wood shavings, and military memorabilia on a workbench"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="relative mx-auto flex min-h-[28rem] md:min-h-[34rem] max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-lg md:max-w-md lg:max-w-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)]">
              Serving Combat-Wounded Veterans
            </h1>
            <p className="mt-5 text-base md:text-lg text-white leading-relaxed max-w-md drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)]">
              Empowering combat-wounded veterans through woodworking and
              community
            </p>
            <Link
              href="/programs#scholarship"
              className="mt-8 inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-black hover:bg-white/90 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-neutral-200 py-8 px-4 sm:px-6 lg:px-8">
        <ul className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {credentials.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gold-light">
                  <Icon className="text-gold h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="text-sm font-semibold text-brand leading-snug">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Mission — WWP-style empowering block */}
      <section className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-brand leading-tight">
            What PHP Does
          </h2>
          <p className="mt-6 text-brand-mid leading-relaxed max-w-3xl mx-auto">
            We introduce physically and mentally combat-wounded veterans, still
            suffering from the negative effects of combat to the joy and peace
            that can be found through the therapy of traditional hand tool
            woodworking. We achieve this by providing combat-wounded veterans
            with woodworking training, hand tools, workbenches, and a lifelong
            community so they may find peace through craft and know they are
            never alone or forgotten.
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

      <section className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-brand">
            In Their Words
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <article
                key={item.attribution}
                className="flex flex-col rounded-md border border-neutral-200 bg-brand-light p-6"
              >
                <Quote
                  className="text-gold mb-4 h-7 w-7 opacity-50"
                  strokeWidth={1.5}
                />
                <blockquote className="flex-1 text-sm leading-relaxed text-brand">
                  {item.quote}
                </blockquote>
                <footer className="mt-6 border-t border-neutral-300 pt-4 text-sm font-semibold text-gold">
                  {item.attribution}
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-10 text-center">
          <div>
            <p className="text-5xl md:text-6xl font-bold text-white">260</p>
            <p className="mt-3 text-white font-semibold">
              Combat-wounded Veterans
            </p>
            <p className="mt-1 text-sm text-white/70">Served since 2016</p>
          </div>
          <div>
            <p className="text-5xl md:text-6xl font-bold text-white">42</p>
            <p className="mt-3 text-white font-semibold">PHP Scholarships</p>
            <p className="mt-1 text-sm text-white/70">Awarded Annually</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 border-b border-neutral-200">
        <h2 className="px-4 text-center text-2xl md:text-3xl font-bold text-brand">
          Who We Serve
        </h2>
        <div className="story-marquee relative mt-10">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28"
            aria-hidden="true"
          />
          <ul
            className="story-marquee-track items-stretch py-3"
            aria-label="Before and after portraits of veterans served"
          >
            {marqueeStories.map((story, index) => {
              const decorative = index >= storyLoop.length;
              return (
                <li
                  key={`${story.id}-${index}`}
                  className={`mx-3 w-72 shrink-0 ${
                    decorative ? "story-marquee-duplicate" : ""
                  }`}
                  aria-hidden={decorative || undefined}
                >
                  <article className="h-full rounded-md border border-neutral-200 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md">
                    <div className="grid grid-cols-2 gap-3">
                      <StoryPhoto label="Before" src={story.beforeSrc} />
                      <StoryPhoto label="After" src={story.afterSrc} />
                    </div>
                    <p className="mt-4 text-center text-sm font-semibold text-brand">
                      {story.name}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-8 px-4 text-center">
          <Link
            href="/gallery#wall-of-heroes"
            className="inline-flex text-gold font-semibold text-sm hover:underline underline-offset-4"
          >
            Click here to see our Wall of Heroes we have served
          </Link>
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand">
              What Veterans Find Here
            </h2>
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

      <section className="bg-brand-light py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-brand">
            How You Can Help – Get Involved
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {helpWays.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex flex-col rounded-md border border-neutral-200 bg-white p-8"
                >
                  <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-gold-light">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  </span>
                  <h3 className="text-lg font-bold text-brand">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-mid">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-gold hover:gap-2 transition-all"
                  >
                    {item.cta} <ArrowRight size={14} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand">
            Trusted and Transparent Stewardship
          </h2>
          <p className="mt-6 text-brand-mid leading-relaxed">
            We work hard to be worthy of your trust and are committed to
            transparency and fiscal responsibility. We are proud to be Charity
            Navigator 4-star charity, a platinum transparency rating by Candid,
            and to report that 86% of every dollar donation in 2026 was applied
            directly to support the combat-veterans we served.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <Link
              href="/about#financials"
              className="text-gold font-semibold text-sm hover:underline underline-offset-4"
            >
              See our financials
            </Link>
            <a
              href="https://app.candid.org/profile/14533139/purple-heart-project-88-2217122"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-semibold text-sm hover:underline underline-offset-4"
            >
              Learn about our rating
            </a>
          </div>
        </div>
      </section>

      <Sponsors />

      <section className="bg-brand-light py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand">
            Stay in Contact with PHP
          </h2>
          <NewsletterSignup />
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-md border border-brand px-6 py-3 text-sm font-semibold text-brand hover:bg-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
