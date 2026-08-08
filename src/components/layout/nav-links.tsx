import Link from "next/link";
import { cn } from "@/lib/utils";

export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Gir Cow", href: "/gir-cow" },
  { label: "Panchgavya", href: "/panchgavya" },
  { label: "Contact", href: "/contact" },
];

type NavLinksProps = {
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
};

/**
 * Shared nav item renderer, used by both the desktop navbar
 * and the mobile drawer. Keeps NAV_ITEMS as the single source
 * of truth for menu structure.
 */
export function NavLinks({ className, linkClassName, onLinkClick }: NavLinksProps) {
  return (
    <ul className={cn("flex gap-8", className)}>
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            onClick={onLinkClick}
            className={cn(
              "text-base font-medium tracking-wide text-primary-foreground/90 transition-colors hover:text-primary-foreground",
              linkClassName
            )}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}