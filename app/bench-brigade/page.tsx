import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Hammer, Package, ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Bench Brigade",
  description:
    "The Bench Brigade builds and delivers hand-crafted benches to combat-wounded veterans as a symbol of honor, remembrance, and community.",
};

const deliveryYears = [
  { year: "2025", href: "/gallery#2025" },
  { year: "2024", href: "/gallery#2024" },
  { year: "2023", href: "/gallery#2023" },
];

export default function BenchBrigadePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-dark py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Bench Brigade</h1>
        <p className="mt-4 text-white/70 max-w-xl mx-auto text-lg">
          Building benches. Honoring heroes. Strengthening community.
        </p>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-white py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About the Bench Brigade
          </h2>
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>
              The Bench Brigade is a community initiative of the Purple Heart
              Project in which volunteers — woodworkers, veterans, and
              supporters — come together to build and deliver hand-crafted wooden
              benches to combat-wounded veterans.
            </p>
            <p>
              Each bench is a tangible symbol: a reminder to the veteran
              receiving it that they are honored, remembered, and never alone.
              The act of building and delivering the bench creates connection
              between veterans and the communities that support them.
            </p>
            <p>
              The Bench Brigade also gives community woodworkers a way to
              contribute their skills in a deeply meaningful way — building
              something real for someone who sacrificed everything.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-3 text-white font-semibold hover:bg-gold-dark transition-colors"
            >
              Get Involved <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Hammer,
                step: "1",
                title: "Volunteers Build",
                description:
                  "Community woodworkers use traditional hand tools to build sturdy, beautiful benches following PHP plans and specifications.",
              },
              {
                icon: Package,
                step: "2",
                title: "Benches Are Delivered",
                description:
                  "Completed benches are delivered directly to combat-wounded veterans, often in a ceremony that honors their service.",
              },
              {
                icon: ImageIcon,
                step: "3",
                title: "Stories Are Shared",
                description:
                  "Delivery pictures and veteran stories are shared in our gallery so the community can see the impact of their work.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 shadow-sm text-center"
                >
                  <div className="w-12 h-12 rounded-md bg-gold text-white flex items-center justify-center text-lg font-bold mx-auto mb-5">
                    {item.step}
                  </div>
                  <Icon
                    className="text-brand w-6 h-6 mx-auto mb-3"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section
        id="resources"
        className="bg-white py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Bench Builders Resources
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Everything you need to build a bench for the Bench Brigade — plans,
            tool lists, wood specifications, and assembly guides.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Bench Building Plans (PDF)",
              "Recommended Hand Tool List",
              "Wood Species & Specifications",
              "Step-by-Step Assembly Guide",
              "Finishing & Delivery Checklist",
              "Bench Brigade FAQ",
            ].map((resource) => (
              <a
                key={resource}
                href="#"
                className="flex items-center justify-between border border-gray-200 rounded-xl px-5 py-4 hover:border-brand hover:bg-brand-light transition-colors group"
              >
                <span className="font-medium text-gray-800 group-hover:text-brand text-sm">
                  {resource}
                </span>
                <span className="text-xs text-gray-400 group-hover:text-brand">
                  Download
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery pictures links */}
      <section
        id="deliveries"
        className="bg-brand-dark py-16 px-4 sm:px-6 lg:px-8 scroll-mt-16 text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-6">
          Bench Delivery Pictures
        </h2>
        <p className="text-white/70 max-w-md mx-auto mb-8">
          See the smiles, the handshakes, and the moments of connection when
          veterans receive their benches.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {deliveryYears.map((y) => (
            <Link
              key={y.year}
              href={y.href}
              className="rounded-md border border-white/40 px-7 py-2.5 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              {y.year} Deliveries
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
