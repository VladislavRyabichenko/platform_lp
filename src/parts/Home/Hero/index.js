import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import Title from './Title'
import Description from './Description'
import TryButton from './TryButton'

import { StaggerChildren, FadeIn } from 'animation'

const Hero = () => {
  return (
    <motion.div
      custom={{ }}
      className=""
      initial="hidden"
      animate="visible"
      variants={StaggerChildren}
    >
      <div className={clsx(
        'pt-10 sm:pt-16 tablet:pt-[101px]',
        'px-6'
      )}>
        <Title/>
        <Description/>

        <TryButton/>

        <motion.p
          custom={{ yStart: -25, duration: 0.5 }}
          variants={FadeIn}
          className="text-xs-reguler text-[#060721]/60 dark:text-white/80 tracking-[0.2px] m-auto left-0 right-0 w-fit mt-3"
        >
        💳 No credit card required
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Hero
