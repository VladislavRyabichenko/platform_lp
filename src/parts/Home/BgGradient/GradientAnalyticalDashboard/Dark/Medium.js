import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Medium = ({ className }) => {
  return (
    <svg className={clsx(
      'w-full',
      'max-w-[834px]',
      className
    )} width="834" height="787" viewBox="0 0 834 787" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3813_128876)">
        <g filter="url(#filter0_f_3813_128876)">
          <ellipse cx="660.173" cy="372.903" rx="133.331" ry="397.038" transform="rotate(26.9718 660.173 372.903)" fill="#6E73F1" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_3813_128876" x="-8.91855" y="-439.454" width="1338.18" height="1624.71" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="226.658" result="effect1_foregroundBlur_3813_128876"/>
        </filter>
      </defs>
    </svg>
  )
}

Medium.propTypes = {
  className: PropTypes.string
}

export default Medium
