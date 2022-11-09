import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Small = ({ className }) => {
  return (
    <svg className={clsx(
      'w-full',
      'max-w-[375px]',
      className
    )} width="375" height="482" viewBox="0 0 375 482" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3813_128880)">
        <g filter="url(#filter0_f_3813_128880)">
          <ellipse rx="80.2429" ry="276.928" transform="matrix(-0.89123 0.453552 0.453552 0.89123 307.798 556.842)" fill="#6EBAF1" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_3813_128880" x="-176.762" y="-32.668" width="969.117" height="1179.02" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="170" result="effect1_foregroundBlur_3813_128880"/>
        </filter>
      </defs>
    </svg>
  )
}

Small.propTypes = {
  className: PropTypes.string
}

export default Small
