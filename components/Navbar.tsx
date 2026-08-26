"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/components/Logo";

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const navItems: NavItem[] = [
  {
    href: "/",
    label: "Home",
    children: [{ href: "/events", label: "Upcoming Events" }],
  },
  {
    href: "/about",
    label: "About Us",
    children: [
      { href: "/about#what-is-php", label: "What is the PHP?" },
      { href: "/about#origin", label: "Origin Story" },
      { href: "/about#financials", label: "Financials & Reporting" },
      { href: "/news", label: "News & Media" },
      { href: "/about#flyers", label: "Flyers & Info Cards" },
    ],
  },
  {
    href: "/programs",
    label: "Scholarship",
    children: [
      { href: "/programs#scholarship", label: "Scholarship Application" },
      {
        href: "/programs#blue-chip",
        label: "Submit a Blue Chip Recommendation",
      },
    ],
  },
  {
    href: "/bench-brigade",
    label: "Volunteer",
    children: [
      { href: "/bench-brigade#about", label: "About the Bench Brigade" },
      { href: "/bench-brigade#resources", label: "Bench Builders Resources" },
      { href: "/bench-brigade#deliveries", label: "Bench Delivery Pictures" },
    ],
  },
  {
    href: "/gallery",
    label: "Gallery",
    children: [
      { href: "/gallery#wall-of-heroes", label: "Wall of Heroes" },
      { href: "/gallery#2025", label: "2025 Bench Delivery Pictures" },
      { href: "/gallery#2024", label: "2024 Bench Delivery Pictures" },
      { href: "/gallery#2023", label: "2023 Bench Delivery Pictures" },
    ],
  },
];

function DropdownItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="text-brand-mid hover:text-brand text-sm font-medium transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1 text-brand-mid hover:text-brand text-sm font-medium transition-colors"
      >
        {item.label}
        <ChevronDown
          size={13}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </Link>
      {open && (
        <div className="absolute top-full left-0 pt-1 w-56 z-50">
          <div className="bg-white border border-neutral-200 rounded-md py-1.5 shadow-sm">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2 text-sm text-brand-mid hover:text-brand hover:bg-brand-light transition-colors"
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[80px] items-center justify-between">
          <Logo priority imageClassName="h-[70px] w-auto" />

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <DropdownItem key={item.href} item={item} />
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              href="/donate"
              className="rounded-md bg-gold px-5 py-2 text-sm font-semibold text-white hover:bg-gold-dark transition-colors"
            >
              Donate
            </Link>
          </div>

          <button
            className="lg:hidden text-brand p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200 px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.href}>
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-brand hover:text-gold font-medium py-2 flex-1"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label,
                      )
                    }
                    className="text-brand-mid px-2 py-2"
                  >
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
              {item.children && mobileExpanded === item.label && (
                <div className="pl-4 space-y-1 pb-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-brand-mid hover:text-brand text-sm py-1.5"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3">
            <Link
              href="/donate"
              onClick={() => setMobileOpen(false)}
              className="block text-center rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-white hover:bg-gold-dark transition-colors"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
