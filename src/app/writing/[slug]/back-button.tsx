"use client";

import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-secondary mb-4 text-sm hover:text-indigo-600"
    >
      ← Back
    </button>
  );
}
