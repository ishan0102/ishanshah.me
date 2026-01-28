"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { RecipeEntry } from "@/data/recipes";

function RecipeItem({ name, slug, category, description, tags }: RecipeEntry) {
  return (
    <Link
      href={`/recipes/${slug}`}
      className="group flex items-start justify-between gap-4 border-b border-gray-200 py-3 last:border-b-0"
    >
      <div className="min-w-0 flex-1">
        <strong className="text-primary font-medium group-hover:text-indigo-600">
          {name}
        </strong>
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

export default function RecipeList({ recipes }: { recipes: RecipeEntry[] }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => {
    const cats = new Set(recipes.map((r) => r.category));
    return ["all", ...Array.from(cats).sort()];
  }, [recipes]);

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const searchLower = search.toLowerCase();
      const matchesSearch =
        search === "" ||
        recipe.name.toLowerCase().includes(searchLower) ||
        recipe.original_name?.toLowerCase().includes(searchLower) ||
        recipe.description.toLowerCase().includes(searchLower) ||
        recipe.tags?.cuisine?.some((c) =>
          c.toLowerCase().includes(searchLower),
        ) ||
        recipe.tags?.diet?.some((d) => d.toLowerCase().includes(searchLower));

      const matchesCategory =
        selectedCategory === "all" || recipe.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [recipes, search, selectedCategory]);

  return (
    <>
      <div className="mb-4 space-y-3">
        <input
          type="text"
          placeholder={`Search ${recipes.length} recipes...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-primary w-full border-b border-gray-300 bg-transparent py-1.5 text-sm placeholder:text-gray-400 focus:border-gray-500 focus:outline-none"
        />
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer font-medium capitalize transition-colors ${
                selectedCategory === cat
                  ? "text-indigo-500"
                  : "text-tertiary hover:text-secondary"
              }`}
            >
              {cat === "all" ? "all" : cat}
            </button>
          ))}
        </div>
      </div>

      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe, index) => (
          <RecipeItem key={index} {...recipe} />
        ))
      ) : (
        <p className="text-tertiary py-8 text-sm">No recipes found.</p>
      )}
    </>
  );
}
