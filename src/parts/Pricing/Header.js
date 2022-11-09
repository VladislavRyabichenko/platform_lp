import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import PricingIcon from 'assets/icon/percentage-square.svg'

import { StaggerChildren, FadeIn } from 'animation'

const Header = () => {
  return (
    <motion.header
      custom={{ staggerChildren: 0.45 }}
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
        custom={{ yStart: -50, duration: 1 }}
        variants={FadeIn}
        className={clsx(
          'm-auto left-0 right-0 w-fit py-2 px-4 rounded-t-2xl rounded-r-2xl',
          'bg-[#74CEB9] lg:bg-[#3076FF]'
        )}
      >
        <img src={PricingIcon} alt=""/>
      </motion.div>

      <motion.h2
        custom={{ yStart: -40, duration: 0.9 }}
        variants={FadeIn}
        className="h3-bold md:h2-bold text-black dark:text-white tracking-[0.5px] mt-2 text-center"
      >Our Pricing Plans</motion.h2>
    </motion.header>
  )
}

export default Header
