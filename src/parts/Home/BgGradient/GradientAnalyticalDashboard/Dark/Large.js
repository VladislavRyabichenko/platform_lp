import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Large = ({ className }) => {
  return (
    <svg className={clsx(
      'w-full',
      'max-w-[538px]',
      className
    )} width="538" height="619" viewBox="0 0 538 619" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3813_128869)">
        <g filter="url(#filter0_f_3813_128869)">
          <ellipse cx="298.747" cy="268.325" rx="133.331" ry="397.038" transform="rotate(26.9718 298.747 268.325)" fill="#6E73F1" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_3813_128869" x="-370.344" y="-544.033" width="1338.18" height="1624.72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="226.658" result="effect1_foregroundBlur_3813_128869"/>
        </filter>
      </defs>
    </svg>
  )
}

Large.propTypes = {
  className: PropTypes.string
}

export default Large
