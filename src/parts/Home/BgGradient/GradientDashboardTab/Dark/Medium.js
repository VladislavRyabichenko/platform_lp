import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Medium = ({ className }) => {
  return (
    <svg className={clsx(
      'max-w-[834px]',
      className
    )} width="834" height="486" viewBox="0 0 834 486" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3710_124047)">
        <g filter="url(#filter0_f_3710_124047)">
          <path d="M874.736 410.674C751.513 564.385 631.435 697.854 581.751 672.57C532.067 647.285 563.887 485.118 652.823 310.36C741.759 135.601 960.438 171.234 1010.12 196.518C1059.81 221.803 997.96 256.963 874.736 410.674Z" fill="#6EBAF1" fillOpacity="0.7"/>
        </g>
        <g filter="url(#filter1_f_3710_124047)">
          <path d="M129.124 390.108C48.474 490.712 -30.1172 578.068 -62.6353 561.519C-95.1534 544.97 -74.327 438.832 -16.1183 324.452C42.0904 210.072 185.216 233.394 217.734 249.943C250.252 266.491 209.774 289.504 129.124 390.108Z" fill="#6EBAF1" fillOpacity="0.7"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_3710_124047" x="150.293" y="-232.693" width="1285.03" height="1316.36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_3710_124047"/>
        </filter>
        <filter id="filter1_f_3710_124047" x="-485.988" y="-171.939" width="1122.98" height="1143.48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_3710_124047"/>
        </filter>
      </defs>
    </svg>
  )
}

Medium.propTypes = {
  className: PropTypes.string
}

export default Medium
