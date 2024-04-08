import Image from 'next/image'
import { MapPin } from 'react-feather'
import { Detail } from './Detail'

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
        <div className="justify-center flex mb-6 md:ml-20 dark:hidden">
          <Image
            src="/static/img/avatar.png"
            alt="Ishan"
            width={200}
            height={200}
            quality={100}
          />
        </div>

        <div className="pb-24 md:pb-4 space-y-12 md:space-y-16 dark:mt-8">
          {/* Bio */}
          <SectionContainer>
            <SectionTitle />
            <SectionContent>
              <div className="prose -mb-8">
                <p>
                  Hey, I'm Ishan! I'm a founding engineer at <a href="https://www.ycombinator.com/companies/happenstance">Happenstance</a> (YC W24) and like building with LLMs in my free time.
                  I graduated from UT Austin with degrees in Computer Engineering and Mathematics and now I live in NYC.
                </p>
                <p className="-mb-2">
                  In the past, I've worked on:
                </p>
                <ul>
                  <li>Distributed systems for earnings reports at <a href="https://www.bloomberg.com/company/">Bloomberg</a></li>
                  <li>Interpretability research with <a href="https://mahowak.github.io">Kyle Mahowald</a></li>
                  <li>LLMs for web browsing at <a href="https://minion.ai">Minion AI</a></li>
                  <li>Text-to-speech model evaluation at <a href="https://unrealspeech.com/">Unreal Speech</a></li>
                  <li>Configurable throttling for video classifications at <a href="https://www.youtube.com/jobs/trust-and-safety/">YouTube</a></li>
                  <li>Fraud detection using customer reviews at <a href="https://www.capitalone.com/tech/machine-learning/">Capital One</a></li>
                </ul>
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Socials */}
          <SectionContainer>
            <SectionTitle>Online</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                <TableRow
                  href={'mailto:ishan0102@gmail.com'}
                  title={'Email'}
                  subtitle={'Send'}
                  date={''}
                />
                <TableRow
                  href={'https://github.com/ishan0102'}
                  title={'GitHub'}
                  subtitle={'Follow'}
                  date={''}
                />
                <TableRow
                  href={'https://twitter.com/ishan0102'}
                  title={'Twitter'}
                  subtitle={'Follow'}
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
                src="/static/img/nyc.png"
                width={550}
                height={300}
                layout="responsive"
                className="rounded-xl"
                quality={100}
                alt="Map of NYC with blue location dot in the middle"
              />
              <p className="flex items-center justify-end pt-2 space-x-2 text-sm text-quaternary md:text-right">
                <MapPin size={12} />
                <span>NYC</span>
              </p>
            </SectionContent>
          </SectionContainer>

          {/* Spotify Widget */}
          <SectionContainer>
            <SectionTitle>Music</SectionTitle>
            <SectionContent>
              <iframe className="rounded-xl" src="https://open.spotify.com/embed/playlist/12DxIGMOK6o2ZQ5PdT8Hzv?utm_source=generator" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </SectionContent>
          </SectionContainer>

          {/* :) */}
          <pre className="leading-5 ml-12 hidden md:block">
            {
              `
                   ,----------------,              ,---------,
              ,-----------------------,          ,"        ,"|
            ,"                      ,"|        ,"        ,"  |
           +-----------------------+  |      ,"        ,"    |
           |  .-----------------.  |  |     +---------+      |
           |  |                 |  |  |     | -==----'|      |
           |  | ishan0102:~$    |  |  |     |         |      |
           |  |                 |  |  |/----|\`---=    |      |
           |  |                 |  |  |   ,/|==== ooo |      ;
           |  |                 |  |  |  // |(((( [33]|    ,"
           |  \`-----------------'  |," .;'| |((((     |  ,"
           +-----------------------+  ;;  | |         |,"
              /_)______________(_/  //'   | +---------+
         ___________________________/___  \`,
        /  oooooooooooooooo  .o.  oooo /,   \,"-----------
       / ==ooooooooooooooo==.o.  ooo= //   ,\`\--{)B     ,"
      /_==__==========__==_ooo__ooo=_/'   /___________,"
      \`-----------------------------'
              `
            }
          </pre>
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  )
}
