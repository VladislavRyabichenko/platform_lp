import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import SecurityIcon from 'assets/icon/security-safe.svg'

import { StaggerChildren, FadeIn } from 'animation'

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
        'mt-8 mb-12 md:my-14 lg:mt-20 lg:mb-14',
        'px-6 md:px-0'
      )}
    >
      <motion.div
        custom={{ yStart: -70, duration: 0.8 }}
        variants={FadeIn}
        className="m-auto left-0 right-0 w-fit bg-[#3076FF] py-2 px-4 rounded-t-2xl rounded-r-2xl"
      >
        <img src={SecurityIcon} alt=""/>
      </motion.div>

      <motion.h2
        custom={{ yStart: -60, duration: 0.9 }}
        variants={FadeIn}
        className="h3-bold md:h2-bold text-black dark:text-white tracking-[0.5px] mt-2 text-center"
      >Security</motion.h2>
      <motion.p
        custom={{ yStart: -50, duration: 1 }}
        variants={FadeIn}
        className={clsx(
          'text-s-reguler md:text-m-reguler text-black/60 dark:text-white/[0.56] text-center',
          'mt-4'
        )}
      >We use bank-level encryption for connecting to brokers, never store user credentials on our servers, and encrypt user data at rest.</motion.p>
    </motion.header>
  )
}

export default Header
