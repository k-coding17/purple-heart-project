import Image from "next/image";
import Link from "next/link";

const LOGO = {
  src: "/php-logo.png",
  width: 635,
  height: 722,
  alt: "Purple Heart Project",
} as const;

type LogoProps = {
  imageClassName?: string;
  showText?: boolean;
  /** When false, org name hides on small screens (navbar). Footer should pass true. */
  alwaysShowText?: boolean;
  priority?: boolean;
};

export default function Logo({
  imageClassName = "h-10 w-auto",
  showText = true,
  alwaysShowText = false,
  priority = false,
}: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3 group shrink-0">
      <Image
        src={LOGO.src}
        alt={LOGO.alt}
        width={LOGO.width}
        height={LOGO.height}
        className={`object-contain group-hover:opacity-90 transition-opacity ${imageClassName}`}
        priority={priority}
      />
      {showText && (
        <span
          className={`text-brand font-bold text-lg tracking-tight leading-tight${alwaysShowText ? "" : " hidden sm:block"}`}
        >
          Purple<span className="text-gold">Heart</span>
          <span className="block text-xs font-normal text-brand-mid tracking-widest uppercase -mt-0.5">
            Project
          </span>
        </span>
      )}
    </Link>
  );
}
