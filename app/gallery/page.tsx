import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the Purple Heart Project gallery — the Wall of Heroes and bench delivery pictures from 2023 to 2025.",
};

const deliveryYears = ["2025", "2024", "2023"];

const placeholderTiles = Array.from({ length: 6 }, (_, i) => i + 1);

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-dark py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Gallery</h1>
        <p className="mt-4 text-white/70 max-w-xl mx-auto text-lg">
          Honoring our warriors and celebrating the community that supports
          them.
        </p>
      </section>

      {/* Wall of Heroes */}
      <section
        id="wall-of-heroes"
        className="bg-white py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Wall of Heroes
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            The Purple Heart Project honors the combat-wounded veterans we serve.
            This wall is dedicated to their service, their sacrifice, and their
            resilience.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {placeholderTiles.map((i) => (
              <div
                key={i}
                className="aspect-square bg-brand-light rounded-xl flex flex-col items-center justify-center text-center p-3 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="w-12 h-12 rounded-md bg-gold/20 mb-2" />
                <p className="text-xs font-medium text-gray-700">Veteran Name</p>
                <p className="text-xs text-gray-400">Branch • Year</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-400 text-center">
            Photos and stories will be displayed here. Contact us to add a
            veteran to the Wall of Heroes.
          </p>
        </div>
      </section>

      {/* Bench Delivery sections by year */}
      {deliveryYears.map((year) => (
        <section
          key={year}
          id={year}
          className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16 odd:bg-brand-light even:bg-white"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {year} Bench Delivery Pictures
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Moments from the {year} bench delivery season — veterans receiving
              their hand-crafted benches from the Bench Brigade.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {placeholderTiles.map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-brand-light rounded-2xl flex items-center justify-center text-brand-mid hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-md bg-gold/20 mx-auto mb-2" />
                    <p className="text-xs text-gray-400">
                      {year} Delivery Photo {i}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
