import Link from "next/link";

export function Nav() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 p-4 md:p-6">
      <div className="ml-0 mr-6 flex flex-shrink-0 items-center md:ml-4">
        <Link
          href="/"
          className="text-primary font-grenette inline-block text-xl font-semibold hover:text-indigo-500 md:text-2xl"
        >
          Ishan Shah
        </Link>
      </div>
      <div className="flex w-auto items-center">
        <div className="text-sm font-normal md:flex-grow md:text-base md:font-medium">
          <Link
            href="/portfolio"
            className="text-primary mr-3 inline-block hover:text-indigo-500 md:mr-8"
          >
            Portfolio
          </Link>
          <Link
            href="https://ishan.cafe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary mr-3 inline-block hover:text-indigo-500 md:mr-8"
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
