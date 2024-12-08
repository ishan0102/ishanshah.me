import { forwardRef } from 'react';

const Container = forwardRef(
  (props, ref) => {
    return (
      <div
        ref={ref}
        id='main'
        className='relative flex max-h-screen w-full flex-col overflow-y-scroll scrollbar-hide'
        {...props}
      />
    )
  }
)
Container.displayName = 'Container';

function ContentContainer(props) {
  return (
    <div
      className='mx-auto w-full max-w-3xl px-4 pb-32 md:px-8 md:pt-2'
      {...props}
    />
  )
}

export const Detail = {
    Container,
  ContentContainer,
}
