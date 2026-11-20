import { Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="FlowRiver Technologies home">
          <img
            src="/logo-header.png"
            alt="FlowRiver Technologies"
            width={253}
            height={156}
            className="h-15 w-auto rounded-md dark:bg-white dark:p-1"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "!text-foreground after:absolute after:inset-x-3 after:-bottom-[17px] after:h-0.5 after:rounded-full after:bg-primary",
                "aria-current": "page",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link to="/contact">Start a project</Link>
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
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 pt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  activeProps={{
                    className: "!bg-muted !text-foreground",
                    "aria-current": "page",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                <div className="flex items-center justify-between px-1">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
                <Button asChild className="w-full" onClick={() => setOpen(false)}>
                  <Link to="/contact">Start a project</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
