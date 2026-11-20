import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-start justify-center px-4 py-24">
      <p className="font-mono text-sm text-muted-foreground">404</p>
      <h1 className="mt-2 font-display text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">Back to home</Link>
      </Button>
    </div>
  );
}
