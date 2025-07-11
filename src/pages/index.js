import Head from 'next/head';
import { Home } from '../components/Home'

export default function home() {
  return (
    <>
      <Home/>
      <Head>
        <title>marmik&apos;s web eden</title>
        <meta property='og:title' content='marmik chaudhari' key='title' />
      </Head>
    </>
  )
}
