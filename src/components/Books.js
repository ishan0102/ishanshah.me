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

        <p style={{fontSize:'16px'}}> "a shelf of books is a shelf of many lives and ideas and imaginations.
        the true lover of books enjoys all kinds of books, even some nonsense now and then, because enjoying nonsense from others can teach us to also laugh at ourselves. 
        a person who does not learn to laugh at his own problems and weaknesses and foolishness can never be a truly educated or a truly happy person. also, probably the same thing could be said of a person who does not enjoy learning and growing all his life."</p>

         
          i love reading almost all types of stuff but my fav genre is sci-fi and biographies.
          list of books that i've read in the past :

          <p style={{fontSize:'20px',fontWeight:'bold', color:'black'}}></p>


          <p style={{fontSize:'20px',fontWeight:'bold', color:'black'}}>2024</p>

          <ul>

            <li>norwegian wood (currently reading) </li>

            <li>a brief history of intelligence</li>

            <li>do androids dream of electric sheep </li>

            <li>children of dune </li>

            <li>surely you're joking, mr. feynman</li>

            <li>looking for alaska</li>

            <li>the great gatsby</li>

            <li>dune messiah</li>

            <li>dune</li>

            <li>foundation</li>

            <li>the fellowship of the ring</li>


          </ul>


          <p style={{fontSize:'20px',fontWeight:'bold', color:'black'}}>2023</p>

          <ul>
            
            <li>1984</li>

            <li>the lightning thief</li>

            <li>and then there were none</li>

            <li>the fault in our stars</li>


            
          </ul>

          <p style={{fontSize:'20px',fontWeight:'bold', color:'black'}}>2022 & beyond</p>

          <ul>

            <li>sapiens</li>

            <li>steve jobs (all time fav.)</li>

            <li>man's search for meaning</li>

            <li>21 lessons for the 21st century</li>

            <li>how google works</li>

            <li>the innovators</li>

            <li>einstein : his life and universe</li>

            <li>atomic habits</li>

            <li>deep work</li>

            
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