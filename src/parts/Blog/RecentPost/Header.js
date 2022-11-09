import clsx from 'clsx'
import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import { Button, Input } from 'components/common'

import FilterIcon from 'assets/icon/Blog/Filter'
import SearchIcon from 'assets/icon/Blog/Search'
import useCloseClickOutside from 'utils/useCloseClickOutside'

import { StaggerChildren, FadeIn } from 'animation'

const Header = () => {
  const wrapperRef = useRef(null)
  const [isOpenFilter, setIsOpenFilter] = useState(false)

  const handleToogleOpenFilter = () => {
    return setIsOpenFilter(!isOpenFilter)
  }

  useCloseClickOutside(wrapperRef, setIsOpenFilter)

  return (
    <motion.header
      custom={{ staggerChildren: 0.4, delayChildren: 2.5 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={StaggerChildren}
      className="flex flex-wrap items-center justify-between gap-y-4"
    >
      <motion.h4
        custom={{ yStart: -35, duration: 0.8 }}
        variants={FadeIn}
        className="text-l-bold md:h4-bold text-black dark:text-white"
      >Recent Posts</motion.h4>

      <div className="relative flex items-center gap-x-4">

        <motion.div
          custom={{ yStart: -30, duration: 0.9 }}
          variants={FadeIn}
          className="flex items-center gap-x-2 bg-black/[0.04] dark:bg-white/[0.06] rounded-md px-3 py-2.5 w-[260px]"
        >
          <SearchIcon className="stroke-black/60 dark:stroke-white/[0.32]" />
          <Input type="text" className="text-s-medium text-black placeholder:text-black/60 dark:text-white dark:placeholder:text-white/[0.32]" placeholder="Search trades..."/>
        </motion.div>

        <motion.div
          ref={wrapperRef}
          custom={{ yStart: -20, duration: 1 }}
          variants={FadeIn}
        >
          <Button
            className="flex items-center gap-x-2 bg-black/[0.04] dark:bg-white/[0.06] rounded-md w-full max-w-[82px] h-fit px-3 py-2.5"
            onClick={handleToogleOpenFilter}
          >
            <p className="text-black dark:text-white text-s-medium">Filter</p>
            <FilterIcon className="stroke-black dark:stroke-white/80"/>
          </Button>

          <div
            className={clsx(
              'absolute right-0 p-5  bg-white dark:bg-[#15162E] border dark:border-[#2C2D43] rounded-[10px] w-[306px]',
              'transition-all duration-[400] ease-linear',
              isOpenFilter ? 'top-[54px] opacity-100 z-0' : 'top-[45px] opacity-0 z-[-1]'
            )}
          >
            <div className="">
              <CheckboxItem id="all" label="All" />
              <CheckboxItem id="today" label="Today" />
              <CheckboxItem id="this-week" label="This Week" />
              <CheckboxItem id="this-month" label="This Month" />
              <CheckboxItem id="this-year" label="This Year" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

const CheckboxItem = ({ id, label }) => {
  return (
    <div className={clsx(
      'flex items-center justify-between',
      'border-b border-b-black/[0.08] dark:border-b-[#1F213D]',
      'py-2',
      'first:pt-0 last:pb-0',
      'last:border-b-0'
    )}>
      <label htmlFor={id} className="text-s-medium text-text-500 dark:text-[#DADADE] cursor-pointer">{label}</label>
      <input className="cursor-pointer" id={id} type="checkbox"/>
    </div>
  )
}

CheckboxItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string
}

export default Header
