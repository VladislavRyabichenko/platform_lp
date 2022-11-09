import React from 'react'
import PropTypes from 'prop-types'

const BgGradient = ({ className }) => {
  return (
    <svg className={className} width="521" height="682" viewBox="0 0 521 682" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3603_103486)">
        <g filter="url(#filter0_f_3603_103486)">
          <path d="M0 348.5C0 540.971 85.956 697 191.988 697C298.02 697 521 478.383 521 285.912C521 93.4408 298.02 0 191.988 0C85.956 0 0 156.029 0 348.5Z" fill="url(#paint0_linear_3603_103486)" fillOpacity="0.16"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_3603_103486" x="-500" y="-500" width="1521" height="1697" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3603_103486"/>
        </filter>
        <linearGradient id="paint0_linear_3603_103486" x1="383.976" y1="0.000468807" x2="-31.2557" y2="19.1467" gradientUnits="userSpaceOnUse">
          <stop stopColor="#829AF1"/>
          <stop offset="1" stopColor="#6066EB"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

BgGradient.propTypes = {
  className: PropTypes.string
}

export default BgGradient
