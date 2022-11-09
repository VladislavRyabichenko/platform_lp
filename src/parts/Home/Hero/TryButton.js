import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'components/common'
import ArrowRight from 'assets/icon/ArrowRight'

import { FadeIn } from 'animation'

const TryButton = () => {
  return (
    <Link to="/pricing">
      <Button
        custom={{ yStart: -50, duration: 0.6 }}
        variants={FadeIn}
        className={clsx(
          'bg-primary-500 m-auto left-0 right-0',
          'h-[44px] sm:h-14',
          'w-[209px] sm:w-[227px]',
          'mt-6 sm:mt-8 tablet:mt-10',
          'text-white'
        )}
      >
        Try it free for 7 Days
        <ArrowRight/>
      </Button>
    </Link>
  )
}

export default TryButton
