import clsx from 'clsx'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { Button } from 'components/common'
import { FadeIn } from 'animation'

const TabPrivacy = ({ tabActive, handleSetIsActive }) => {
  return (
    <motion.section
      custom={{ duration: 1 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={FadeIn}
      className={clsx(
        'py-12 md:py-14',
        'px-6 md:px-10 lg:px-0',
        'max-w-[962px]',
        'm-auto left-0 right-0'
      )}
    >
      <div className={clsx(
        'flex justify-between',
        'border-b border-b-black/[0.08] dark:border-b-white/[0.2]'
      )}>
        <TabButton
          isActive={tabActive === 'privacy'}
          onClick={() => handleSetIsActive('privacy')}
          text="Privacy policy"
        />
        <TabButton
          isActive={tabActive === 'term-of-use'}
          onClick={() => handleSetIsActive('term-of-use')}
          text="Terms of Use"
        />
        <TabButton
          isActive={tabActive === 'refund'}
          onClick={() => handleSetIsActive('refund')}
          text="Refund Policy"
        />
      </div>
    </motion.section>
  )
}

const TabButton = ({ isActive, onClick, text }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className={clsx(
      'w-full',
      'pb-4 md:pb-6',
      'border-b',
      isActive ? 'border-b-black dark:border-b-white' : 'border-b-transparent',
      isHover && 'border-b border-b-white'
    )}>
      <Button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}
        className={clsx(
          'w-fit h-fit',
          'text-s-bold md:text-l-bold',
          'm-auto left-0 right-0',
          isActive ? 'text-black dark:text-white' : 'text-black/60 dark:text-white/[0.8]'
        )}
      >
        {text}
      </Button>
    </div>
  )
}

TabPrivacy.propTypes = {
  tabActive: PropTypes.string,
  handleSetIsActive: PropTypes.func
}

TabButton.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
}

export default TabPrivacy
