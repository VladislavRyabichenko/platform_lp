import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import useResponsive from 'utils/useResponsive'

const GradientContact = ({ className }) => {
  const { md, lg } = useResponsive()

  return lg // large
    ? (
      <svg className={clsx(
        'w-full',
        'max-w-[1440px]',
        className
      )} width="1440" height="972" viewBox="0 0 1440 972" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3802_132841)">
          <g filter="url(#filter0_f_3802_132841)">
            <path d="M1548.3 984.983C1373.09 1098.4 1202.36 1196.88 1131.72 1178.23C1061.07 1159.57 1106.32 1039.91 1232.77 910.964C1359.23 782.017 1670.16 808.309 1740.8 826.965C1811.44 845.622 1723.51 871.565 1548.3 984.983Z" fill="#6EBAF1" fillOpacity="0.4"/>
          </g>
          <g filter="url(#filter1_f_3802_132841)">
            <path d="M430.312 648.01C322.947 757.492 141.718 821.369 25.5255 790.683C-90.6671 759.998 -213.064 571.114 -105.699 461.633C1.66565 352.151 298.136 363.53 414.328 394.215C530.521 424.901 537.677 538.529 430.312 648.01Z" fill="url(#paint0_linear_3802_132841)" fillOpacity="0.4"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_3802_132841" x="690.363" y="403.314" width="1482.89" height="1185.19" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_3802_132841"/>
          </filter>
          <filter id="filter1_f_3802_132841" x="-647.062" y="-126.854" width="1653.44" height="1425.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3802_132841"/>
          </filter>
          <linearGradient id="paint0_linear_3802_132841" x1="203.943" y1="338.655" x2="471.227" y2="631.381" gradientUnits="userSpaceOnUse">
            <stop stopColor="#829AF1"/>
            <stop offset="1" stopColor="#6066EB"/>
          </linearGradient>
        </defs>
      </svg>

    )
    : md
      ? (
        <></>
      )
      : (
        <></>
      )
}

GradientContact.propTypes = {
  className: PropTypes.string
}

export default GradientContact
