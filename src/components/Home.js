import Image from 'next/image'
import { Detail } from './Detail'
import Link from 'next/link'

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
                <p className='text-3xl font-bold font-instrument-serif'>hey, i&apos;m Marmik</p>
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
                
                <p className='text-lg'>
                   i&apos;m a 20 yo cs + math major at penn state university. i spend most of my time working on <em>interpretability</em> research for neural nets, reading deep learning papers and exploring math.
                  apart from this, i&apos;ve been <em>painting</em> since a long time and have also been learning to play <em>guitar</em> recently. i also love watching movies and reading <Link href='/books' className='text-amber-800 hover:text-amber-950 dark:text-amber-600 dark:hover:text-amber-400 font-source-serif-4 underline decoration-solid'>books</Link>.
                </p>
                <p className='text-lg -mb-2'>
                  things i&apos;ve worked on in the past or am currently working on :
                </p>
                <ul>
                  <li>inference and compound ai systems @ groq</li>
                  <li>tinkering with chain of thought faithfulness in reasoning models</li>
                  <li>research on interpreting Mixture of Experts (MoEs) for domain specialization. (published at ICLR&apos;25 Workshop on Sparsity in LLMs)</li>
                  <li>created a very fast and accurate model for image-to-latex for math equations using CNNs and transformers with my friends during summer&apos;24</li>
                  <li>ml developer at a startup working on ocr using vision transformers</li>
                  <li>computer vision algorithms for a fully autonomous robot for <Link href='https://www.robomaster.com/en-US' target='_blank' rel='noopener noreferrer' className='text-amber-800 hover:text-amber-950 dark:text-amber-600 dark:hover:text-amber-400 font-source-serif-4 underline decoration-solid'>robomaster</Link> league team @ penn state</li>
                </ul>
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
                <a
                  href='mailto:marmik@psu.edu'
                  className='font-bold text-gray-600 hover:text-amber-900 dark:text-gray-300 dark:hover:text-amber-700 transition-colors underline decoration-dashed underline-offset-4'
                >
                  email
                </a>
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
