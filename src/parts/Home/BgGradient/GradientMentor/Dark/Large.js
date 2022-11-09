import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Large = ({ className }) => {
  return (
    <svg className={clsx(
      'w-full',
      'max-w-[1439px]',
      className
    )} width="1439" height="620" viewBox="0 0 1439 620" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3813_128873)">
        <g filter="url(#filter0_f_3813_128873)">
          <path d="M459.008 575.5C459.008 767.971 544.964 924 650.996 924C757.028 924 980.008 705.383 980.008 512.912C980.008 320.441 757.028 227 650.996 227C544.964 227 459.008 383.029 459.008 575.5Z" fill="url(#paint0_linear_3813_128873)" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_3813_128873" x="-40.9922" y="-273" width="1521" height="1697" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3813_128873"/>
        </filter>
        <linearGradient id="paint0_linear_3813_128873" x1="842.984" y1="227" x2="427.752" y2="246.147" gradientUnits="userSpaceOnUse">
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
