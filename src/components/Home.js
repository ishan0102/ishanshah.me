import Image from 'next/image'
import { Detail } from './Detail'
import Link from 'next/link'
import { BookCarousel } from './BookCarousel'
import { Paintings } from './Paintings'

function SectionTitle(props) {
  return (
    <h4
      className='col-span-2 text-3xl font-bold text-black dark:text-white md:text-right md:text-2xl font-source-serif-4'
      {...props}
    />
  )
}

function SectionContent(props) {
  return <div className='col-span-12' {...props} />
}

function TableRow({ href, title, subtitle, date }) {
  return (
    <a
      href={href}
      className='flex items-center space-x-4 group'
    >
      <strong className='flex-none font-medium text-gray-900 group-hover:text-indigo-600 dark:text-gray-100 dark:group-hover:text-indigo-500 font-source-serif-4'>
        {title}
      </strong>
      <span className='w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800' />
      {subtitle && <span className='flex-none text-tertiary text-sm md:text-base font-source-serif-4'>{subtitle}</span>}
      {date && <span className='flex-none font-mono text-quaternary hidden md:flex font-source-serif-4'>{date}</span>}
    </a>
  )
}

function SectionContainer(props) {
  return (
    <div
      className='grid items-start grid-cols-1 md:grid-cols-12 gap-3 md:gap-6'
      {...props}
    />
  )
}

