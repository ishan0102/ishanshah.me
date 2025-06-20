import { Detail } from './Detail'
import { Bookshelf } from './Bookshelf'
import { booksData } from '../data/booksData'

export function Books() {
  return (
    <Detail.Container>
      <Detail.ContentContainer>
        
        {/* Bookshelf 3D Visualization */}
        <div className='mb-8'>
          <Bookshelf books={booksData} />
        </div>

        {/* Asterism Divider */}
        <div className="asterism"></div>

        <div className='pb-24 md:pb-4 space-y-12 md:space-y-16'>
          <div className='grid items-start grid-cols-1 md:grid-cols-12 gap-3 md:gap-6'>
            <div className='col-span-12'>
              <div className='prose prose-lg max-w-none -mb-8 font-source-serif-4'>

                <p style={{fontSize:'16px'}}> </p>

                <p className='text-lg'>
                  i love reading almost all types of books but my fav genre is sci-fi, history and biographies.
                  list of books that i&apos;ve read in the past :
                </p>

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
            </div>
          </div>
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  )
}