import Head from 'next/head';
import { Books } from '../components/Books'

export default function books() {
  return (
    <>
      <Books/>
      <Head>
        <title>books • marmik</title>
        <meta property='og:title' content='books • marmik' key='title' />
      </Head>
    </>
  )
}
