import { createFileRoute, redirect } from "@tanstack/react-router";

// /team was merged into the About page.
export const Route = createFileRoute("/team")({
  beforeLoad: () => {
    throw redirect({ to: "/about", hash: "team", statusCode: 301 });
  },
});
