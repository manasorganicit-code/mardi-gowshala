import Link from "next/link";

import { Button } from "@/components/ui/button";
import { NavLinks } from "@/components/layout/nav-links";
import { MobileNavDrawer } from "@/components/layout/mobile-nav-drawer";

const LOGO_URL = process.env.NEXT_PUBLIC_LOGO_URL;

export function Navbar() {
  return (
    <header className="bg-primary">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo doubles as the home link — no separate "Home" nav item */}
        <Link href="/" className="flex items-center" aria-label="Mardi Gowshala — Home">
          {LOGO_URL ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={LOGO_URL} alt="Mardi Gowshala" className="h-10 w-auto" />
          ) : (
            <span className="font-heading text-xl font-semibold tracking-wide text-primary-foreground">
              Manas Goshala
            </span>
          )}
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-10">
          <NavLinks />
          <Button
            nativeButton={false}
            className="rounded-xl bg-gold text-white hover:bg-gold/90"
            render={<Link href="/donate" />}
          >
            Donate
          </Button>
        </nav>

        <MobileNavDrawer />
      </div>
    </header>
  );
}