/**
 * Cross-platform production build for Cloudflare Pages.
 * Copies only live public website files into dist/
 */
import { cp, mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const out = path.join(root, "dist");

const rootFiles = [
  "index.html",
  "privacy.html",
  "terms.html",
  "updates.html",
  "favicon.ico",
  "styles.css",
  "styles-polish.css",
  "styles-experience.css",
  "styles-industries.css",
  "styles-getting-started.css",
  "styles-faq.css",
  "styles-contact.css",
  "styles-pilot.css",
  "styles-i18n.css",
  "styles-legal.css",
  "styles-updates.css",
  "script.js"
];

const contentFiles = ["homepage-content.js", "homepage-locale-en.js", "updates-content.js"];

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function copyFile(from, to) {
  await mkdir(path.dirname(to), { recursive: true });
  await cp(from, to);
}

async function main() {
  await rm(out, { recursive: true, force: true });
  await mkdir(out, { recursive: true });

  for (const file of rootFiles) {
    const src = path.join(root, file);
    if (!(await exists(src))) {
      throw new Error(`Missing required file: ${file}`);
    }
    await copyFile(src, path.join(out, file));
  }

  const contentOut = path.join(out, "content");
  await mkdir(contentOut, { recursive: true });
  for (const file of contentFiles) {
    const src = path.join(root, "content", file);
    if (!(await exists(src))) {
      throw new Error(`Missing required file: content/${file}`);
    }
    await copyFile(src, path.join(contentOut, file));
  }

  const jsSrc = path.join(root, "js");
  const jsOut = path.join(out, "js");
  await mkdir(jsOut, { recursive: true });
  await cp(jsSrc, jsOut, { recursive: true, filter: (src) => !src.endsWith(".md") });

  const assetsSrc = path.join(root, "assets");
  if (!(await exists(assetsSrc))) {
    throw new Error("Missing required directory: assets/");
  }
  await cp(assetsSrc, path.join(out, "assets"), { recursive: true });

  console.log(`Production build ready: ${out}`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
