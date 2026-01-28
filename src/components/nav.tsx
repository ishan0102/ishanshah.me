"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between border-b border-gray-200 p-4 md:p-6">
      <div className="mr-6 ml-0 flex shrink-0 items-center md:ml-4">
        <Link
          href="/"
          className="text-primary font-grenette inline-block text-xl font-semibold hover:text-indigo-500 md:text-2xl"
        >
          Ishan Shah
        </Link>
      </div>
      <div className="flex w-auto items-center">
        <div className="text-sm font-medium md:grow md:text-base">
          <Link
            href="/projects"
            className={`mr-3 inline-block md:mr-8 ${pathname === "/projects" ? "text-indigo-500" : "text-primary hover:text-indigo-500"}`}
          >
            Projects
          </Link>
          <Link
            href="/writing"
            className={`mr-3 inline-block md:mr-8 ${pathname?.startsWith("/writing") ? "text-indigo-500" : "text-primary hover:text-indigo-500"}`}
          >
            Writing
          </Link>
          <Link
            href="/reading"
            className={`mr-3 inline-block md:mr-8 ${pathname?.startsWith("/reading") ? "text-indigo-500" : "text-primary hover:text-indigo-500"}`}
          >
            Reading
          </Link>
        </div>
      </div>
    </nav>
  );
}
