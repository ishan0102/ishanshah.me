import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { RecipesData } from "@/data/recipes";
import { BackButton } from "@/app/recipes/[slug]/back-button";

const components = {
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-primary mb-4 text-3xl font-bold" {...props} />
  ),
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-primary mt-8 mb-3 text-2xl font-semibold" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-primary mt-6 mb-2 text-xl font-semibold" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p className="text-secondary mb-4 leading-relaxed" {...props} />
  ),
  a: (props: React.ComponentPropsWithoutRef<"a">) => (
    <a className="text-indigo-500 underline hover:text-indigo-700" {...props} />
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
  const recipesDirectory = path.join(process.cwd(), "src/content/recipes");
  const files = fs.existsSync(recipesDirectory)
    ? fs.readdirSync(recipesDirectory)
    : [];

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "src/content/recipes",
    `${slug}.mdx`,
  );

  if (!fs.existsSync(filePath)) {
    return { title: "Not Found" };
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: data.title || "Recipe",
    openGraph: {
      title: `${data.title || "Recipe"} | Ishan Shah`,
    },
  };
}

export default async function RecipePage({ params }: PageProps) {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "src/content/recipes",
    `${slug}.mdx`,
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data: frontMatter, content } = matter(fileContents);
  const recipeEntry = RecipesData.recipeList.find((r) => r.slug === slug);

  const name = frontMatter.title || recipeEntry?.name || "Untitled";
  const originalName = frontMatter.original_name || recipeEntry?.original_name;
  const description = frontMatter.description || recipeEntry?.description;
  const category = frontMatter.category || recipeEntry?.category;
  const servings = frontMatter.servings || recipeEntry?.servings;
  const prepTime = frontMatter.prep_time || recipeEntry?.prep_time;
  const cookTime = frontMatter.cook_time || recipeEntry?.cook_time;
  const tags = frontMatter.tags || recipeEntry?.tags;

  return (
    <div className="scrollbar-hide relative flex h-full w-full flex-col overflow-y-scroll scroll-smooth px-8">
      <div className="mx-auto mt-4 mb-52 w-full max-w-3xl sm:mt-8 md:mb-32">
        <div className="mb-8">
          <BackButton />
          <h1 className="text-primary mb-2 text-4xl font-bold">{name}</h1>
          {originalName && originalName !== name && (
            <p className="text-tertiary mb-2 text-lg">{originalName}</p>
          )}
          {description && (
            <p className="text-secondary mt-2 text-lg">{description}</p>
          )}

          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            {category && (
              <span className="text-secondary capitalize">
                <span className="text-tertiary">Category:</span> {category}
              </span>
            )}
            {servings && (
              <span className="text-secondary">
                <span className="text-tertiary">Servings:</span> {servings}
              </span>
            )}
            {prepTime && (
              <span className="text-secondary">
                <span className="text-tertiary">Prep:</span> {prepTime}
              </span>
            )}
            {cookTime && (
              <span className="text-secondary">
                <span className="text-tertiary">Cook:</span> {cookTime}
              </span>
            )}
          </div>

          {tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.cuisine?.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs text-indigo-700 capitalize"
                >
                  {tag}
                </span>
              ))}
              {tags.diet?.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-green-50 px-2 py-0.5 text-xs text-green-700 capitalize"
                >
                  {tag}
                </span>
              ))}
              {tags.difficulty && (
                <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs text-amber-700 capitalize">
                  {tags.difficulty}
                </span>
              )}
              {tags.cooking_method?.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-rose-50 px-2 py-0.5 text-xs text-rose-700 capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={content} components={components} />
        </div>
      </div>
    </div>
  );
}
