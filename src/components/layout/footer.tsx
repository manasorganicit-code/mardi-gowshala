import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/components/layout/nav-links";

const LOGO_URL = process.env.NEXT_PUBLIC_LOGO_URL;

// Quick Links reuses NAV_ITEMS (single source of truth) but drops Contact,
// since Contact already has its own dedicated section below. Donate is
// appended manually, same as Navbar handles it separately from NAV_ITEMS.
const QUICK_LINKS = [...NAV_ITEMS.filter((item) => item.href !== "/contact"), { label: "Donate", href: "/donate" }];

const LEGAL_LINKS = [
  { label: "Terms of service", href: "/terms" },
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Refund policy", href: "/refund-policy" },
];

// href is a placeholder for now — real profile links to be added later.
const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "Facebook", href: "#", Icon: FaFacebook },
  { label: "Twitter / X", href: "#", Icon: FaXTwitter },
  { label: "YouTube", href: "#", Icon: FaYoutube },
];

const TAGLINE =
  "A place where traditional values meet modern practices to promote indigenous cow welfare with organic and sustainable farm practices.";
const ADDRESS_LINES = [
  "Manas Krushi Farm, Village Sajivali, Post Bhatsanagar, Taluka Shahapur",
  "District Thane, Maharashtra, India 421601",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          {LOGO_URL ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={LOGO_URL} alt="Manas Goshala" className="h-10 w-auto" />
          ) : (
            <span className="font-heading text-xl font-semibold tracking-wide">Manas Goshala</span>
          )}
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">{TAGLINE}</p>

          <div className="mt-5 flex gap-4">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="font-heading text-sm uppercase tracking-wider text-primary-foreground/60">Quick links</p>
          <ul className="mt-4 space-y-3">
            {QUICK_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="font-heading text-sm uppercase tracking-wider text-primary-foreground/60">Legal</p>
          <ul className="mt-4 space-y-3">
            {LEGAL_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-heading text-sm uppercase tracking-wider text-primary-foreground/60">Contact</p>
          <address className="mt-4 text-sm leading-relaxed text-primary-foreground/90 not-italic">
            {ADDRESS_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>

          <Button
            nativeButton={false}
            className="mt-5 rounded-xl bg-gold text-white hover:bg-gold/90"
            render={<Link href="/contact" />}
          >
            Get in touch
          </Button>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 px-4 py-5 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-6xl text-center text-xs text-primary-foreground/60">
          © {year} Manas Goshala. All rights reserved.
        </p>
      </div>
    </footer>
  );
}