import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import ShareIcon from 'assets/icon/share.svg'

import { StaggerChildren, FadeIn } from 'animation'

const Header = () => {
  return (
    <motion.header
      custom={{ staggerChildren: 0.3 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={StaggerChildren}
      className={clsx(
        'md:max-w-[962px]',
        'm-auto left-0 right-0',
        'mt-8 md:mt-[52px] lg:mt-20',
        'mb-10 md:mb-10 lg:mb-12',
        'px-6 md:px-10'
      )}
    >
      <motion.div
        custom={{ yStart: -50, duration: 1 }}
        variants={FadeIn}
        className="m-auto left-0 right-0 w-fit bg-[#F1B56E] py-2 px-4 rounded-t-2xl rounded-r-2xl"
      >
        <img src={ShareIcon} alt=""/>
      </motion.div>

      <motion.h2
        custom={{ yStart: -45, duration: 1 }}
        variants={FadeIn}
        className="h3-bold md:h2-bold text-black dark:text-white tracking-[0.5px] mt-2 text-center"
      >
        Supported Brokers
      </motion.h2>
      <motion.p
        custom={{ yStart: -40, duration: 1 }}
        variants={FadeIn}
        className={clsx(
          'text-s-reguler md:text-m-reguler text-black/60 dark:text-white/[0.56] text-center',
          'mt-3 md:mt-4'
        )}
      >
        TRYNDx offers most of the well recognized Brokers to give you easy access and import your trades automatically to track them day by day
      </motion.p>
    </motion.header>
  )
}

export default Header
