import Head from 'next/head'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import * as React from 'react'

const defaultSEO = {
  title: 'marmik',
  description:
    'a 19 yo college student doing neural nets research',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // url: 'https://marmik-xyz-marmikchaudharis-projects.vercel.app/',
    url: 'https://marmik.xyz/',
    site_name: 'Marmik',
    images: [],
  },
  twitter: {
    handle: '@marmikch',
    site: '@marmikch',
    cardType: 'summary_large_image',
  },
}

export function Providers() {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Head>
        <link rel='icon' href='/static/icon.ico' sizes='any' />
        <link
          rel='icon'
          href='/static/icon.png'
          type='image/png'
          sizes='any'
        />
        <link rel='icon' href='/static/meta/icon.png' />
        <link rel='manifest' href='/static/meta/manifest.webmanifest' />
        <meta
          name='theme-color'
          content='#fff'
          media='(prefers-color-scheme: light)'
        />
        <meta
          name='theme-color'
          content='rgb(23, 23, 23)'
          media='(prefers-color-scheme: dark)'
        />

        {/* OpenGraph */}
        <meta property='og:title' content='Marmik Chaudhari' key='title' />
        {/* <meta property='og:image' content='https://marmik-xyz-marmikchaudharis-projects.vercel.app/static/banner.jpeg' /> */}
        {/* <meta property='og:image' content='https://marmik.xyz/static/banner.jpeg' /> */}

      </Head>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script 
        strategy='afterInteractive' 
        src={'https://www.googletagmanager.com/gtag/js?id=G-CEQVMRYG8Q'}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
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

      {/* Dark Mode Toggler */}
      <Script id='darkmode-toggler'>
        {`
          if (localStorage.theme === 'light' || (!('theme' in localStorage))) {
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
          } else if (localStorage.theme === 'dark') {
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
          }
        `}
      </Script>
    </>
  )
}
