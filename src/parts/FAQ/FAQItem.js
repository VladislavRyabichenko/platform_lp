import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components/common'
import clsx from 'clsx'

const FAQItem = ({ isActive, title, description, onClick }) => {
  return (
    <div className="w-full py-6 xl:py-8 border-t border-t-black/[0.08] dark:border-t-white/[0.2] first:border-none first:pt-0 last:pb-0">
      <div className="w-full">

        <Button
          className="flex h-fit justify-between items-center w-full"
          onClick={onClick}
        >
          <h4 className="text-l-bold xl:h4-bold text-black dark:text-white text-left">{title}</h4>
          <div className="h-5 w-5 md:h-6 md:w-6">
            <ArrowIcon isActive={isActive}/>
          </div>
        </Button>

        {isActive && (
          <p className="mt-4 xl:mt-6 text-s-reguler xl:text-m-reguler text-black dark:text-white whitespace-pre-line">{description}</p>
        )}
      </div>
    </div>
  )
}

const ArrowIcon = ({ isActive }) => {
  return (
    <svg className={clsx(
      'transform',
      'stroke-black dark:stroke-white',
      isActive ? 'rotate-0' : 'rotate-180'
    )} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.46875 13.2602L11.9987 9.74023L15.5287 13.2602" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

FAQItem.propTypes = {
  isActive: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func,
  description: PropTypes.string
}

ArrowIcon.propTypes = {
  isActive: PropTypes.bool
}

export default FAQItem
