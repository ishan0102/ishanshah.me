import type { Metadata } from "next";
import { RecipesData } from "@/data/recipes";
import RecipeList from "./recipe-list";

export const metadata: Metadata = {
  title: "Recipes",
  openGraph: {
    title: "Recipes | Ishan Shah",
  },
};

export default function RecipesPage() {
  return (
    <div className="scrollbar-hide relative flex h-full w-full flex-col overflow-y-scroll scroll-smooth px-8">
      <div className="mx-auto mt-4 mb-52 w-full max-w-5xl sm:mt-8 md:mb-32">
        <p className="text-secondary mb-4 sm:mb-6">
          Family recipes passed down from my grandmother to my mom to me.
        </p>
        <RecipeList recipes={RecipesData.recipeList} />
      </div>
    </div>
  );
}
