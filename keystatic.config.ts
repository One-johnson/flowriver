import { config, fields, collection } from "@keystatic/core";

const githubRepo = "One-johnson/flowriver";

// Local mode: works on your machine (and shows existing content/* entries).
// GitHub mode: only when explicitly enabled for setup, or in production WITH credentials.
//   KEYSTATIC_STORAGE=github  → run the Create GitHub App wizard locally
//   Production + KEYSTATIC_GITHUB_CLIENT_ID → live /keystatic on Vercel
const useGithubStorage =
  process.env.KEYSTATIC_STORAGE === "github" ||
  (process.env.NODE_ENV === "production" &&
    Boolean(process.env.KEYSTATIC_GITHUB_CLIENT_ID));

export default config({
  storage: useGithubStorage
    ? {
        kind: "github",
        repo: githubRepo,
      }
    : {
        kind: "local",
      },
  collections: {
    testimonials: collection({
      label: "Testimonials",
      slugField: "author",
      path: "content/testimonials/*",
      format: { data: "yaml" },
      schema: {
        author: fields.slug({ name: { label: "Author" } }),
        role: fields.text({ label: "Role / organisation" }),
        quote: fields.text({ label: "Quote", multiline: true }),
        order: fields.integer({ label: "Display order", defaultValue: 0 }),
      },
    }),
    services: collection({
      label: "Services",
      slugField: "title",
      path: "content/services/*",
      format: { data: "yaml" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        tagline: fields.text({ label: "Tagline" }),
        description: fields.text({ label: "Short description", multiline: true }),
        longDescription: fields.text({
          label: "Long description",
          multiline: true,
        }),
        icon: fields.select({
          label: "Icon",
          options: [
            { label: "Globe", value: "Globe" },
            { label: "Component", value: "Component" },
            { label: "Pen tool", value: "PenTool" },
            { label: "Brain circuit", value: "BrainCircuit" },
            { label: "Smartphone", value: "Smartphone" },
            { label: "Wrench", value: "Wrench" },
          ],
          defaultValue: "Globe",
        }),
        features: fields.array(fields.text({ label: "Feature" }), {
          label: "Features",
          itemLabel: (props) => props.value || "Feature",
        }),
        approach: fields.array(fields.text({ label: "Approach point" }), {
          label: "Approach",
          itemLabel: (props) => props.value || "Point",
        }),
        image: fields.text({ label: "Card image URL" }),
        imageAlt: fields.text({ label: "Image alt text" }),
        heroImage: fields.text({ label: "Hero image URL" }),
        faqs: fields.array(
          fields.object({
            question: fields.text({ label: "Question" }),
            answer: fields.text({ label: "Answer", multiline: true }),
          }),
          {
            label: "FAQs",
            itemLabel: (props) => props.fields.question.value || "FAQ",
          }
        ),
        order: fields.integer({ label: "Display order", defaultValue: 0 }),
      },
    }),
    portfolio: collection({
      label: "Portfolio",
      slugField: "title",
      path: "content/portfolio/*",
      format: { data: "yaml" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        shortTitle: fields.text({ label: "Short title" }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Websites", value: "Websites" },
            { label: "Systems", value: "Systems" },
            { label: "E-Commerce", value: "E-Commerce" },
            { label: "Events", value: "Events" },
          ],
          defaultValue: "Websites",
        }),
        description: fields.text({ label: "Short description", multiline: true }),
        longDescription: fields.text({
          label: "Long description",
          multiline: true,
        }),
        highlights: fields.array(fields.text({ label: "Highlight" }), {
          label: "Highlights",
          itemLabel: (props) => props.value || "Highlight",
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value || "Tag",
        }),
        image: fields.text({ label: "Image path or URL" }),
        imageAlt: fields.text({ label: "Image alt text" }),
        client: fields.text({ label: "Client" }),
        year: fields.text({ label: "Year" }),
        clientUrl: fields.url({ label: "Client URL" }),
        logoImage: fields.checkbox({
          label: "Use logo-style image treatment",
          defaultValue: false,
        }),
        logoImageDark: fields.checkbox({
          label: "Logo needs dark background",
          defaultValue: false,
        }),
        status: fields.select({
          label: "Status",
          options: [
            { label: "Live", value: "live" },
            { label: "In development", value: "in-development" },
            { label: "Coming soon", value: "coming-soon" },
          ],
          defaultValue: "live",
        }),
        order: fields.integer({ label: "Display order", defaultValue: 0 }),
      },
    }),
  },
});
