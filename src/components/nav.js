import Link from "next/link";
import { useRouter } from "next/router";

export function Nav() {
  const router = useRouter();

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
        <div className="text-sm font-normal md:grow md:text-base md:font-medium">
          <Link
            href="/projects"
            className={`mr-3 inline-block md:mr-8 ${router.pathname === "/projects" ? "text-indigo-500" : "text-primary hover:text-indigo-500"}`}
          >
            Projects
          </Link>
          <Link
            href="/writing"
            className={`mr-3 inline-block md:mr-8 ${router.pathname.startsWith("/writing") ? "text-indigo-500" : "text-primary hover:text-indigo-500"}`}
          >
            Writing
          </Link>
          <Link
            href="https://rsrch.space"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary mr-3 inline-block hover:text-indigo-500 md:mr-8"
          >
            Reading
          </Link>
        </div>
      </div>
    </nav>
  );
}
