import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Medium = ({ className }) => {
  return (
    <svg className={clsx(
      'w-full',
      'max-w-[834px]',
      className
    )} width="834" height="756" viewBox="0 0 834 756" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3813_128878)">
        <g filter="url(#filter0_f_3813_128878)">
          <ellipse cx="580.035" cy="394.165" rx="116.412" ry="346.656" transform="rotate(26.9718 580.035 394.165)" fill="#6E73F1" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_3813_128878" x="-4.15219" y="-315.107" width="1168.37" height="1418.54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="197.896" result="effect1_foregroundBlur_3813_128878"/>
        </filter>
      </defs>
    </svg>
  )
}

Medium.propTypes = {
  className: PropTypes.string
}

export default Medium
