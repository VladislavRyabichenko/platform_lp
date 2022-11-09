import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Large = ({ className }) => {
  return (
    <svg className={clsx(
      'w-full',
      'max-w-[521px]',
      className
    )} width="521" height="620" viewBox="0 0 521 620" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3813_128871)">
        <g filter="url(#filter0_f_3813_128871)">
          <ellipse cx="260.523" cy="309.749" rx="116.412" ry="346.656" transform="rotate(26.9718 260.523 309.749)" fill="#6E73F1" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_3813_128871" x="-323.664" y="-399.523" width="1168.37" height="1418.54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="197.896" result="effect1_foregroundBlur_3813_128871"/>
        </filter>
      </defs>
    </svg>
  )
}

Large.propTypes = {
  className: PropTypes.string
}

export default Large
