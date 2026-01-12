"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Globe } from "lucide-react";

interface Entry {
  url: string;
  notion_timestamp: string;
  title: string;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Module-level cache to persist data across navigations
let cachedEntries: Entry[] | null = null;

function formatDate(timestamp: string): string {
  const date = new Date(timestamp);
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(date);
}

function getDomain(url: string): string {
  try {
    const domain = new URL(url).hostname;
    return domain.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function getBaseDomain(url: string): string {
  const domain = getDomain(url);
  const parts = domain.split(".");
  if (parts.length >= 2) {
    return parts.slice(-2).join(".");
  }
  return domain;
}

function transformArxivUrl(url: string): string {
  return url.replace(/pdf(?=.)/, "abs").replace(/v\d+$/, "");
}

function getFaviconUrls(domain: string | undefined): string[] {
  if (!domain) return [];
  const clean = domain.replace(/^www\./, "");
  const parts = clean.split(".");
  const base = parts.length >= 3 ? parts.slice(-2).join(".") : clean;
  return [
    `https://www.google.com/s2/favicons?domain=${base}&sz=128`,
    `https://www.google.com/s2/favicons?domain=www.${base}&sz=128`,
    `https://www.google.com/s2/favicons?domain=${clean}&sz=128`,
  ];
}

function Favicon({ domain }: { domain: string | undefined }) {
  const [urlIndex, setUrlIndex] = useState(0);
  const [showFallback, setShowFallback] = useState(false);
  const urls = getFaviconUrls(domain);

  const handleError = () => {
    if (urlIndex < urls.length - 1) {
      setUrlIndex(urlIndex + 1);
    } else {
      setShowFallback(true);
    }
  };

  if (showFallback || !urls.length) {
    return <Globe className="h-4 w-4 shrink-0 text-gray-400" />;
  }

  return (
    <img
      src={urls[urlIndex]}
      alt=""
      className="h-4 w-4 shrink-0 rounded-full object-cover"
      onError={handleError}
    />
  );
}

function ReadingItem({ entry }: { entry: Entry }) {
  const link = transformArxivUrl(entry.url);
  const domain = getDomain(link);
  const baseDomain = getBaseDomain(link);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between gap-4 py-1"
    >
      <div className="flex min-w-0 flex-1 items-start gap-2">
        <span className="mt-1 shrink-0">
          <Favicon domain={domain} />
        </span>
        <strong className="text-primary font-medium group-hover:text-indigo-600">
          {entry.title}
        </strong>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <span className="text-tertiary hidden font-mono text-sm sm:block">
          {baseDomain}
        </span>
        <span className="text-secondary font-mono text-sm whitespace-nowrap">
          {formatDate(entry.notion_timestamp)}
        </span>
      </div>
    </a>
  );
}

function SkeletonRow() {
  return (
    <div className="flex items-start justify-between gap-4 py-1.5">
      <div className="flex min-w-0 flex-1 items-start gap-2">
        <div className="mt-1 h-4 w-4 shrink-0 animate-pulse rounded-full bg-[#ddd9cc]" />
        <div className="h-5 w-full max-w-md animate-pulse rounded bg-[#e8e4d9]" />
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <div className="hidden h-4 w-20 animate-pulse rounded bg-[#e8e4d9] sm:block" />
        <div className="h-4 w-24 animate-pulse rounded bg-[#e8e4d9]" />
      </div>
    </div>
  );
}

export default function ReadingClient() {
  const [entries, setEntries] = useState<Entry[]>(cachedEntries ?? []);
  const [loading, setLoading] = useState(cachedEntries === null);

  useEffect(() => {
    // Skip fetch if we already have cached data
    if (cachedEntries !== null) return;

    async function fetchEntries() {
      const { data, error } = await supabase
        .from("links")
        .select("url, notion_timestamp, title")
        .order("notion_timestamp", { ascending: false });

      if (error) {
        console.error("Error fetching data:", error);
        setEntries([]);
      } else {
        const entries = data ?? [];
        cachedEntries = entries;
        setEntries(entries);
      }
      setLoading(false);
    }

    fetchEntries();
  }, []);

  return (
    <div className="scrollbar-hide relative flex h-full w-full flex-col overflow-y-scroll scroll-smooth px-8">
      <div className="mx-auto mt-4 mb-52 w-full max-w-5xl sm:mt-8 md:mb-32">
        <div className="text-secondary mb-2 sm:mb-6">
          Articles, papers, and blog posts I&apos;ve been reading.
        </div>
        {loading ? (
          <>
            {Array.from({ length: 100 }).map((_, i) => (
              <SkeletonRow key={i} />
            ))}
          </>
        ) : entries.length > 0 ? (
          entries.map((entry, index) => (
            <ReadingItem key={index} entry={entry} />
          ))
        ) : (
          <p className="text-secondary text-sm italic">No entries found.</p>
        )}
      </div>
    </div>
  );
}
