import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const THEME_KEY = "theme";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// The inline script in layout.tsx sets the class before hydration.
function isDark() {
  return document.documentElement.classList.contains("dark");
}

export function ThemeToggle() {
  // null on the server, so the first client render matches the server HTML.
  const dark = useSyncExternalStore<boolean | null>(subscribe, isDark, () => null);

  function toggle() {
    const next = !isDark();
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(THEME_KEY, next ? "dark" : "light");
    listeners.forEach((l) => l());
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      disabled={dark === null}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="h-9 w-9"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
