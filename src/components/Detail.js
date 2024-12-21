import { forwardRef } from 'react';

export function Container({ children }) {
  return (
    <div className='relative flex max-h-screen w-full flex-col overflow-y-scroll scrollbar-hide scroll-smooth'>
      {children}
    </div>
  )
}

export function ContentContainer({ children }) {
  return (
    <div className='mx-auto w-full max-w-2xl mt-4 sm:mt-8 mb-52 md:mb-32 px-8'>
      {children}
    </div>
  )
}

export const Detail = {
  Container,
  ContentContainer,
}

