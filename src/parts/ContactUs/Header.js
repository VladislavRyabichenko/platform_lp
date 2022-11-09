import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import CallIcon from 'assets/icon/call-filled.svg'

import { FadeIn, StaggerChildren } from 'animation'

const Header = () => {
  return (
    <motion.header
      custom={{ staggerChildren: 0.25 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={StaggerChildren}
      className={clsx(
        'md:max-w-[762px]',
        'm-auto left-0 right-0',
        'mt-8 md:mt-14 lg:mt-20',
        'px-6 md:px-0'
      )}
    >
      <motion.div
        custom={{ yStart: -45, duration: 0.8 }}
        variants={FadeIn}
        className="m-auto left-0 right-0 w-fit bg-[#F1B56E] py-2 px-4 rounded-t-2xl rounded-r-2xl"
      >
        <img src={CallIcon} alt=""/>
      </motion.div>

      <motion.h2
        custom={{ yStart: -40, duration: 0.9 }}
        variants={FadeIn}
        className="h3-bold md:h2-bold text-black dark:text-white tracking-[0.5px] mt-2 text-center"
      >Get in touch with us</motion.h2>
    </motion.header>
  )
}

export default Header
