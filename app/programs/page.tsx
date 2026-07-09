import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Apply for a Purple Heart Project woodworking scholarship or submit a Blue Chip Recommendation for a deserving combat-wounded veteran.",
};

export default function ProgramsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-dark py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Programs</h1>
        <p className="mt-4 text-white/70 max-w-xl mx-auto text-lg">
          Connecting combat-wounded veterans with the healing power of hand tool
          woodworking through scholarships and community nominations.
        </p>
      </section>

      {/* Scholarship Application */}
      <section
        id="scholarship"
        className="bg-white py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <div className="mx-auto max-w-3xl">
          <div className="inline-block bg-brand-light text-brand text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            For Veterans
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Scholarship Application
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              The Purple Heart Project Scholarship covers the full cost of
              attending a PHP woodworking program — including tools, materials,
              instruction, and in some cases travel and lodging — for eligible
              combat-wounded veterans.
            </p>
            <p>
              Our programs are designed specifically for veterans who are still
              suffering from the physical and mental effects of combat. No prior
              woodworking experience is required — just a willingness to engage
              with the process.
            </p>
          </div>

          <div className="mt-8 bg-brand-light rounded-2xl p-7 space-y-4">
            <h3 className="font-semibold text-gray-900 text-lg">
              Eligibility Requirements
            </h3>
            <ul className="space-y-2">
              {[
                "Physically and/or mentally combat-wounded veteran",
                "Still experiencing negative effects of combat (PTSD, TBI, physical injury, etc.)",
                "U.S. military veteran (any branch)",
                "Willing to commit to the full program duration",
              ].map((req) => (
                <li key={req} className="flex items-start gap-3 text-gray-700 text-sm">
                  <span className="w-1.5 h-1.5 rounded-md bg-gold mt-1.5 shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-white font-semibold hover:bg-gold-dark transition-colors shadow"
            >
              Apply Now — Contact Us to Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Blue Chip Recommendation */}
      <section
        id="blue-chip"
        className="bg-brand-light py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <div className="mx-auto max-w-3xl">
          <div className="inline-block bg-gold/20 text-gold-dark text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            For Supporters
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Submit a Blue Chip Recommendation
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Do you know a combat-wounded veteran who would benefit from the
              Purple Heart Project? Submit a Blue Chip Recommendation to
              nominate them for a scholarship.
            </p>
            <p>
              Blue Chip nominations can come from fellow veterans, family
              members, healthcare providers, VSOs, or anyone in the community
              who knows a veteran who is still struggling with the effects of
              combat.
            </p>
          </div>

          <div className="mt-8 bg-white rounded-2xl p-7 space-y-4 shadow-sm">
            <h3 className="font-semibold text-gray-900 text-lg">
              What to Include in Your Recommendation
            </h3>
            <ul className="space-y-2">
              {[
                "Veteran's name and branch of service",
                "Brief description of their combat-related challenges",
                "Why you believe the PHP program would help them",
                "Your contact information and relationship to the veteran",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                  <span className="w-1.5 h-1.5 rounded-md bg-gold mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-white font-semibold hover:bg-gold-dark transition-colors shadow"
            >
              Submit a Blue Chip Recommendation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
