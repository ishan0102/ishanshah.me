import Head from "next/head";
import Link from "next/link";
import { WritingData } from "../data/writing";

function Writing({ name, date, tagline, slug }) {
  return (
    <Link
      href={`/writing/${slug}`}
      className="text-secondary group flex justify-between py-1"
    >
      <strong className="text-primary flex-none font-medium group-hover:text-indigo-600">
        {name}
      </strong>
      <p className="ml-auto mr-8 hidden sm:inline">{tagline}</p>
      <p>{date}</p>
    </Link>
  );
}

export default function WritingPage() {
  return (
    <>
      <Head>
        <title>Writing • Ishan Shah</title>
        <meta property="og:title" content="Writing • Ishan Shah" key="title" />
      </Head>
      <div className="scrollbar-hide relative flex max-h-screen w-full flex-col overflow-y-scroll scroll-smooth px-8">
        <div className="mx-auto mb-52 mt-4 w-full max-w-3xl sm:mt-8 md:mb-32">
          <div className="text-secondary mb-2 sm:mb-6">
            Thoughts, essays, and articles on technology, AI, and more.
          </div>
          {WritingData.writingList.length > 0 ? (
            WritingData.writingList.map((writing, index) => {
              return (
                <Writing
                  key={index}
                  name={writing.name}
                  date={writing.date}
                  tagline={writing.tagline}
                  slug={writing.slug}
                />
              );
            })
          ) : (
            <p className="text-secondary text-sm italic">
              Writing coming soon...
            </p>
          )}
        </div>
      </div>
    </>
  );
}
