import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the Purple Heart Project — what we do, our origin story, financials, and how we serve combat-wounded veterans through woodworking therapy.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-dark py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">About Us</h1>
        <p className="mt-4 text-white/70 max-w-xl mx-auto text-lg">
          Serving those who served — through the peace and joy of hand tool
          woodworking.
        </p>
      </section>

      {/* What is the PHP */}
      <section
        id="what-is-php"
        className="bg-white py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What is the PHP?
          </h2>
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>
              The Purple Heart Project (PHP) is a nonprofit organization
              dedicated to introducing physically and mentally combat-wounded
              veterans — still suffering from the negative effects of combat —
              to the peace and joy that can be found through the therapy of
              traditional hand tool woodworking.
            </p>
            <p>
              Working with hand tools could be called quiet woodworking. To a
              combat-wounded veteran, sometimes that quiet and the focusing of
              the mind is just what he or she needs to see beyond the physical
              and mental pain of their day-to-day life.
            </p>
            <p>
              While there isn&rsquo;t actual medical data about woodworking as a
              therapy, the craft allows people to divert their anxieties in a
              creative manner, let themselves get busy on a project, and
              eventually take pride in the result of their hard work.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/programs#scholarship"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-3 text-white font-semibold hover:bg-gold-dark transition-colors"
            >
              Apply Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section
        id="origin"
        className="bg-brand-light py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Origin Story
          </h2>
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>
              The Purple Heart Project was founded in 2016 with a simple but
              powerful idea: that the focused, meditative practice of hand tool
              woodworking could provide genuine healing for veterans suffering
              from the invisible wounds of war — PTSD, TBI, and the deep
              disorientation of returning to civilian life.
            </p>
            <p>
              What began as a small, passionate effort has grown into a
              nationally recognized program that has helped hundreds of
              combat-wounded veterans find peace, purpose, and community through
              the bond of woodworking.
            </p>
            <p>
              We have been helping physically and mentally combat-wounded
              veterans find the peace and joy they deserve through hand tool
              woodworking since 2016.
            </p>
          </div>
        </div>
      </section>

      {/* Financials */}
      <section
        id="financials"
        className="bg-white py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Financials &amp; Reporting
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            The Purple Heart Project is committed to full transparency. We
            publish our financial reports and governing documents so that donors,
            veterans, and the public can see exactly how contributions are used
            to serve combat-wounded veterans.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Annual Report", "Form 990", "Audited Financials", "IRS Determination Letter"].map(
              (doc) => (
                <a
                  key={doc}
                  href="#"
                  className="flex items-center justify-between border border-gray-200 rounded-xl px-5 py-4 hover:border-brand hover:bg-brand-light transition-colors group"
                >
                  <span className="font-medium text-gray-800 group-hover:text-brand">
                    {doc}
                  </span>
                  <ExternalLink size={15} className="text-gray-400 group-hover:text-brand" />
                </a>
              )
            )}
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Additional financial details are available on our{" "}
            <a
              href="https://www.candid.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Candid (GuideStar) profile
            </a>
            .
          </p>
        </div>
      </section>

      {/* Flyers */}
      <section
        id="flyers"
        className="bg-brand-light py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Flyers &amp; Info Cards
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Download and share these materials to spread the word about the
            Purple Heart Project and help reach the veterans who need us most.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "PHP Program Overview Flyer",
              "Scholarship Info Card",
              "Bench Brigade Flyer",
              "Donor Information Sheet",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="flex items-center justify-between border border-gray-200 bg-white rounded-xl px-5 py-4 hover:border-brand hover:bg-white transition-colors group"
              >
                <span className="font-medium text-gray-800 group-hover:text-brand text-sm">
                  {item}
                </span>
                <span className="text-xs text-gray-400 group-hover:text-brand font-medium">
                  Download PDF
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
