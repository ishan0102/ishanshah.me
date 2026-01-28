import type { Metadata } from "next";
import RecipesClient from "./recipes-client";

export const metadata: Metadata = {
  title: "Recipes",
  openGraph: {
    title: "Recipes | Ishan Shah",
  },
};

export default function RecipesPage() {
  return <RecipesClient />;
}
