import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Large = ({ className }) => {
  return (
    <svg className={clsx(
      'w-full',
      'max-w-[498px]',
      className
    )} width="498" height="620" viewBox="0 0 498 620" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3813_128872)">
        <g filter="url(#filter0_f_3813_128872)">
          <ellipse rx="113.818" ry="338.931" transform="matrix(-0.89123 0.453552 0.453552 0.89123 242.598 304.421)" fill="#6EBAF1" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_3813_128872" x="-328.571" y="-389.046" width="1142.34" height="1386.93" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="193.487" result="effect1_foregroundBlur_3813_128872"/>
        </filter>
      </defs>
    </svg>
  )
}

Large.propTypes = {
  className: PropTypes.string
}

export default Large
