import Head from 'next/head';
import { Blogs } from '../components/Blogs'

export default function BlogsPage() {
  return (
    <div className="font-source-serif-4">
      <Blogs />
      <Head>
        <title>blogs</title>
        <meta property='og:title' content='my blogs' key='title' />
      </Head>
    </div>
  )
}