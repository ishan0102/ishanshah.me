import { ArrowUpRight } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Detail } from "../components/detail";

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
      <strong className="flex-none font-medium text-gray-900 group-hover:text-indigo-600">
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

export default function home() {
  return (
    <>
      <Head>
        <title>Ishan Shah</title>
        <meta property="og:title" content="Ishan Shah" key="title" />
      </Head>
      <Detail.Container>
        <Detail.ContentContainer>
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
                <div className="-mb-6 leading-7 text-gray-700">
                  <p className="mb-5">
                    Hey, I'm Ishan! I'm a founding engineer at{" "}
                    <Link
                      href="https://www.ycombinator.com/companies/happenstance"
                      className="inline-flex items-center font-medium text-indigo-500"
                    >
                      Happenstance
                      <ArrowUpRight className="ml-0.5 h-4 w-4" />
                    </Link>{" "}
                    (YC W24) and like building with LLMs in my free time. I
                    graduated from UT Austin with degrees in Computer
                    Engineering and Mathematics and now I live in NYC.
                  </p>
                  <p className="mb-3">In the past, I've worked on:</p>
                  <ul className="list-inside list-disc space-y-2 pl-3">
                    <li>
                      Distributed systems for earnings reports at{" "}
                      <Link
                        href="https://www.bloomberg.com/company/"
                        className="inline-flex items-center font-medium text-indigo-500"
                      >
                        Bloomberg
                        <ArrowUpRight className="ml-0.5 h-4 w-4" />
                      </Link>
                    </li>
                    <li>
                      Interpretability research with{" "}
                      <Link
                        href="https://mahowak.github.io"
                        className="inline-flex items-center font-medium text-indigo-500"
                      >
                        Kyle Mahowald
                        <ArrowUpRight className="ml-0.5 h-4 w-4" />
                      </Link>
                    </li>
                    <li>
                      LLMs for web browsing at{" "}
                      <Link
                        href="https://minion.ai"
                        className="inline-flex items-center font-medium text-indigo-500"
                      >
                        Minion AI
                        <ArrowUpRight className="ml-0.5 h-4 w-4" />
                      </Link>
                    </li>
                    <li>
                      Text-to-speech model evaluation at{" "}
                      <Link
                        href="https://unrealspeech.com/"
                        className="inline-flex items-center font-medium text-indigo-500"
                      >
                        Unreal Speech
                        <ArrowUpRight className="ml-0.5 h-4 w-4" />
                      </Link>
                    </li>
                    <li>
                      Configurable throttling for video classifications at{" "}
                      <Link
                        href="https://www.youtube.com/jobs/trust-and-safety/"
                        className="inline-flex items-center font-medium text-indigo-500"
                      >
                        YouTube
                        <ArrowUpRight className="ml-0.5 h-4 w-4" />
                      </Link>
                    </li>
                    <li>
                      Fraud detection using customer reviews at{" "}
                      <Link
                        href="https://www.capitalone.com/tech/machine-learning/"
                        className="inline-flex items-center font-medium text-indigo-500"
                      >
                        Capital One
                        <ArrowUpRight className="ml-0.5 h-4 w-4" />
                      </Link>
                    </li>
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
              `}
            </pre>
          </div>
        </Detail.ContentContainer>
      </Detail.Container>
    </>
  );
}
