import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Large = ({ className }) => {
  return (
    <svg className={clsx(
      'max-w-[448px]',
      className
    )} width="448" height="620" viewBox="0 0 448 620" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4207_137744)">
        <g filter="url(#filter0_f_4207_137744)">
          <ellipse rx="100.002" ry="297.789" transform="matrix(-0.89123 0.453552 0.453552 0.89123 224.075 232.755)" fill="#6EBAF1" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_4207_137744" x="-277.762" y="-376.535" width="1003.67" height="1218.58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="170" result="effect1_foregroundBlur_4207_137744"/>
        </filter>
      </defs>
    </svg>

  )
}

Large.propTypes = {
  className: PropTypes.string
}

export default Large
