import type { Metadata } from "next";
import ReadingClient from "@/app/reading/reading-client";

export const metadata: Metadata = {
  title: "Reading",
  openGraph: {
    title: "Reading | Ishan Shah",
  },
};

export default function ReadingPage() {
  return <ReadingClient />;
}
