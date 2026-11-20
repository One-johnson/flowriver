import { Link, useRouter, type ErrorComponentProps } from "@tanstack/react-router";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export function ErrorPage({ error, reset }: ErrorComponentProps) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-start justify-center px-4 py-24">
      <h1 className="font-display text-3xl font-bold">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">
        We couldn&apos;t load this page. Please try again or return home.
      </p>
      <div className="mt-8 flex gap-3">
        <Button
          onClick={() => {
            reset();
            router.invalidate();
          }}
        >
          Try again
        </Button>
        <Button asChild variant="outline">
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
