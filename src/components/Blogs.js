import Link from 'next/link';
import { Detail } from './Detail'

export function Blogs() {
  return (
    <Detail.Container>
      <Detail.ContentContainer>
        <div className='pb-24 md:pb-4 space-y-12 md:space-y-16'>
          <div className='grid items-start grid-cols-1 md:grid-cols-12 gap-3 md:gap-6'>
            <div className='col-span-12'>
              <div className='prose prose-lg max-w-none -mb-8 font-instrument-serif'>
                {/* <h2 className='text-2xl font-instrument-serif font-bold mb-4'>my blogs</h2> */}
                <p className='text-lg font-instrument-serif'>
                  i write about stuff that i find interesting or anything about deep learning, neural nets or insights on papers.
                </p>
                <ul className='space-y-2'>
                  <li>
                    <Link
                      href='/blogs/transformers'
                      className='text-amber-800 hover:text-amber-950 dark:text-amber-600 dark:hover:text-amber-400'
                    >
                      mathematical intuition for transformers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  );
}