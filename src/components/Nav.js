import Link from "next/link";

export function Nav() {
  return (
    <nav className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
      <div className="flex items-center flex-shrink-0 ml-0 md:ml-4 mr-6">
        <Link
          href="/"
          className="inline-block text-primary text-xl md:text-2xl font-semibold hover:text-indigo-500 font-grenette"
        >
          Ishan Shah
        </Link>
      </div>
      <div className="flex items-center w-auto">
        <div className="text-sm md:text-base font-normal md:font-medium md:flex-grow">
          <Link
            href="/portfolio"
            className="inline-block mr-3 md:mr-8 text-primary hover:text-indigo-500"
          >
            Portfolio
          </Link>
          <Link
            href="https://ishan.coffee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mr-3 md:mr-8 text-primary hover:text-indigo-500"
          >
            Notes
          </Link>
        </div>
      </div>
    </nav>
  );
}
