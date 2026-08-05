import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const contentRoot = path.join(process.cwd(), "content");

export type ContentEntry<T extends Record<string, unknown>> = {
  slug: string;
  data: T;
  body: string;
};

export async function getContentEntries<T extends Record<string, unknown>>(
  collection: string
): Promise<ContentEntry<T>[]> {
  const dir = path.join(contentRoot, collection);
  let files: string[];
  try {
    files = await fs.readdir(dir);
  } catch {
    return [];
  }

  const entries = await Promise.all(
    files
      .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx?$/, "");
        const raw = await fs.readFile(path.join(dir, file), "utf8");
        const parsed = matter(raw);
        return {
          slug,
          data: parsed.data as T,
          body: parsed.content.trim(),
        };
      })
  );

  return entries;
}

export async function getContentEntry<T extends Record<string, unknown>>(
  collection: string,
  slug: string
): Promise<ContentEntry<T> | undefined> {
  const dir = path.join(contentRoot, collection);
  for (const ext of [".md", ".mdx"]) {
    try {
      const raw = await fs.readFile(path.join(dir, `${slug}${ext}`), "utf8");
      const parsed = matter(raw);
      return {
        slug,
        data: parsed.data as T,
        body: parsed.content.trim(),
      };
    } catch {
      // try next extension
    }
  }
  return undefined;
}
