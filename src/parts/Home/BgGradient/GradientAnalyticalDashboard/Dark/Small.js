import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Small = ({ className }) => {
  return (
    <svg className={clsx(
      'w-full',
      'max-w-[375px]',
      className
    )} width="375" height="548" viewBox="0 0 375 548" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3813_128879)">
        <g filter="url(#filter0_f_3813_128879)">
          <ellipse cx="-32.4134" cy="328.135" rx="70.84" ry="210.95" transform="rotate(26.9718 -32.4134 328.135)" fill="#6E73F1" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_3813_128879" x="-487.055" y="-202.627" width="909.285" height="1061.52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="170" result="effect1_foregroundBlur_3813_128879"/>
        </filter>
      </defs>
    </svg>
  )
}

Small.propTypes = {
  className: PropTypes.string
}

export default Small
