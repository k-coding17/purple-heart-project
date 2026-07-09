import Image from "next/image";

/**
 * Sponsor logos in /public/sponsors/ — filenames use lowercase kebab-case
 * (e.g. `lie-nielsen.png`). `width` / `height` are trimmed content bounds.
 */
export const SPONSORS = [
  {
    src: "/sponsors/lie-nielsen.png",
    alt: "Lie-Nielsen Toolworks — Heirloom Quality Tools",
    href: "https://www.lienielsen.com/",
    width: 2945,
    height: 1334,
    spacing: "wide",
  },
  {
    src: "/sponsors/thunder-werks.png",
    alt: "Thunder Werks",
    href: "https://www.thunderwerks.biz/",
    width: 1400,
    height: 1819,
    spacing: "wide",
  },
  {
    src: "/sponsors/sawinery.png",
    alt: "Sawinery",
    href: "https://www.sawinery.net/",
    width: 600,
    height: 288,
    spacing: "wide",
  },
  {
    src: "/sponsors/rob-cosman.png",
    alt: "Rob Cosman",
    href: "https://www.robcosman.com/",
    width: 627,
    height: 755,
    spacing: "wide",
  },
  {
    src: "/sponsors/walrus-oil.png",
    alt: "Walrus Oil — Quality Wood Finishes",
    href: "https://walrusoil.com/",
    width: 1154,
    height: 1154,
    scale: 1.32,
    spacing: "wide",
  },
  {
    src: "/sponsors/geek-navy.png",
    alt: "GeekNavy",
    href: "https://geeknavy.com/",
    width: 200,
    height: 42,
    spacing: "wide",
  },
  {
    src: "/sponsors/surfprep.png",
    alt: "SurfPrep",
    href: "https://surfprepsanding.com/",
    width: 2364,
    height: 500,
  },
  {
    src: "/sponsors/idc-woodcraft.png",
    alt: "IDC Woodcraft",
    href: "https://idcwoodcraft.com/",
    width: 4167,
    height: 876,
  },
  {
    src: "/sponsors/andy-bird-builds.png",
    alt: "Andy Bird builds",
    href: "https://www.andybirdbuilds.com/",
    width: 733,
    height: 673,
  },
] as const;

type Sponsor = (typeof SPONSORS)[number];

/** Shared target height — width is computed per logo from trimmed aspect ratio. */
const TARGET_HEIGHT_PX = 96;
const MIN_TILE_WIDTH_PX = 96;
const MAX_TILE_WIDTH_PX = 280;

function tileDimensions(sponsor: Sponsor) {
  const scale = "scale" in sponsor ? (sponsor.scale ?? 1) : 1;
  const aspect = sponsor.width / sponsor.height;
  let width = TARGET_HEIGHT_PX * aspect;
  let height = TARGET_HEIGHT_PX;

  if (width > MAX_TILE_WIDTH_PX) {
    width = MAX_TILE_WIDTH_PX;
    height = width / aspect;
  } else if (width < MIN_TILE_WIDTH_PX) {
    width = MIN_TILE_WIDTH_PX;
    height = width / aspect;
  }

  return {
    width: Math.round(width * scale),
    height: Math.round(height * scale),
  };
}

/** Even space between logos — margin on each side, not flex gap. */
const LOGO_SPACING = {
  default: "mx-7 md:mx-10",
  wide: "mx-8 md:mx-11",
} as const;

function SponsorTile({
  sponsor,
  decorative,
}: {
  sponsor: Sponsor;
  decorative?: boolean;
}) {
  const { width: tileWidth, height: tileHeight } = tileDimensions(sponsor);

  const img = (
    <Image
      src={sponsor.src}
      alt={decorative ? "" : sponsor.alt}
      width={sponsor.width}
      height={sponsor.height}
      sizes={`${tileWidth}px`}
      className="h-full w-full object-contain object-center"
      draggable={false}
    />
  );

  const frameStyle = {
    width: `${tileWidth}px`,
    height: `${tileHeight}px`,
  };

  const spacing =
    "spacing" in sponsor ? (sponsor.spacing ?? "default") : "default";

  const frameClass = `flex shrink-0 items-center justify-center rounded-lg transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${LOGO_SPACING[spacing]}${
    decorative ? " sponsor-marquee-duplicate" : ""
  }`;

  const linkProps = {
    href: sponsor.href,
    target: "_blank" as const,
    rel: "noopener noreferrer",
    className: frameClass,
    style: frameStyle,
    "aria-label": decorative
      ? undefined
      : `Visit ${sponsor.alt} website (opens in new tab)`,
  };

  if (decorative) {
    return (
      <a {...linkProps} aria-hidden="true" tabIndex={-1}>
        {img}
      </a>
    );
  }

  return (
    <a {...linkProps} role="listitem">
      {img}
    </a>
  );
}

type SponsorsProps = {
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function Sponsors({
  title = "Our Sponsors",
  subtitle = "We are grateful to the companies and makers who support combat-wounded veterans through the Purple Heart Project.",
  className = "",
}: SponsorsProps) {
  const marqueeLogos = [...SPONSORS, ...SPONSORS];

  return (
    <section
      className={`bg-gray-50 border-y border-gray-100 py-16 ${className}`}
      aria-labelledby="sponsors-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="sponsors-heading"
          className="text-2xl md:text-3xl font-bold text-gray-900 text-center"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto text-sm md:text-base">
            {subtitle}
          </p>
        )}
      </div>

      <div className="relative mt-10 w-full overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-gray-50 to-transparent sm:w-24"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-gray-50 to-transparent sm:w-24"
          aria-hidden="true"
        />

        <div
          className="sponsor-marquee-track flex shrink-0 items-center"
          role="list"
          aria-label="Sponsor logos"
        >
          {marqueeLogos.map((sponsor, index) => (
            <SponsorTile
              key={`${sponsor.src}-${index}`}
              sponsor={sponsor}
              decorative={index >= SPONSORS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
