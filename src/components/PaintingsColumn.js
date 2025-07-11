import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'

export const PaintingsColumn = (props) => {
  const { className, paintings, duration = 10 } = props
  
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {paintings.map(({ image }, i) => (
                <div className="rounded-2xl shadow-lg overflow-hidden mb-6" key={i}>
                  <Image
                    src={image}
                    alt="Painting"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-auto max-w-sm"
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '400px'
                    }}
                  />
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
} 