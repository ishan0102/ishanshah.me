import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ishan Shah",
  openGraph: {
    title: "Ishan Shah",
  },
};

function SectionTitle(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className="text-primary col-span-2 text-lg font-semibold md:text-right md:text-base md:font-normal md:text-opacity-40"
      {...props}
    />
  );
}

function SectionContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="col-span-10" {...props} />;
}

interface TableRowProps {
  href: string;
  title: ReactNode;
  subtitle?: string;
  date?: string;
}

function TableRow({ href, title, subtitle, date }: TableRowProps) {
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

function SectionContainer(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="grid grid-cols-1 items-start gap-3 md:grid-cols-12 md:gap-6"
      {...props}
    />
  );
}

export default function Home() {
  return (
    <div className="scrollbar-hide relative flex max-h-screen w-full flex-col overflow-y-scroll">
      <div className="mx-auto w-full max-w-3xl px-4 pb-32 md:px-8 md:pt-2">
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
          <SectionContainer>
            <SectionTitle />
            <SectionContent>
              <div className="text-secondary -mb-6 leading-relaxed">
                <p className="mb-3">
                  Hey, I'm Ishan! I'm a founding engineer at{" "}
                  <Link
                    href="https://happenstance.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center font-medium text-indigo-500 hover:text-indigo-700"
                  >
                    Happenstance
                  </Link>{" "}
                  and enjoy building things with LLMs in my free time. I
                  graduated from UT Austin with degrees in Electrical and
                  Computer Engineering and Mathematics.
                </p>
                <p className="mb-5">
                  I'm based in San Francisco and love meeting people from the
                  Internet. You should absolutely{" "}
                  <Link
                    href="mailto:ishan0102@gmail.com"
                    className="group inline-flex items-center font-medium text-indigo-500 hover:text-indigo-700"
                  >
                    reach out
                  </Link>{" "}
                  if you want to chat!
                </p>
              </div>
            </SectionContent>
          </SectionContainer>

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
                  title={
                    <>
                      Minion AI
                      <sup className="ml-1 text-xs text-gray-500">1</sup>
                    </>
                  }
                  subtitle="AI agents for web browsing"
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

          <SectionContainer>
            <SectionTitle />
            <SectionContent>
              <div className="text-secondary -mt-10 text-sm italic">
                <p>
                  <sup className="text-xs not-italic">1</sup> Minion AI was
                  acquired by Perplexity in 2025.
                </p>
              </div>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Online</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                <TableRow
                  href={"https://happenstance.ai/u/ishan"}
                  title={"Happenstance"}
                  subtitle={"View"}
                  date={""}
                />
                <TableRow
                  href={"mailto:ishan0102@gmail.com"}
                  title={"Email"}
                  subtitle={"Send"}
                  date={""}
                />
                <TableRow
                  href={"https://github.com/ishan0102"}
                  title={"Github"}
                  subtitle={"Follow"}
                  date={""}
                />
                <TableRow
                  href={"https://twitter.com/var_epsilon"}
                  title={"Twitter"}
                  subtitle={"Follow"}
                  date={""}
                />
              </div>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Music</SectionTitle>
            <SectionContent>
              <iframe
                className="rounded-xl"
                src="https://open.spotify.com/embed/playlist/3tXb1EbBHALZtCsqVBKCdo?utm_source=generator"
                width="100%"
                height="380"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </SectionContent>
          </SectionContainer>

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
  );
}
