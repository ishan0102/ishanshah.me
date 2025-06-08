import Head from 'next/head';
import { Blogs } from '../components/Blogs'

export default function BlogsPage() {
  return (
    <div className="font-instrument-serif">
      <Blogs />
      <Head>
        <title>my blogs</title>
        <meta property='og:title' content='my blogs' key='title' />
      </Head>
    </div>
  )
}