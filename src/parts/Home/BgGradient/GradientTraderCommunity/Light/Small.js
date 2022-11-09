import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Small = ({ className }) => {
  return (
    <svg className={clsx(
      'max-w-[375px]',
      className
    )} width="375" height="718" viewBox="0 0 375 718" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4209_137742)">
        <g filter="url(#filter0_f_4209_137742)">
          <ellipse rx="80.2429" ry="276.928" transform="matrix(-0.89123 0.453552 0.453552 0.89123 307.802 582.842)" fill="#6EBAF1" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_4209_137742" x="-176.758" y="-6.66797" width="969.117" height="1179.02" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="170" result="effect1_foregroundBlur_4209_137742"/>
        </filter>
      </defs>
    </svg>

  )
}

Small.propTypes = {
  className: PropTypes.string
}

export default Small
