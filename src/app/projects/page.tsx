import type { Metadata } from "next";
import Link from "next/link";
import { ProjectData, type Project } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  openGraph: {
    title: "Projects | Ishan Shah",
  },
};

function ProjectItem({ name, date, tagline, link }: Project) {
  return (
    <Link
      href={link}
      className="text-secondary group flex justify-between py-1"
    >
      <strong className="text-primary flex-none font-medium group-hover:text-indigo-600">
        {name}
      </strong>
      <p className="text-tertiary mr-8 ml-auto hidden sm:inline">{tagline}</p>
      <p>{date}</p>
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <div className="scrollbar-hide relative flex h-full w-full flex-col overflow-y-scroll scroll-smooth px-8">
      <div className="mx-auto mt-4 mb-52 w-full max-w-5xl sm:mt-8 md:mb-32">
        <div className="text-secondary mb-2 sm:mb-6">
          My favorite hobby is doing side projects, ranging from writing my own
          textbook to making my own productivity tools to browsing the web
          autonomously. These projects have been visited over 250,000 times.
        </div>
        {ProjectData.projectsList.map((project, index) => {
          return (
            <ProjectItem
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
  );
}
