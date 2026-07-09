import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Share2, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Fundraising",
  description:
    "Start a peer-to-peer fundraiser for the Purple Heart Project and help combat-wounded veterans find peace through woodworking.",
};

export default function FundraisingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-dark py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Fundraising</h1>
        <p className="mt-4 text-white/70 max-w-xl mx-auto text-lg">
          Rally your community to support combat-wounded veterans through peer
          to peer fundraising.
        </p>
      </section>

      {/* Peer to Peer */}
      <section
        id="peer"
        className="bg-white py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Peer to Peer Fundraising
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10 max-w-2xl">
            Peer to peer fundraising lets you create a personal fundraising page
            and share it with your friends, family, and network. Every dollar
            you raise goes directly to funding PHP scholarships, tools, and
            programs for combat-wounded veterans.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Users,
                title: "Create Your Page",
                description:
                  "Set up a personal fundraising page in minutes. Tell your story and explain why you support the PHP.",
              },
              {
                icon: Share2,
                title: "Share With Your Network",
                description:
                  "Share your page via email, social media, or text message and invite others to contribute.",
              },
              {
                icon: Trophy,
                title: "Make an Impact",
                description:
                  "Watch your fundraising grow and know that every dollar helps a combat-wounded veteran find peace.",
              },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="bg-brand-light rounded-2xl p-7 text-center"
                >
                  <div className="w-12 h-12 rounded-md bg-gold text-white flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-white border border-neutral-200 rounded-md p-8 text-center">
            <h3 className="text-2xl font-bold text-brand mb-3">
              Start Your Fundraiser
            </h3>
            <p className="text-brand-mid max-w-md mx-auto mb-6">
              Ready to make a difference? Contact us to set up your peer to peer
              fundraising page today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-gold px-7 py-3 text-white font-semibold hover:bg-gold-dark transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/donate"
                className="rounded-md border-2 border-neutral-300 px-7 py-3 text-brand font-semibold hover:bg-brand-light transition-colors inline-flex items-center gap-2"
              >
                Other Ways to Give <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
