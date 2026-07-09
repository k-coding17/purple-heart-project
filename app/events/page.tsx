import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description:
    "Stay up to date with Purple Heart Project events, workshops, bench deliveries, and fundraisers.",
};

const events = [
  {
    date: "May 10, 2026",
    title: "Spring Woodworking Workshop",
    location: "Hilo, HI",
    description:
      "A week-long hand tool woodworking scholarship program for combat-wounded veterans. Applications closed — check back for the next session.",
    type: "Workshop",
  },
  {
    date: "June 14, 2026",
    title: "Bench Brigade Build Day",
    location: "Portland, OR",
    description:
      "Community volunteers come together to build benches for upcoming veteran deliveries. All skill levels welcome.",
    type: "Bench Brigade",
  },
  {
    date: "July 4, 2026",
    title: "Bench Delivery Ceremony",
    location: "Sacramento, CA",
    description:
      "Annual Independence Day bench delivery ceremony honoring combat-wounded veterans in the Sacramento area.",
    type: "Delivery",
  },
];

const typeColors: Record<string, string> = {
  Workshop: "bg-brand-light text-brand",
  "Bench Brigade": "bg-amber-50 text-amber-700",
  Delivery: "bg-green-50 text-green-700",
};

export default function EventsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-dark py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Upcoming Events</h1>
        <p className="mt-4 text-white/70 max-w-xl mx-auto text-lg">
          Workshops, build days, bench deliveries, and community gatherings.
        </p>
      </section>

      {/* Events list */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="border border-gray-100 rounded-2xl p-7 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                    typeColors[event.type] ?? "bg-gray-100 text-gray-600"
                  }`}
                >
                  {event.type}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Calendar size={12} />
                  {event.date}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <MapPin size={12} />
                  {event.location}
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {event.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}

          {events.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <Calendar size={40} className="mx-auto mb-4 opacity-30" />
              <p>No upcoming events at this time. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stay updated CTA */}
      <section className="bg-brand-light border-t border-neutral-200 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-brand">
          Stay Updated
        </h2>
        <p className="mt-3 text-brand-mid max-w-md mx-auto">
          Want to be notified of future workshops, build days, and events?
          Reach out and we&rsquo;ll add you to our mailing list.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3 text-white font-semibold hover:bg-gold-dark transition-colors"
        >
          Contact Us <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
