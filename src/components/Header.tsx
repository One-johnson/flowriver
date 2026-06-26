"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-2xl border border-border/50 bg-background/75 px-4 shadow-sm backdrop-blur-xl sm:px-6">
          <Link href="/" className="group flex items-center">
            <Image
              src="/logo.png"
              alt="FlowRiver Technologies"
              width={200}
              height={50}
              className="h-10 w-auto transition-transform group-hover:scale-[1.02] sm:h-11"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Button asChild size="sm" className="rounded-lg shadow-md shadow-primary/20">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={handleOpenChange}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                ref={menuButtonRef}
                variant="ghost"
                size="icon"
                aria-label="Toggle menu"
                aria-expanded={open}
                className="rounded-lg"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-border/50">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <nav className="flex flex-col gap-1 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-6 flex flex-col gap-3 border-t border-border/50 pt-6">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-sm text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Button asChild className="w-full" onClick={() => setOpen(false)}>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
