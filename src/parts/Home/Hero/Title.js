import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import { FadeIn } from 'animation'

const Title = () => {
  return (
    <motion.h2
      custom={{ yStart: -100, duration: 0.8 }}
      variants={FadeIn}
      className={clsx(
        'text-center m-auto left-0 right-0',
        'max-w-[710px] tablet:max-w-[900px]',
        'h3-bold sm:h2-bold tablet:h1-bold',
        'text-[#060721] dark:text-white'
      )}
    >
      The #1 Trading Journal to
      <span
        // className="text-[#8FE8FA]"
        style={{
          background: 'linear-gradient(225deg, #0C5DFF 0%, #8FE8FA 100%)',
          backgroundSize: '600px 400px',
          backgroundPosition: 'left bottom',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      > Empower</span> Your Performance
    </motion.h2>
  )
}

export default Title
