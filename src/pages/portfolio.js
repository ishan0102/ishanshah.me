import Head from "next/head";
import Link from "next/link";
import { ProjectData } from "../data/projects";

function Project({ name, date, tagline, link }) {
  return (
    <Link
      href={link}
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

export default function portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio • Ishan Shah</title>
        <meta
          property="og:title"
          content="Portfolio • Ishan Shah"
          key="title"
        />
      </Head>
      <div className="scrollbar-hide relative flex max-h-screen w-full flex-col overflow-y-scroll scroll-smooth px-8">
        <div className="mx-auto mb-52 mt-4 w-full max-w-2xl sm:mt-8 md:mb-32">
          <div className="text-secondary mb-2 sm:mb-6">
            My favorite hobby is doing side projects, ranging from writing my
            own textbook to making my own productivity tools to browsing the web
            autonomously. These projects have been visited over 200,000 times.
          </div>
          {ProjectData.projectsList.map((project, index) => {
            return (
              <Project
                key={index}
                name={project.name}
                date={project.date}
                tagline={project.tagline}
                link={project.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
