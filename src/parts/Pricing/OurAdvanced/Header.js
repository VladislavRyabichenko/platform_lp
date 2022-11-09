import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import { StaggerChildren, FadeIn } from 'animation'

import QuestionIcon from 'assets/icon/message-question.svg'

const Header = () => {
  return (
    <motion.header
      custom={{ staggerChildren: 0.35 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      variants={StaggerChildren}
      className={clsx(
        'md:max-w-[962px]',
        'm-auto left-0 right-0'
      )}
    >
      <motion.div
        custom={{ yStart: -50, duration: 0.6 }}
        variants={FadeIn}
        className={clsx(
          'm-auto left-0 right-0 w-fit py-2 rounded-t-2xl rounded-r-2xl',
          'px-4 md:px-[10px] lg:px-4',
          'bg-[#F1B56E]'
        )}
      >
        <img src={QuestionIcon} alt=""/>
      </motion.div>

      <motion.h2
        custom={{ yStart: -35, duration: 0.7 }}
        variants={FadeIn}
        className="h4-bold md:h3-bold lg:h2-bold text-black dark:text-white tracking-[0.5px] mt-2 text-center"
      >Our Advantages</motion.h2>
      <motion.p
        custom={{ yStart: -30, duration: 0.8 }}
        variants={FadeIn}
        className="text-s-reguler md:text-m-reguler text-black/60 dark:text-white/[0.56] mt-4 text-center"
      >TRYNDx have the advantages of the services we provide</motion.p>
    </motion.header>
  )
}

export default Header
