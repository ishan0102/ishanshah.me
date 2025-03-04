import Link from 'next/link';

export function Blogs() {
  return (
    <div className='relative flex max-h-screen w-full flex-col overflow-y-scroll scrollbar-hide scroll-smooth px-8'>
      <div className='mx-auto w-full max-w-2xl mt-4 sm:mt-8 mb-52 md:mb-32'>
        <div className='prose mb-2 sm:mb-6'>
          <h2 className='text-2xl font-bold mb-4 font-palatino'>my blogs</h2>
          <p>
            i write about stuff that i find interesting or anything about deep learning, neural nets or insights on papers.
          </p>
          <ul className='space-y-2'>
            <li>
              <Link
                href='/blogs/transformers'
                className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200'
              >
                mathematical intuition for transformers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}