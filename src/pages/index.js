import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function SectionTitle(props) {
  return (
    <h4
      className="text-primary col-span-2 text-lg font-semibold md:text-right md:text-base md:font-normal md:text-opacity-40"
      {...props}
    />
  );
}

function SectionContent(props) {
  return <div className="col-span-10" {...props} />;
}

function TableRow({ href, title, subtitle, date }) {
  return (
    <a href={href} className="group flex items-center space-x-4">
      <strong className="text-primary flex-none font-medium group-hover:text-indigo-600">
        {title}
      </strong>
      <span className="w-full shrink border-t border-dashed border-gray-300" />
      {subtitle && (
        <span className="text-tertiary flex-none text-sm md:text-base">
          {subtitle}
        </span>
      )}
      {date && (
        <span className="text-quaternary hidden flex-none font-mono md:flex">
          {date}
        </span>
      )}
    </a>
  );
}

function SectionContainer(props) {
  return (
    <div
      className="grid grid-cols-1 items-start gap-3 md:grid-cols-12 md:gap-6"
      {...props}
    />
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Ishan Shah</title>
        <meta property="og:title" content="Ishan Shah" key="title" />
      </Head>
      <div className="scrollbar-hide relative flex max-h-screen w-full flex-col overflow-y-scroll">
        <div className="mx-auto w-full max-w-3xl px-4 pb-32 md:px-8 md:pt-2">
          {/* Avatar */}
          <div className="mb-6 flex justify-center md:ml-20">
            <Image
              src="/static/img/avatar.png"
              alt="Ishan"
              width={200}
              height={200}
              priority
            />
          </div>

          <div className="space-y-12 pb-24 md:space-y-16 md:pb-4">
            {/* Bio */}
            <SectionContainer>
              <SectionTitle />
              <SectionContent>
                <div className="text-secondary -mb-6 leading-7">
                  <p className="mb-5">
                    Hey, I'm Ishan! I'm a founding engineer at{" "}
                    <Link
                      href="https://happenstance.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center font-medium text-indigo-500"
                    >
                      Happenstance
                    </Link>{" "}
                    and enjoy building things with LLMs in my free time. I
                    graduated from UT Austin with degrees in Electrical and
                    Computer Engineering and Mathematics.
                  </p>
                </div>
              </SectionContent>
            </SectionContainer>

            {/* Work */}
            <SectionContainer>
              <SectionTitle>Work</SectionTitle>
              <SectionContent>
                <div className="flex flex-col space-y-3">
                  <TableRow
                    href="https://happenstance.ai"
                    title="Happenstance"
                    subtitle="AI-powered people search"
                  />
                  <TableRow
                    href="https://www.bloomberg.com/company/"
                    title="Bloomberg"
                    subtitle="Distributed systems for earnings"
                  />
                  <TableRow
                    href="https://minion.ai"
                    title="Minion AI (acquired by Perplexity)"
                    subtitle="AI agents for web browsing"
                  />
                  <TableRow
                    href="https://unrealspeech.com/"
                    title="Unreal Speech"
                    subtitle="Text-to-speech model evaluation"
                  />
                  <TableRow
                    href="https://www.youtube.com/jobs/trust-and-safety/"
                    title="YouTube"
                    subtitle="Video classification and reliability"
                  />
                  <TableRow
                    href="https://www.capitalone.com/tech/machine-learning/"
                    title="Capital One"
                    subtitle="Fraud detection for car dealerships"
                  />
                </div>
              </SectionContent>
            </SectionContainer>

            {/* Socials */}
            <SectionContainer>
              <SectionTitle>Online</SectionTitle>
              <SectionContent>
                <div className="flex flex-col space-y-3">
                  <TableRow
                    href={"mailto:ishan0102@gmail.com"}
                    title={"Email"}
                    subtitle={"Send"}
                    date={""}
                  />
                  <TableRow
                    href={"https://github.com/ishan0102"}
                    title={"GitHub"}
                    subtitle={"Follow"}
                    date={""}
                  />
                  <TableRow
                    href={"https://twitter.com/ishan0102"}
                    title={"Twitter"}
                    subtitle={"Follow"}
                    date={""}
                  />
                </div>
              </SectionContent>
            </SectionContainer>

            {/* Spotify Widget */}
            <SectionContainer>
              <SectionTitle>Music</SectionTitle>
              <SectionContent>
                <iframe
                  className="rounded-xl"
                  src="https://open.spotify.com/embed/playlist/12DxIGMOK6o2ZQ5PdT8Hzv?utm_source=generator"
                  width="100%"
                  height="380"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
              </SectionContent>
            </SectionContainer>

            {/* :) */}
            <pre className="ml-12 hidden leading-5 md:block">
              {`
                   ,----------------,              ,---------,
              ,-----------------------,          ,"        ,"|
            ,"                      ,"|        ,"        ,"  |
           +-----------------------+  |      ,"        ,"    |
           |  .-----------------.  |  |     +---------+      |
           |  |                 |  |  |     | -==----'|      |
           |  | ishan0102:~$    |  |  |     |         |      |
           |  |                 |  |  |/----|\`---=    |      ;
           |  |                 |  |  |   ,/|==== ooo |      ;
           |  \`-----------------'  |," .;'| |((((     |  ,"
           +-----------------------+  ;;  | |         |,"
              /_)______________(_/  //'   | +---------+
         ___________________________/___  \`,
        /  oooooooooooooooo  .o.  oooo /,   \,"-----------
       / ==ooooooooooooooo==.o.  ooo= //   ,\`\--{)B     ,"
      /_==__==========__==_ooo__ooo=_/'   /___________,"
      \`-----------------------------'
              `}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
