import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import MenuBoardIcon from 'assets/icon/menu-board.svg'

import { StaggerChildren, FadeIn } from 'animation'

const Header = () => {
  return (
    <motion.header
      custom={{ staggerChildren: 0.5 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={StaggerChildren}
      className={clsx(
        'md:max-w-[762px]',
        'm-auto left-0 right-0',
        'my-10 md:my-14 lg:my-20',
        'px-6 md:px-0'
      )}
    >
      <motion.div
        custom={{ yStart: -70, duration: 1 }}
        variants={FadeIn}
        className="m-auto left-0 right-0 w-fit bg-[#3076FF] py-2 px-4 rounded-t-2xl rounded-r-2xl"
      >
        <img src={MenuBoardIcon} alt=""/>
      </motion.div>

      <motion.h2
        custom={{ yStart: -50, duration: 0.9 }}
        variants={FadeIn}
        className="h3-bold md:h2-bold text-black dark:text-white tracking-[0.5px] mt-2 text-center"
      >Features</motion.h2>
      <motion.p
        custom={{ yStart: -40, duration: 0.8 }}
        variants={FadeIn}
        className={clsx(
          'text-m-reguler text-black/60 dark:text-white/[0.56] text-center',
          'mt-3 md:mt-4'
        )}
      >TRYNDx provides all-in-one best features to serve all type of Traders</motion.p>
    </motion.header>
  )
}

export default Header
