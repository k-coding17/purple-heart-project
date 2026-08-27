import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const footerLinks = {
  "About Us": [
    { href: "/about#what-is-php", label: "What is the PHP?" },
    { href: "/about#origin", label: "Origin Story" },
    { href: "/about#financials", label: "Financials & Reporting" },
    { href: "/news", label: "News & Media" },
    { href: "/contact", label: "Contact Us" },
  ],
  Scholarship: [
    { href: "/programs#scholarship", label: "Scholarship Application" },
    { href: "/programs#blue-chip", label: "Blue Chip Recommendation" },
    { href: "/bench-brigade", label: "Volunteer" },
    { href: "/gallery#wall-of-heroes", label: "Wall of Heroes" },
    { href: "/events", label: "Upcoming Events" },
  ],
  Governance: [
    { href: "/governance#board", label: "Board of Directors" },
    { href: "/governance#volunteers", label: "Key Volunteers" },
    { href: "/governance#documents", label: "Governing Documents" },
  ],
  "Get Involved": [
    { href: "/donate", label: "Ways to Donate" },
    { href: "/gallery", label: "Gallery" },
  ],
};

export default function Footer() {
  const linkEntries = Object.entries(footerLinks);

  return (
    <footer className="bg-brand-light border-t border-neutral-200 text-brand-mid">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="space-y-4">
            <Logo alwaysShowText imageClassName="h-9 w-auto" />
            <p className="text-sm leading-relaxed">
              Introducing combat-wounded veterans to the peace and joy found
              through the therapy of traditional hand tool woodworking — since
              2016.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gold shrink-0" />
                <span>(253) 381-4113</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gold shrink-0" />
                <span>info@ThePurpleHeartProject.org</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                <span>
                  P.O. Box 61
                  <br />
                  Hilo, HI 96721
                </span>
              </div>
            </div>
          </div>

          {linkEntries.map(([heading, links]) => {
            const isGetInvolved = heading === "Get Involved";

            return (
              <div
                key={heading}
                className={
                  isGetInvolved ? "flex h-full flex-col" : undefined
                }
              >
                <h3 className="text-brand font-semibold text-sm uppercase tracking-wider mb-4">
                  {heading}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm hover:text-brand hover:underline transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {isGetInvolved && (
                  <div className="mt-8 lg:mt-auto lg:pt-6">
                    <div className="relative h-32 w-fit">
                      <span
                        className="invisible whitespace-nowrap text-sm font-semibold uppercase tracking-wider"
                        aria-hidden="true"
                      >
                        {heading}
                      </span>
                      <div className="absolute bottom-0 right-0 flex items-end gap-4">
                        <a
                          href="https://www.candid.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 transition-opacity hover:opacity-80"
                          aria-label="View Purple Heart Project on Candid (opens in new tab)"
                        >
                          <Image
                            src="/candid-platinum-2026.png"
                            alt="Candid Platinum Transparency 2026"
                            width={225}
                            height={225}
                            className="h-32 w-auto max-w-none"
                          />
                        </a>
                        <Image
                          src="/four-star-rating-2026.png"
                          alt="Four-Star Rating Badge 2026"
                          width={1801}
                          height={1801}
                          className="h-32 w-auto max-w-none shrink-0"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 border-t border-neutral-300 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-mid">
          <p>
            © {new Date().getFullYear()} Purple Heart Project. All rights
            reserved.
          </p>
          <p>501(c)(3) Nonprofit Organization</p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="hover:text-brand transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
