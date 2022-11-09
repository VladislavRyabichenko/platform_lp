import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Small = ({ className }) => {
  return (
    <svg className={clsx(
      'w-full',
      'max-w-[375px]',
      className
    )} width="375" height="735" viewBox="0 0 375 735" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3813_128881)">
        <g filter="url(#filter0_f_3813_128881)">
          <path d="M-148 607C-148 742.862 -71.448 853 22.9837 853C117.415 853 316 698.682 316 562.82C316 426.958 117.415 361 22.9837 361C-71.448 361 -148 471.138 -148 607Z" fill="url(#paint0_linear_3813_128881)" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_3813_128881" x="-648" y="-139" width="1464" height="1492" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3813_128881"/>
        </filter>
        <linearGradient id="paint0_linear_3813_128881" x1="193.967" y1="361" x2="-175.372" y2="382.487" gradientUnits="userSpaceOnUse">
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
