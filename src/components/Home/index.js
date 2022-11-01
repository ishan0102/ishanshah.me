import Image from 'next/image'
import { MapPin } from 'react-feather'
import { Detail } from '../Detail'
import { HomeData } from '../../data/HomeData'

function SectionTitle(props) {
  return (
    <h4
      className="col-span-2 text-lg font-semibold text-primary md:text-right md:text-base md:font-normal md:text-opacity-40"
      {...props}
    />
  )
}

function SectionContent(props) {
  return <div className="col-span-10" {...props} />
}

function TableRow({ href, title, subtitle, date }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="flex items-center space-x-4 group"
    >
      <strong className="flex-none font-medium text-gray-900 group-hover:text-indigo-600 dark:text-gray-100 dark:group-hover:text-indigo-500">
        {title}
      </strong>
      <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800" />
      {subtitle && <span className="flex-none text-tertiary text-sm md:text-base">{subtitle}</span>}
      {date && <span className="flex-none font-mono text-quaternary hidden md:flex">{date}</span>}
    </a>
  )
}

function SectionContainer(props) {
  return (
    <div
      className="grid items-start grid-cols-1 md:grid-cols-12 gap-3 md:gap-6"
      {...props}
    />
  )
}

export function Home() {
  return (
    <Detail.Container>
      <Detail.ContentContainer>
        {/* Avatar */}
        <div className="flex justify-center dark:hidden -mt-8 md:ml-16">
          <Image
            src="/static/img/avatar.jpeg"
            alt="Ishan"
            width={250}
            height={250}
          />
        </div>

        <div className="pb-24 md:pb-4 space-y-12 md:space-y-16">
          {/* Bio */}
          <SectionContainer>
            <SectionTitle />
            <SectionContent>
              <div className="prose">
                <p>
                  Hey, I&apos;m Ishan. I&apos;m a software engineer, student,{' '}
                  <a 
                    href="https://ishan.coffee" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    writer
                  </a>
                  , and{' '}
                  <a 
                    href="https://github.com/ishan0102" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    tinkerer
                  </a>
                  . I&apos;m currently building{' '}
                  <a
                    href="https://unrealspeech.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Unreal Speech
                  </a>
                  , a new text-to-speech startup focused on delivering affordable, authentic
                  voice engines. I&apos;m also wrapping up a double major in computer engineering
                  and math at UT Austin.
                </p>
                <p>
                  I interned at YouTube this past summer and worked on making ML classification
                  infrastructure more reliable. Before that, I developed a natural language processing 
                  pipeline at Capital One to detect fraud in car dealerships using customer reviews.
                </p>
                <p>
                  I&apos;ve also{' '}
                  <a 
                    href="https://hai.ischool.utexas.edu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    researched responsible AI
                  </a>
                  {' '}to tackle Austin homelessness, built a tool to summarize emails, and 
                  taught a couple hundred students through a combination of teaching classes
                  and tutoring.
                </p>
                <p>
                  These days, I play a lot of sand volleyball, explore local speakeasies, and 
                  wander around national parks (attempted to hike Half Dome most recently).
                </p>
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Socials */}
          <SectionContainer>
            <SectionTitle>Online</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                <TableRow
                  href={'mailto:ishan0102@utexas.edu'}
                  title={'Email'}
                  subtitle={'Send'}
                  date={''}
                />
                <TableRow
                  href={'https://github.com/ishan0102'}
                  title={'GitHub'}
                  subtitle={'Browse'}
                  date={''}
                />
                <TableRow
                  href={'https://www.linkedin.com/in/ishan0102/'}
                  title={'LinkedIn'}
                  subtitle={'Connect'}
                  date={''}
                />
                <TableRow
                  href={'https://twitter.com/ishan0102'}
                  title={'Twitter'}
                  subtitle={'Follow'}
                  date={''}
                />
                <TableRow
                  href={'https://open.spotify.com/user/ishan0102?si=510c088c653249d2'}
                  title={'Spotify'}
                  subtitle={'Listen'}
                  date={''}
                />
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Where */}
          <SectionContainer>
            <SectionTitle>Where</SectionTitle>
            <SectionContent>
              <Image
                priority
                src="/static/img/austin.png"
                width={550}
                height={300}
                layout="responsive"
                className="rounded-xl"
                quality={100}
                alt="Map of Austin with blue location dot in the middle"
              />
              <p className="flex items-center justify-end pt-2 space-x-2 text-sm text-quaternary md:text-right">
                <MapPin size={12} />
                <span>Austin, TX</span>
              </p>
            </SectionContent>
          </SectionContainer>

          {/* Work */}
          <SectionContainer>
            <SectionTitle>Work</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                {HomeData.workHistory.map((job) => (
                  <TableRow
                    href={job.href}
                    title={job.title}
                    subtitle={job.subtitle}
                    date={job.date}
                    key={job.href}
                  />
                ))}
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Research */}
          <SectionContainer>
            <SectionTitle>Research</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                {HomeData.research.map((org) => (
                  <TableRow
                    href={org.href}
                    title={org.title}
                    subtitle={org.subtitle}
                    date={org.date}
                    key={org.href}
                  />
                ))}
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Organizations */}
          <SectionContainer>
            <SectionTitle>Organizations</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                {HomeData.organizations.map((org) => (
                  <TableRow
                    href={org.href}
                    title={org.title}
                    subtitle={org.subtitle}
                    date={org.date}
                    key={org.href}
                  />
                ))}
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Spotify Widget */}
          <SectionContainer>
            <SectionTitle>Music</SectionTitle>
            <SectionContent>
              <iframe className="rounded-xl" src="https://open.spotify.com/embed/playlist/12DxIGMOK6o2ZQ5PdT8Hzv?utm_source=generator" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </SectionContent>
          </SectionContainer>

          {/* Footer */}
          <SectionContainer>
            <SectionTitle></SectionTitle>
            <SectionContent>
              <div className="flex justify-center">
                <div className="prose">
                  Design inspired by <a href="https://www.brianlovin.com" target="_blank" rel="noopener noreferrer">Brian Lovin</a>
                </div>
              </div>
            </SectionContent>
          </SectionContainer>
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  )
}
