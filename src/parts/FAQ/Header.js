import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import QuestionIcon from 'assets/icon/message-question.svg'

import { StaggerChildren, FadeIn } from 'animation'

const Header = () => {
  return (
    <motion.header
      custom={{ staggerChildren: 0.4 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={StaggerChildren}
      className={clsx(
        'md:max-w-[962px]',
        'm-auto left-0 right-0',
        'pt-8 pb-10 md:pt-[52px] md:pb-[44px] lg:py-20',
        'px-6'
      )}
    >
      <motion.div
        custom={{ yStart: -50, duration: 0.8 }}
        variants={FadeIn}
        className={clsx(
          'm-auto left-0 right-0 w-fit py-2 px-4 rounded-t-2xl rounded-r-2xl',
          'bg-[#3076FF]'
        )}
      >
        <img src={QuestionIcon} alt=""/>
      </motion.div>

      <motion.h2
        custom={{ yStart: -40, duration: 0.9 }}
        variants={FadeIn}
        className="h3-bold lg:h2-bold text-black dark:text-white tracking-[0.5px] mt-2 text-center"
      >Frequently Asked Questions</motion.h2>
      <motion.p
        custom={{ yStart: -30, duration: 1 }}
        variants={FadeIn}
        className="text-s-reguler md:text-m-reguler text-black/60 dark:text-white/[0.56] mt-4 text-center"
      >Take a step toward trading success by browsing TRYNDx’s frequently asked questions</motion.p>
    </motion.header>
  )
}

export default Header
