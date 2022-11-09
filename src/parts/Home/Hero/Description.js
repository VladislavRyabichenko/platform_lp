import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import { FadeIn } from 'animation'

const Description = () => {
  return (
    <motion.p
      custom={{ yStart: -75, duration: 0.7 }}
      variants={FadeIn}
      className={clsx(
        'text-[#060721]/60 dark:text-white/[0.56] dark:sm:text-white',
        'text-center m-auto left-0 right-0',
        'text-s-reguler sm:text-m-reguler tablet:text-l-reguler',
        'mt-4 tablet:mt-6',
        'max-w-[694px] tablet:max-w-[835px]'
      )}
    >
      TRYNDx is a high-powered trading journal that’s made to analyze your performance and crunch the numbers. Get real-time, actionable trading insights right at your fingertips
    </motion.p>
  )
}

export default Description
