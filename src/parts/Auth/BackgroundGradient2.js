import React from 'react'
import PropTypes from 'prop-types'

const BackgroundGradient = ({ className }) => {
  return (
    <svg className={className} width="1440" height="1024" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_1221_6568)">
        <path d="M1548.31 923.894C1373.11 1142.45 1202.37 1332.23 1131.73 1296.27C1061.08 1260.32 1106.33 1029.74 1232.78 781.261C1359.24 532.777 1670.17 583.443 1740.81 619.394C1811.46 655.345 1723.52 705.338 1548.31 923.894Z" fill="#6EBAF1" fillOpacity="0.4"/>
      </g>
      <g filter="url(#filter1_f_1221_6568)">
        <path d="M430.324 274.545C322.959 485.517 141.73 608.608 25.5372 549.477C-90.6553 490.346 -213.052 126.366 -105.687 -84.6057C1.67737 -295.578 298.147 -273.651 414.34 -214.519C530.532 -155.388 537.689 63.5733 430.324 274.545Z" fill="url(#paint0_linear_1221_6568)" fillOpacity="0.4"/>
      </g>
      <defs>
        <filter id="filter0_f_1221_6568" x="690.375" y="181.234" width="1482.89" height="1527.44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_1221_6568"/>
        </filter>
        <filter id="filter1_f_1221_6568" x="-647.051" y="-755.119" width="1653.44" height="1819.42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_1221_6568"/>
        </filter>
        <linearGradient id="paint0_linear_1221_6568" x1="203.954" y1="-321.585" x2="648.302" y2="-69.0467" gradientUnits="userSpaceOnUse">
          <stop stopColor="#829AF1"/>
          <stop offset="1" stopColor="#6066EB"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

BackgroundGradient.propTypes = {
  className: PropTypes.string
}

export default BackgroundGradient
