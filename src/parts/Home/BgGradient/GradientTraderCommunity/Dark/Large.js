import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Large = ({ className }) => {
  return (
    <svg className={clsx(
      'w-full',
      'max-w-[564px]',
      className
    )} width="564" height="620" viewBox="0 0 564 620" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3813_128870)">
        <g filter="url(#filter0_f_3813_128870)">
          <ellipse rx="125.824" ry="374.684" transform="matrix(-0.89123 0.453552 0.453552 0.89123 282.078 309.997)" fill="#6EBAF1" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_3813_128870" x="-349.341" y="-456.622" width="1262.84" height="1533.24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="213.897" result="effect1_foregroundBlur_3813_128870"/>
        </filter>
      </defs>
    </svg>
  )
}

Large.propTypes = {
  className: PropTypes.string
}

export default Large
