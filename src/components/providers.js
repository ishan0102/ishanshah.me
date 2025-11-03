import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import * as React from "react";

const defaultSEO = {
  title: "Ishan Shah",
  description: "Software engineer in SF.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ishanshah.me",
    site_name: "Ishan Shah",
    images: [
      {
        url: "https://www.ishanshah.me/static/og/default.png",
        alt: "Ishan Shah",
      },
    ],
  },
  twitter: {
    handle: "@var_epsilon",
    site: "@var_epsilon",
    cardType: "summary_large_image",
  },
};

export function Providers() {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Head>
        <link rel="icon" href="/static/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/static/favicon.png"
          type="image/png"
          sizes="any"
        />
        <link rel="apple-touch-icon" href="/static/meta/apple-touch-icon.png" />
        <link rel="manifest" href="/static/meta/manifest.webmanifest" />

        {/* OpenGraph */}
        <meta property="og:title" content="Ishan Shah" key="title" />
        <meta
          property="og:image"
          content="https://www.ishanshah.me/static/og/default.png"
        />
      </Head>
      <Analytics />
    </>
  );
}
