import React from 'react'
import { motion } from 'motion/react'
import { PaintingsColumn } from './PaintingsColumn'

// Actual paintings from static/paintings folder
const paintings = [
  { image: "/static/paintings/van-gogh.JPG" },
  { image: "/static/paintings/spiders.JPG" },
  { image: "/static/paintings/sparrow.JPG" },
  { image: "/static/paintings/shiv.JPG" },
  { image: "/static/paintings/shawn-2.JPG" },
  { image: "/static/paintings/shawn-1.JPG" },
  { image: "/static/paintings/horse.JPG" },
  { image: "/static/paintings/eiffel.JPG" },
  { image: "/static/paintings/cold-paint.JPG" },
  { image: "/static/paintings/batman.JPG" },
  { image: "/static/paintings/abstract-eye.JPG" }
]

export const Paintings = () => {
  return (
    <section id="paintings-section" className="my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 font-instrument-serif mb-2">
            paintings
          </h2>
        </motion.div>

        <div className="flex justify-center mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[400px] overflow-hidden">
          <PaintingsColumn paintings={paintings} duration={50} />
        </div>
      </div>
    </section>
  )
} 