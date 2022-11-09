import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Small = ({ className }) => {
  return (
    <svg className={clsx(
      'max-w-[327px]',
      className
    )} width="327" height="246" viewBox="0 0 327 246" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3710_124048)">
        <g filter="url(#filter0_f_3710_124048)">
          <path d="M389.756 207.59C317.112 298.207 246.323 376.891 217.033 361.985C187.743 347.079 206.502 251.477 258.932 148.451C311.362 45.4254 440.28 66.4324 469.57 81.3383C498.86 96.2442 462.4 116.972 389.756 207.59Z" fill="#6EBAF1" fillOpacity="0.6"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_3710_124048" x="-67.1987" y="-201.568" width="817.312" height="835.778" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="135.201" result="effect1_foregroundBlur_3710_124048"/>
        </filter>
      </defs>
    </svg>
  )
}

Small.propTypes = {
  className: PropTypes.string
}

export default Small
