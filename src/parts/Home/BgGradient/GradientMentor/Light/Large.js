import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Large = ({ className }) => {
  return (
    <svg className={clsx(
      'max-w-[1440px]',
      className
    )} width="1440" height="620" viewBox="0 0 1440 620" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4211_137745)">
        <g filter="url(#filter0_f_4211_137745)">
          <path d="M309 526.5C309 689.148 490.646 821 714.718 821C938.79 821 1410 636.258 1410 473.61C1410 310.962 938.79 232 714.718 232C490.646 232 309 363.852 309 526.5Z" fill="url(#paint0_linear_4211_137745)" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_4211_137745" x="-191" y="-268" width="2101" height="1589" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_4211_137745"/>
        </filter>
        <linearGradient id="paint0_linear_4211_137745" x1="1120.44" y1="232" x2="252.622" y2="332.066" gradientUnits="userSpaceOnUse">
          <stop stopColor="#829AF1"/>
          <stop offset="1" stopColor="#6066EB"/>
        </linearGradient>

      </defs>
    </svg>

  )
}

Large.propTypes = {
  className: PropTypes.string
}

export default Large
