import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import DocumentIcon from 'assets/icon/Blog/document-text.svg'

import { StaggerChildren, FadeIn } from 'animation'

const Header = () => {
  return (
    <motion.header
      custom={{ staggerChildren: 0.35 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={StaggerChildren}
      className={clsx(
        'md:max-w-[562px]',
        'm-auto left-0 right-0',
        'mt-8 mb-10 md:mt-14 md:mb-12 lg:mt-20 lg:mb-12',
        'px-6 md:px-0'
      )}
    >
      <motion.div
        custom={{ yStart: -35, duration: 1 }}
        variants={FadeIn}
        className="m-auto left-0 right-0 w-fit bg-[#F64786] py-2 px-4 rounded-t-2xl rounded-r-2xl"
      >
        <img src={DocumentIcon} alt=""/>
      </motion.div>

      <motion.h2
        custom={{ yStart: -40, duration: 1 }}
        variants={FadeIn}
        className="h3-bold md:h2-bold text-black dark:text-white tracking-[0.5px] mt-2 text-center"
      >Insights And Resources</motion.h2>
      <motion.p
        custom={{ yStart: -50, duration: 1 }}
        variants={FadeIn}
        className={clsx(
          'text-s-reguler md:text-m-reguler text-black/60 dark:text-white/[0.56] text-center',
          'mt-3 md:mt-4'
        )}
      >Subscribe to receive valuable and unique posts by our top financial bloggers and writers.</motion.p>
    </motion.header>
  )
}

export default Header
