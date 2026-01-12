import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { WritingData } from "@/data/writing";
import { BackButton } from "./back-button";

const components = {
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-primary mb-4 text-3xl font-bold" {...props} />
  ),
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-primary mb-3 mt-8 text-2xl font-semibold" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-primary mb-2 mt-6 text-xl font-semibold" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p className="text-secondary mb-4 leading-relaxed" {...props} />
  ),
  a: (props: React.ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-indigo-500 underline hover:text-indigo-700"
      {...props}
    />
  ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul className="text-secondary mb-4 ml-6 list-disc" {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol className="text-secondary mb-4 ml-6 list-decimal" {...props} />
  ),
  li: (props: React.ComponentPropsWithoutRef<"li">) => (
    <li className="mb-2" {...props} />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="text-secondary border-l-4 border-gray-300 pl-4 italic"
      {...props}
    />
  ),
  code: (props: React.ComponentPropsWithoutRef<"code">) => (
    <code
      className="text-primary rounded bg-gray-100 px-1 py-0.5 text-sm"
      {...props}
    />
  ),
  pre: (props: React.ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="text-primary mb-4 overflow-x-auto rounded bg-gray-100 p-4"
      {...props}
    />
  ),
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const writingDirectory = path.join(process.cwd(), "src/content/writing");
  const files = fs.existsSync(writingDirectory)
    ? fs.readdirSync(writingDirectory)
    : [];

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "src/content/writing",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    return { title: "Not Found" };
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: data.title || "Writing",
    openGraph: {
      title: `${data.title || "Writing"} | Ishan Shah`,
    },
  };
}

export default async function WritingPost({ params }: PageProps) {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "src/content/writing",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data: frontMatter, content } = matter(fileContents);
  const writingEntry = WritingData.writingList.find((w) => w.slug === slug);

  return (
    <div className="scrollbar-hide relative flex h-full w-full flex-col overflow-y-scroll scroll-smooth px-8">
      <div className="mx-auto mb-52 mt-4 w-full max-w-3xl sm:mt-8 md:mb-32">
        <div className="mb-8">
          <BackButton />
          <h1 className="text-primary mb-2 text-4xl font-bold">
            {frontMatter.title || writingEntry?.name || "Untitled"}
          </h1>
          {frontMatter.date || writingEntry?.date ? (
            <p className="text-quaternary font-mono text-sm">
              {frontMatter.date || writingEntry?.date}
            </p>
          ) : null}
          {frontMatter.tagline || writingEntry?.tagline ? (
            <p className="text-secondary mt-2 text-lg">
              {frontMatter.tagline || writingEntry?.tagline}
            </p>
          ) : null}
        </div>
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={content} components={components} />
        </div>
      </div>
    </div>
  );
}
