import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Media",
  description:
    "The latest news, veteran stories, and media coverage from the Purple Heart Project.",
};

const categories = ["All", "Program Updates", "Veteran Stories", "Events", "Press", "Announcements"];

const articles = [
  {
    date: "April 15, 2026",
    category: "Program Updates",
    title: "Spring 2026 Scholarship Recipients Announced",
    excerpt:
      "The Purple Heart Project is proud to announce the recipients of the Spring 2026 woodworking scholarships — ten combat-wounded veterans who will participate in our next program.",
  },
  {
    date: "March 22, 2026",
    category: "Veteran Stories",
    title: "\"The Nightmares Have Been Reduced\" — A Veteran's Story",
    excerpt:
      "One PHP scholarship recipient shares how traditional hand tool woodworking helped him manage PTSD and rebuild a sense of calm in his daily life.",
  },
  {
    date: "March 5, 2026",
    category: "Events",
    title: "2026 Bench Brigade Build Day Recap",
    excerpt:
      "Over 40 volunteers gathered to build 12 benches for delivery to combat-wounded veterans across the Pacific Northwest.",
  },
  {
    date: "February 14, 2026",
    category: "Press",
    title: "PHP Featured in Military Times",
    excerpt:
      "The Purple Heart Project was highlighted in a Military Times feature on innovative veteran wellness programs across the country.",
  },
  {
    date: "January 28, 2026",
    category: "Announcements",
    title: "PHP Earns Platinum Seal of Transparency from Candid",
    excerpt:
      "For the third consecutive year, the Purple Heart Project has been awarded the Platinum Seal of Transparency, recognizing our commitment to accountability.",
  },
  {
    date: "January 10, 2026",
    category: "Veteran Stories",
    title: "From Afghanistan to the Workshop: Mark's Journey",
    excerpt:
      "Army Vet Mark from Idaho explains how woodworking became a turning point in facing daily battles of recovery from combat.",
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-dark py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">News &amp; Media</h1>
        <p className="mt-4 text-white/70 max-w-xl mx-auto text-lg">
          Veteran stories, program updates, and the latest from the Purple Heart
          Project.
        </p>
      </section>

      {/* Category filter */}
      <section className="bg-white border-b border-gray-100 py-4 px-4 sm:px-6 lg:px-8 sticky top-16 z-10">
        <div className="mx-auto max-w-7xl flex gap-3 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                cat === "All"
                  ? "bg-gold text-white"
                  : "text-gray-500 hover:text-brand hover:bg-brand-light"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.title}
                className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="h-1.5 bg-gradient-to-r from-brand to-brand-mid" />
                <div className="h-44 bg-brand-light flex items-center justify-center">
                  <span className="text-brand-mid text-xs font-medium uppercase tracking-widest">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-brand bg-brand-light px-2.5 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <time className="text-xs text-gray-400">{article.date}</time>
                  </div>
                  <h2 className="font-semibold text-gray-900 leading-snug group-hover:text-brand transition-colors">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center gap-1.5 text-brand text-sm font-medium group-hover:gap-2.5 transition-all"
                  >
                    Read more <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
