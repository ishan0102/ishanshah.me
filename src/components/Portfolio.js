import { ProjectData } from '../data/projects'

function Project({ name, date, tagline, link}) {
  return (
    <a href={link} className="flex justify-between text-secondary py-1 group">
      <strong className="flex-none font-medium text-gray-900 group-hover:text-indigo-600 dark:text-gray-100 dark:group-hover:text-indigo-500">{name}</strong>
      <p className="ml-auto hidden sm:inline mr-8">{tagline}</p>
      <p>{date.split(" ")[1]}</p>
    </a>
  )
}

export function Portfolio() {
  return (
    <div className="relative flex max-h-screen w-full flex-col overflow-y-scroll scrollbar-hide scroll-smooth px-8">
      <div className="mx-auto w-full max-w-2xl mt-8 mb-32">
        {ProjectData.projectsList.map((project, index) => {
          return <Project
            key={index}
            name={project.name}
            date={project.date}
            tagline={project.tagline}
            link={project.link}
          />
        })}
      </div>
    </div>
  )
}