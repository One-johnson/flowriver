import matter from "gray-matter";

// Content is bundled at build time so it is available in serverless
// functions, where the repo's content/ folder is not on disk.
const files = import.meta.glob<string>("/content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export type ContentEntry<T extends Record<string, unknown>> = {
  slug: string;
  data: T;
  body: string;
};

function parse<T extends Record<string, unknown>>(
  slug: string,
  raw: string
): ContentEntry<T> {
  // Strip a UTF-8 BOM if an editor added one.
  const text = raw.charCodeAt(0) === 0xfeff ? raw.slice(1) : raw;
  const parsed = matter(text);
  return { slug, data: parsed.data as T, body: parsed.content.trim() };
}

export async function getContentEntries<T extends Record<string, unknown>>(
  collection: string
): Promise<ContentEntry<T>[]> {
  const prefix = `/content/${collection}/`;
  return Object.entries(files)
    .filter(([file]) => file.startsWith(prefix))
    .map(([file, raw]) =>
      parse<T>(file.slice(prefix.length).replace(/\.md$/, ""), raw)
    );
}

export async function getContentEntry<T extends Record<string, unknown>>(
  collection: string,
  slug: string
): Promise<ContentEntry<T> | undefined> {
  const raw = files[`/content/${collection}/${slug}.md`];
  return raw === undefined ? undefined : parse<T>(slug, raw);
}
