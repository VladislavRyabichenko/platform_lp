import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components/common'
import clsx from 'clsx'

const FAQButton = ({ text, count, isActive, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={clsx(
        'w-full h-fit flex justify-between gap-x-3 p-2.5',
        isActive && 'bg-black/[0.04] dark:bg-white/[0.06] border-b-2 border-b-[#2160DC]'
      )}
    >
      <h2 className="text-l-bold xl:h4-bold text-black dark:text-white text-left">
        {text} <span className="text-black/60 dark:text-white/[0.56]">({count})</span>
      </h2>
      <ArrowRight/>
    </Button>
  )
}

const ArrowRight = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="stroke-black dark:stroke-white" d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

FAQButton.propTypes = {
  count: PropTypes.number,
  text: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
}

export default FAQButton
