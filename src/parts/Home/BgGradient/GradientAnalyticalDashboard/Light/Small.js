import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Small = ({ className }) => {
  return (
    <svg className={clsx(
      'max-w-[375px]',
      className
    )} width="375" height="626" viewBox="0 0 375 626" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4206_137743)">
        <g filter="url(#filter0_f_4206_137743)">
          <ellipse cx="-32.4095" cy="354.135" rx="70.84" ry="210.95" transform="rotate(26.9718 -32.4095 354.135)" fill="#6E73F1" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_4206_137743" x="-487.051" y="-176.625" width="909.285" height="1061.52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="170" result="effect1_foregroundBlur_4206_137743"/>
        </filter>

      </defs>
    </svg>

  )
}

Small.propTypes = {
  className: PropTypes.string
}

export default Small
