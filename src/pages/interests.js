import Head from 'next/head';
import { Interests } from '../components/Interests'

export default function interests() {
  return (
    <>
      <Interests/>
      <Head>
        <title>things to explore </title>
        <meta property="og:title" content="things to explore" key="title" />
      </Head>
    </>
  )
}
