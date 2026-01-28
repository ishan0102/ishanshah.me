"use client";

import { useEffect, useState, useMemo } from "react";
import { ChevronDown, ChevronRight, Search } from "lucide-react";

interface Ingredient {
  item: string;
  quantity: string | null;
  unit: string | null;
  notes: string | null;
}

interface Recipe {
  name: string;
  original_name: string | null;
  category: string;
  description: string;
  servings: string | null;
  prep_time: string | null;
  cook_time: string | null;
  ingredients: Ingredient[];
  instructions: string[];
  tips: string[];
  tags: {
    cuisine: string[];
    diet: string[];
    difficulty: string;
    cooking_method: string[];
    occasion: string[];
  };
}

interface RecipesData {
  recipes: Recipe[];
}

function formatIngredient(ing: Ingredient): string {
  let str = "";
  if (ing.quantity) str += ing.quantity + " ";
  if (ing.unit) str += ing.unit + " ";
  str += ing.item;
  if (ing.notes) str += ` (${ing.notes})`;
  return str.trim();
}

function RecipeItem({ recipe }: { recipe: Recipe }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-start justify-between gap-4 py-3 text-left"
      >
        <div className="flex min-w-0 flex-1 items-start gap-2">
          <span className="mt-1 shrink-0 text-gray-400">
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </span>
          <div className="min-w-0">
            <strong className="text-primary font-medium group-hover:text-indigo-600">
              {recipe.name}
            </strong>
            {recipe.original_name && recipe.original_name !== recipe.name && (
              <span className="text-tertiary ml-2 text-sm">
                ({recipe.original_name})
              </span>
            )}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          {recipe.tags.difficulty && (
            <span className="text-tertiary hidden text-sm capitalize sm:block">
              {recipe.tags.difficulty}
            </span>
          )}
          <span className="text-secondary text-sm capitalize">
            {recipe.category}
          </span>
        </div>
      </button>

      {isOpen && (
        <div className="pb-4 pl-6">
          <p className="text-secondary mb-4 text-sm">{recipe.description}</p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="text-primary mb-2 font-medium">Ingredients</h4>
              <ul className="text-secondary space-y-1 text-sm">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-tertiary mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current" />
                    {formatIngredient(ing)}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-primary mb-2 font-medium">Instructions</h4>
              <ol className="text-secondary space-y-2 text-sm">
                {recipe.instructions.map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-tertiary shrink-0 font-mono text-xs">
                      {i + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {recipe.tips.length > 0 && (
            <div className="mt-4">
              <h4 className="text-primary mb-2 font-medium">Tips</h4>
              <ul className="text-secondary space-y-1 text-sm">
                {recipe.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-tertiary mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {recipe.tags.cuisine.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs text-indigo-700 capitalize"
              >
                {tag}
              </span>
            ))}
            {recipe.tags.diet.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-2 py-0.5 text-xs text-green-700 capitalize"
              >
                {tag}
              </span>
            ))}
            {recipe.tags.cooking_method.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-amber-50 px-2 py-0.5 text-xs text-amber-700 capitalize"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SkeletonRow() {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-gray-200 py-3">
      <div className="flex min-w-0 flex-1 items-start gap-2">
        <div className="mt-1 h-4 w-4 shrink-0 animate-pulse rounded bg-[#e8e4d9]" />
        <div className="h-5 w-full max-w-md animate-pulse rounded bg-[#e8e4d9]" />
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <div className="hidden h-4 w-16 animate-pulse rounded bg-[#e8e4d9] sm:block" />
        <div className="h-4 w-20 animate-pulse rounded bg-[#e8e4d9]" />
      </div>
    </div>
  );
}

export default function RecipesClient() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    async function loadRecipes() {
      try {
        const res = await fetch("/static/json/recipes.json");
        const data: RecipesData = await res.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Error loading recipes:", error);
      }
      setLoading(false);
    }
    loadRecipes();
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(recipes.map((r) => r.category));
    return ["all", ...Array.from(cats).sort()];
  }, [recipes]);

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch =
        search === "" ||
        recipe.name.toLowerCase().includes(search.toLowerCase()) ||
        recipe.description.toLowerCase().includes(search.toLowerCase()) ||
        recipe.ingredients.some((i) =>
          i.item.toLowerCase().includes(search.toLowerCase()),
        );

      const matchesCategory =
        selectedCategory === "all" || recipe.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [recipes, search, selectedCategory]);

  return (
    <div className="scrollbar-hide relative flex h-full w-full flex-col overflow-y-scroll scroll-smooth px-8">
      <div className="mx-auto mt-4 mb-52 w-full max-w-5xl sm:mt-8 md:mb-32">
        <div className="text-secondary mb-4 sm:mb-6">
          Family recipes passed down from my grandmother to my mom to me. Search
          by name or ingredient.
        </div>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search recipes or ingredients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white py-2 pr-4 pl-10 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm capitalize focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <>
            {Array.from({ length: 20 }).map((_, i) => (
              <SkeletonRow key={i} />
            ))}
          </>
        ) : filteredRecipes.length > 0 ? (
          <>
            <p className="text-tertiary mb-2 text-sm">
              {filteredRecipes.length} recipe
              {filteredRecipes.length !== 1 ? "s" : ""}
            </p>
            {filteredRecipes.map((recipe, index) => (
              <RecipeItem key={index} recipe={recipe} />
            ))}
          </>
        ) : (
          <p className="text-secondary text-sm italic">No recipes found.</p>
        )}
      </div>
    </div>
  );
}
