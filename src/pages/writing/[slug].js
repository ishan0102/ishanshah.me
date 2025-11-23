import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import { useRouter } from "next/router";
import path from "path";
import { WritingData } from "../../data/writing";

const components = {
  h1: (props) => (
    <h1 className="text-primary mb-4 text-3xl font-bold" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-primary mb-3 mt-8 text-2xl font-semibold" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-primary mb-2 mt-6 text-xl font-semibold" {...props} />
  ),
  p: (props) => (
    <p className="text-secondary mb-4 leading-relaxed" {...props} />
  ),
  a: (props) => (
    <a className="text-indigo-500 underline hover:text-indigo-700" {...props} />
  ),
  ul: (props) => (
    <ul className="text-secondary mb-4 ml-6 list-disc" {...props} />
  ),
  ol: (props) => (
    <ol className="text-secondary mb-4 ml-6 list-decimal" {...props} />
  ),
  li: (props) => <li className="mb-2" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="text-secondary border-l-4 border-gray-300 pl-4 italic"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="text-primary rounded bg-gray-100 px-1 py-0.5 text-sm"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="text-primary mb-4 overflow-x-auto rounded bg-gray-100 p-4"
      {...props}
    />
  ),
};

export async function getStaticPaths() {
  const writingDirectory = path.join(process.cwd(), "src/content/writing");
  const files = fs.existsSync(writingDirectory)
    ? fs.readdirSync(writingDirectory)
    : [];

  const paths = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      params: { slug: file.replace(/\.mdx$/, "") },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(
    process.cwd(),
    "src/content/writing",
    `${slug}.mdx`,
  );

  if (!fs.existsSync(filePath)) {
    return {
      notFound: true,
    };
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // Find the writing entry in WritingData
  const writingEntry = WritingData.writingList.find((w) => w.slug === slug);

  // Serialize the MDX content
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter: data,
      mdxSource,
      writingEntry,
    },
  };
}

export default function WritingPost({ frontMatter, mdxSource, writingEntry }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{frontMatter.title || "Writing"} • Ishan Shah</title>
        <meta
          property="og:title"
          content={frontMatter.title || "Writing"}
          key="title"
        />
      </Head>
      <div className="scrollbar-hide relative flex max-h-screen w-full flex-col overflow-y-scroll scroll-smooth px-8">
        <div className="mx-auto mb-52 mt-4 w-full max-w-3xl sm:mt-8 md:mb-32">
          <div className="mb-8">
            <button
              onClick={() => router.back()}
              className="text-secondary mb-4 text-sm hover:text-indigo-600"
            >
              ← Back
            </button>
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
            <MDXRemote {...mdxSource} components={components} />
          </div>
        </div>
      </div>
    </>
  );
}
