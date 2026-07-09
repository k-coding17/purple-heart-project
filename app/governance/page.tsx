import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "Meet the Purple Heart Project Board of Directors, key volunteers, and access governing documents.",
};

const boardMembers = [
  { name: "Board Member Name", title: "President / Founder" },
  { name: "Board Member Name", title: "Vice President" },
  { name: "Board Member Name", title: "Secretary" },
  { name: "Board Member Name", title: "Treasurer" },
  { name: "Board Member Name", title: "Director at Large" },
];

const keyVolunteers = [
  { name: "Volunteer Name", role: "Program Coordinator" },
  { name: "Volunteer Name", role: "Bench Brigade Lead" },
  { name: "Volunteer Name", role: "Scholarship Committee" },
  { name: "Volunteer Name", role: "Events & Outreach" },
];

const documents = [
  "Articles of Incorporation",
  "Bylaws",
  "Conflict of Interest Policy",
  "IRS Determination Letter (501c3)",
  "Annual Report",
];

export default function GovernancePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-dark py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Governance</h1>
        <p className="mt-4 text-white/70 max-w-xl mx-auto text-lg">
          The people and principles that guide the Purple Heart Project.
        </p>
      </section>

      {/* Board of Directors */}
      <section
        id="board"
        className="bg-white py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Board of Directors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {boardMembers.map((member, i) => (
              <div
                key={i}
                className="bg-brand-light rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 rounded-md bg-gold/20 mx-auto mb-4" />
                <p className="font-semibold text-gray-900">{member.name}</p>
                <p className="text-sm text-brand mt-1">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Volunteers */}
      <section
        id="volunteers"
        className="bg-brand-light py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Key Volunteers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {keyVolunteers.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 rounded-md bg-gold-light mx-auto mb-4" />
                <p className="font-semibold text-gray-900">{v.name}</p>
                <p className="text-sm text-gray-500 mt-1">{v.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governing Documents */}
      <section
        id="documents"
        className="bg-white py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Governing Documents
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The Purple Heart Project is committed to transparency and
            accountability. Our governing documents are available for public
            review.
          </p>
          <div className="space-y-3">
            {documents.map((doc) => (
              <a
                key={doc}
                href="#"
                className="flex items-center justify-between border border-gray-200 rounded-xl px-5 py-4 hover:border-brand hover:bg-brand-light transition-colors group"
              >
                <span className="font-medium text-gray-800 group-hover:text-brand">
                  {doc}
                </span>
                <ExternalLink
                  size={15}
                  className="text-gray-400 group-hover:text-brand"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
