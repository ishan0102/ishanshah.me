// import { ProjectData } from '../data/projects'

// function Project({ name, date, tagline, link}) {
//   return (
//     <a href={link} className="flex justify-between text-secondary py-1 group">
//       <strong className="flex-none font-medium text-gray-900 group-hover:text-indigo-600 dark:text-gray-100 dark:group-hover:text-indigo-500">{name}</strong>
//       <p className="ml-auto hidden sm:inline mr-8">{tagline}</p>
//       <p>{date}</p>
//     </a>
//   )
// }

export function Books() {
  return (
    <div className="relative flex max-h-screen w-full flex-col overflow-y-scroll scrollbar-hide scroll-smooth px-8">
      <div className="mx-auto w-full max-w-2xl mt-4 sm:mt-8 mb-52 md:mb-32">
        <div className="prose mb-2 sm:mb-6" >
          i love reading & my fav genre of books is sci-fi and biographies.
          list of books that i've read in the past :

          <p style={{fontSize:'20px',fontWeight:'bold', color:'black'}}>2024</p>

          <ul>

            <li>children of dune</li>

          </ul>


          <p style={{fontSize:'20px',fontWeight:'bold', color:'black'}}>2023</p>

          <ul>
            
            <li>1984</li>

            
          </ul>

          <p style={{fontSize:'20px',fontWeight:'bold', color:'black'}}>2022 & beyond</p>

          <ul>
            
            <li>steve jobs</li>
            
          </ul>


        </div>

        {/* {ProjectData.projectsList.map((project, index) => {
          return <Project
            key={index}
            name={project.name}
            date={project.date}
            tagline={project.tagline}
            link={project.link}
          />
        })} */}
      </div>
    </div>
  )
}