import { DefaultSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";
import * as React from "react";

const defaultSEO = {
  title: "Ishan Shah",
  description: "Software engineer living in NYC.",
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
    handle: "@ishan0102",
    site: "@ishan0102",
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

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={"https://www.googletagmanager.com/gtag/js?id=G-CEQVMRYG8Q"}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CEQVMRYG8Q', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
