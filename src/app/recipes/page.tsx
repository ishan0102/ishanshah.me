import type { Metadata } from "next";
import Link from "next/link";
import { RecipesData, type RecipeEntry } from "@/data/recipes";

export const metadata: Metadata = {
  title: "Recipes",
  openGraph: {
    title: "Recipes | Ishan Shah",
  },
};

function RecipeItem({
  name,
  slug,
  original_name,
  category,
  description,
  tags,
}: RecipeEntry) {
  return (
    <Link
      href={`/recipes/${slug}`}
      className="group flex items-start justify-between gap-4 border-b border-gray-200 py-3 last:border-b-0"
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <strong className="text-primary font-medium group-hover:text-indigo-600">
            {name}
          </strong>
          {original_name && original_name !== name && (
            <span className="text-tertiary text-sm">({original_name})</span>
          )}
        </div>
        <p className="text-secondary mt-1 line-clamp-1 text-sm">
          {description}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        {tags?.difficulty && (
          <span className="text-tertiary hidden text-sm capitalize sm:block">
            {tags.difficulty}
          </span>
        )}
        <span className="text-secondary text-sm capitalize">{category}</span>
      </div>
    </Link>
  );
}

export default function RecipesPage() {
  return (
    <div className="scrollbar-hide relative flex h-full w-full flex-col overflow-y-scroll scroll-smooth px-8">
      <div className="mx-auto mt-4 mb-52 w-full max-w-5xl sm:mt-8 md:mb-32">
        <div className="text-secondary mb-4 sm:mb-6">
          Family recipes passed down from my grandmother to my mom to me.
        </div>
        {RecipesData.recipeList.length > 0 ? (
          <>
            <p className="text-tertiary mb-2 text-sm">
              {RecipesData.recipeList.length} recipe
              {RecipesData.recipeList.length !== 1 ? "s" : ""}
            </p>
            {RecipesData.recipeList.map((recipe, index) => (
              <RecipeItem key={index} {...recipe} />
            ))}
          </>
        ) : (
          <p className="text-secondary text-sm italic">Coming soon...</p>
        )}
      </div>
    </div>
  );
}
