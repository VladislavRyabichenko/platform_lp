import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Small = ({ className }) => {
  return (
    <svg className={clsx(
      'w-full',
      'max-w-[375px]',
      className
    )} width="375" height="734" viewBox="0 0 375 734" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4212_137746)">
        <g filter="url(#filter0_f_4212_137746)">
          <path d="M-147.996 633C-147.996 768.862 -71.4441 879 22.9876 879C117.419 879 316.004 724.682 316.004 588.82C316.004 452.958 117.419 387 22.9876 387C-71.4441 387 -147.996 497.138 -147.996 633Z" fill="url(#paint0_linear_4212_137746)" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_4212_137746" x="-647.996" y="-113" width="1464" height="1492" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_4212_137746"/>
        </filter>
        <linearGradient id="paint0_linear_4212_137746" x1="193.971" y1="387" x2="-175.368" y2="408.487" gradientUnits="userSpaceOnUse">
          <stop stopColor="#829AF1"/>
          <stop offset="1" stopColor="#6066EB"/>
        </linearGradient>

      </defs>
    </svg>

  )
}

Small.propTypes = {
  className: PropTypes.string
}

export default Small
