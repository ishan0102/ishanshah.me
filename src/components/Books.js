export function Books() {
  return (
    <div className='relative flex max-h-screen w-full flex-col overflow-y-scroll scrollbar-hide scroll-smooth px-8'>
      <div className='mx-auto w-full max-w-2xl mt-4 sm:mt-8 mb-52 md:mb-32'>
        <div className='prose mb-2 sm:mb-6' >

        <p style={{fontSize:'16px'}}> </p>

          i love reading almost all types of books but my fav genre is sci-fi, history and biographies.
          list of books that i&apos;ve read in the past :

          <p style={{fontSize:'20px',fontWeight:'bold', color:'black'}}></p>

          <p style={{fontSize:'20px',fontWeight:'bold'}} className="text-off-black dark:text-off-white">2025</p>

          <ul>
            <li>american prometheus (currently reading)</li>

            <li>thinking in systems</li>

            <li>the idea factory: bell labs and the great age of american innovation</li>

            </ul>
          

          <p style={{fontSize:'20px',fontWeight:'bold'}} className="text-off-black dark:text-off-white">2024</p>

          <ul>

            <li>the trial by kafka </li>

            <li>murder on the orient express </li>

            <li>norwegian wood</li>

            <li>a brief history of intelligence</li>

            <li>do androids dream of electric sheep </li>

            <li>children of dune </li>

            <li>surely you&apos;re joking, mr. feynman</li>

            <li>looking for alaska</li>

            <li>the great gatsby</li>

            <li>dune messiah</li>

            <li>dune</li>

            <li>foundation</li>

            <li>the fellowship of the ring</li>


          </ul>


          <p style={{fontSize:'20px',fontWeight:'bold'}} className="text-off-black dark:text-off-white">2023 & beyond</p>

          <ul>
            
            <li>1984</li>

            <li>the lightning thief</li>

            <li>and then there were none</li>

            <li>the fault in our stars</li>

            <li>sapiens</li>

            <li>steve jobs (all time fav.)</li>

            <li>man&apos;s search for meaning</li>

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