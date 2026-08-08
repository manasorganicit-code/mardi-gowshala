"use client";

import * as React from "react";
import Link from "next/link";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { MenuIcon, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavLinks } from "@/components/layout/nav-links";

/**
 * Mobile-only slide-out drawer. Built directly on the Base UI Dialog
 * primitive (not ui/dialog.tsx, which is styled for centered modals)
 * since a right-side slide-in needs its own positioning/animation.
 */
export function MobileNavDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/10 md:hidden"
          />
        }
      >
        <MenuIcon className="size-5" />
        <span className="sr-only">Open menu</span>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Backdrop
          className={cn(
            "fixed inset-0 z-50 bg-black/30 duration-150",
            "data-open:animate-in data-open:fade-in-0",
            "data-closed:animate-out data-closed:fade-out-0"
          )}
        />
        <DialogPrimitive.Popup
          className={cn(
            "fixed inset-y-0 right-0 z-50 flex h-full w-72 flex-col gap-8 bg-primary p-6",
            "outline-none duration-200",
            "data-open:animate-in data-open:slide-in-from-right",
            "data-closed:animate-out data-closed:slide-out-to-right"
          )}
        >
          <div className="flex items-center justify-end">
            <DialogPrimitive.Close
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                />
              }
            >
              <XIcon className="size-4" />
              <span className="sr-only">Close menu</span>
            </DialogPrimitive.Close>
          </div>

          {/*
            Explicit "Home" link, drawer-only. The logo behind the backdrop
            is not clickable while the drawer is open (Backdrop covers the
            full screen at z-50), so this is the only way to reach home
            without first closing the drawer.
          */}
          <nav className="flex flex-col gap-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-base font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              Home
            </Link>

            <NavLinks
              className="flex-col items-start gap-6"
              linkClassName="text-base"
              onLinkClick={() => setOpen(false)}
            />
          </nav>

          <Button
            nativeButton={false}
            className="mt-auto w-full rounded-xl bg-gold text-white hover:bg-gold/90"
            render={<a href="/donate" onClick={() => setOpen(false)} />}
          >
            Donate
          </Button>
        </DialogPrimitive.Popup>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}