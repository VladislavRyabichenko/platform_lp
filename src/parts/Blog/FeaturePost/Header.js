import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import { Button } from 'components/common'

import { StaggerChildren, FadeIn } from 'animation'

const Header = () => {
  return (
    <motion.div
      custom={{ staggerChildren: 0.4 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      variants={StaggerChildren}
      className="flex items-center justify-between lg:border-b border-b-white/[0.10]"
    >
      <motion.h4
        custom={{ yStart: -35, duration: 0.8 }}
        variants={FadeIn}
        className="text-l-bold md:h4-bold text-black dark:text-white lg:pb-2"
      >Featured Posts</motion.h4>

      <motion.div
        custom={{ duration: 0.8 }}
        variants={FadeIn}
        className="hidden lg:flex items-center gap-x-8"
      >
        <ButtonFilter text="All"/>
        <ButtonFilter text="Beginner's Guide"/>
        <ButtonFilter text="Glossaries"/>
        <ButtonFilter text="Tips"/>
        <ButtonFilter text="Penny Stocks"/>
        <ButtonFilter text="Investing"/>
        <ButtonFilter text="Strategies"/>
      </motion.div>
    </motion.div>
  )
}

const ButtonFilter = ({ text }) => {
  return (
    <Button className={clsx(
      'rounded-none',
      'text-m-medium text-black/60 dark:text-white/[0.8] w-fit h-fit',
      'pt-[6px]',
      'pb-[14px]',
      'hover:border-b hover:border-b-[#2160DC]',
      'hover:text-m-bold',
      'hover:text-[#2160DC]',
      'transition-all duration-500'
    )}>{text}</Button>
  )
}

ButtonFilter.propTypes = {
  text: PropTypes.string
}

export default Header
