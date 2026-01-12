import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

export function Providers() {
  return (
    <>
      <Head>
        <title>Ishan Shah</title>
        <meta name="description" content="Software engineer in SF." />
        
        {/* Favicons */}
        <link rel="icon" href="/static/favicon.ico" sizes="any" />
        <link rel="icon" href="/static/favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/static/meta/apple-touch-icon.png" />
        <link rel="manifest" href="/static/meta/manifest.webmanifest" />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://www.ishanshah.me" />
        <meta property="og:site_name" content="Ishan Shah" />
        <meta property="og:title" content="Ishan Shah" key="title" />
        <meta property="og:description" content="Software engineer in SF." />
        <meta property="og:image" content="https://www.ishanshah.me/static/og/default.png" />
        <meta property="og:image:alt" content="Ishan Shah" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@var_epsilon" />
        <meta name="twitter:creator" content="@var_epsilon" />
      </Head>
      <Analytics />
    </>
  );
}