export function Home() {
  return (
    <Detail.Container>
      <Detail.ContentContainer>

        {/* Avatar */}
        <div className='justify-center flex mb-6 md:ml-20 dark:hidden'>
          {/* <Image
            src='/static/img/home.JPG'
            alt='marmik'
            width={200}
            height={200}
            quality={75}
            className='rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl filter-image'
          /> */}
        </div>

        <div className='pb-24 md:pb-4 space-y-12 md:space-y-16'>
          {/* Bio */}
          <SectionContainer>
          {/* <SectionTitle>about</SectionTitle> */}
            <SectionContent>
              <div className='prose prose-lg max-w-none -mb-8 font-source-serif-4'>
                <p className='text-4xl font-bold font-instrument-serif'>Hey, i&apos;m Marmik</p>
                <p className='text-xl font-instrument-serif'>welcome to my web <em>eden</em>.</p>
                
                {/* SVG Image */}
                {/* <div className='flex justify-center my-6'>
                  <Image
                    src='/static/img/blossom-2.png'
                    alt='blossom decoration'
                    width={20}
                    height={20}
                    className='opacity-70 dark:opacity-50'
                  />
                </div> */}
                <p className='text-lg'>since the past few years, most of my time is spent working on problems in deep learning. currently, 
                  i work on <em>interpretability</em> research, which i like to think of 
                  as <Link href='https://colah.github.io/notes/bio-analogies/' target='_blank' rel='noopener noreferrer' className='!text-amber-700 hover:!text-amber-800 dark:!text-amber-700 dark:hover:!text-amber-800 font-source-serif-4 !underline !decoration-solid !underline-offset-4 transition-colors'>the biology of artificial neural nets</Link>. 
                  i&apos;m very interested in understanding how deep learning algorithms gives rise to its own world of beautiful structure and elegant complexity and behaviors. </p>

                <p className='text-lg'>this summer, i&apos;m working at <span className='underline decoration-solid underline-offset-4 decoration-gray-400'>groq</span> on compound ai systems and fast model inference. 
                  concurrently, i&apos;m also exploring how to find mechanistic signatures of unfaithful reasoning in reasoning models using Cross Layer Transcoders.</p>
                
                <p className='text-lg'>in the past, i worked on independent <span className='underline decoration-solid underline-offset-4 decoration-gray-400'>research</span> on interpreting Mixture of Experts (MoEs) for expert specialization which got
                <Link href="https://openreview.net/forum?id=GS4WXncwSF&referrer=%5Bthe%20profile%20of%20Marmik%20Chaudhari%5D(%2Fprofile%3Fid%3D~Marmik_Chaudhari1)" target='_blank' rel='noopener noreferrer' className='!text-amber-700 hover:!text-amber-800 dark:!text-amber-700 dark:hover:!text-amber-800 font-source-serif-4 !underline !decoration-solid !underline-offset-4 transition-colors'> accepted</Link>  at ICLR&apos;25. </p>
                <p className='text-lg'>
                i love working with my friends a lot so i worked on <Link href="https://github.com/MarmikChaudhari/DenseTeX" target='_blank' rel='noopener noreferrer' className='!text-amber-700 hover:!text-amber-800 dark:!text-amber-700 dark:hover:!text-amber-800 font-source-serif-4 !underline !decoration-solid !underline-offset-4 transition-colors'>densetex</Link>  with
                3 of my best friends which is a fast and accurate model for image-to-latex for math equations using CNNs and transformers during <span className='underline decoration-solid underline-offset-4 decoration-gray-400'>buildspace</span> and 
                also was a <span className='underline decoration-solid underline-offset-4 decoration-gray-400'>ml engineer</span> at a startup working on ocr using vision transformers. 
                at my uni, i worked on <span className='underline decoration-solid underline-offset-4 decoration-gray-400'>computer vision</span> systems in battlebots for competitive <span className='underline decoration-solid underline-offset-4 decoration-gray-400'>robotics</span> tournament for more than a year and learned a lot about optimizing algorithms in hardware constraints.
                </p>

                <p className='text-lg'>apart from work, i enjoy reading books of various genres (<button 
                  onClick={() => document.getElementById('bookshelf-section').scrollIntoView({ behavior: 'smooth' })}
                  className='underline decoration-solid underline-offset-4 !text-amber-700 hover:!text-amber-800 dark:!text-amber-700 dark:hover:!text-amber-800 transition-colors cursor-pointer bg-transparent border-none p-0 font-inherit'
                >my bookshelf</button>) and i&apos;ve also been painting for a long time (<button 
                  onClick={() => document.getElementById('paintings-section').scrollIntoView({ behavior: 'smooth' })}
                  className='underline decoration-solid underline-offset-4 !text-amber-700 hover:!text-amber-800 dark:!text-amber-700 dark:hover:!text-amber-800 transition-colors cursor-pointer bg-transparent border-none p-0 font-inherit'
                >my paintings</button>). 
                recently, i&apos;ve been learning to play guitar as well. 
                 </p>

              </div>

            </SectionContent>
          </SectionContainer>

          {/* Book Carousel */}
          <SectionContainer id="bookshelf-section">
            <SectionContent>
              <div className="text-center mb-6">
                <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100 font-instrument-serif mb-2">
                  bookshelf
                </h3>
                {/* <p className="text-gray-600 dark:text-gray-400 font-source-serif-4">
                  books that have shaped my thinking lately
                </p> */}
              </div>
              <BookCarousel />
            </SectionContent>
          </SectionContainer>

          {/* Paintings */}
          <Paintings />

          <SectionContainer id="reach-out">
            <SectionContent>
            <div className='prose prose-lg max-w-none -mb-8 font-source-serif-4'>
                <p className='text-lg'> i like meeting new people and if anything from above is interesting to you, 
                  feel free to reach out to me on twitter or at <span className='underline decoration-dashed underline-offset-4'>marmik@berkeley.edu</span></p>
            </div>

            </SectionContent>
          </SectionContainer>

          {/* Asterism Divider */}
          <div className="asterism"></div>

          {/* Socials */}
          <SectionContainer>
            {/* <SectionTitle>online</SectionTitle> */}
            <SectionContent>
              <div className='flex justify-center space-x-8 md:space-x-12 font-source-serif-4 text-xl'>
                {/* <a
                  href='mailto:marmik@psu.edu'
                  className='font-bold text-gray-600 hover:text-amber-900 dark:text-gray-300 dark:hover:text-amber-700 transition-colors underline decoration-dashed underline-offset-4'
                >
                  email
                </a> */}
                <a
                  href='https://github.com/MarmikChaudhari'
                  className='font-bold text-gray-600 hover:text-amber-900 dark:text-gray-300 dark:hover:text-amber-700 transition-colors underline decoration-dashed underline-offset-4'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  github
                </a>
                <a
                  href='https://x.com/marmikch'
                  className='font-bold text-gray-600 hover:text-amber-900 dark:text-gray-300 dark:hover:text-amber-700 transition-colors underline decoration-dashed underline-offset-4'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  twitter
                </a>
                <a
                  href='https://scholar.google.com/citations?view_op=list_works&hl=en&user=YD3uM-4AAAAJ&gmla=ANZ5fUMO-b7o2UG733m8wLvuvn9mtxQFcbUPnEW177iA_VF-6ZhDwb6PzU6fwXSFxXE58cbKqHmOL5ed6HxSbMeG7c-wfNiIM_4'
                  className='font-bold text-gray-600 hover:text-amber-900 dark:text-gray-300 dark:hover:text-amber-700 transition-colors underline decoration-dashed underline-offset-4'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  scholar
                </a>
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Spotify Widget */}
          {/* <SectionContainer>
            <SectionTitle>music</SectionTitle>
            <SectionContent>
            {/* <iframe className='border-radius:12px' src='https://open.spotify.com/embed/playlist/1wu9NQCwZEDS3jJNvvalCZ?utm_source=generator&theme=0' width='100%' height='352' frameBorder='0' allowFullScreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe> */}
            {/* </SectionContent> */}
          {/* </SectionContainer> */} 

          
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  )
}
