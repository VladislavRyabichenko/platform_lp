import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import useResponsive from 'utils/useResponsive'

const BgGradient = ({ className }) => {
  const { md, lg } = useResponsive()

  return lg // large
    ? (
      <svg className={clsx(
        'w-full',
        'max-w-[1440px]',
        className
      )} width="1440" height="1070" viewBox="0 0 1440 1070" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3806_129013)">
          <g filter="url(#filter0_f_3806_129013)">
            <path d="M1548.31 811.983C1373.11 925.4 1202.37 1023.88 1131.73 1005.23C1061.08 986.569 1106.33 866.912 1232.78 737.964C1359.24 609.017 1670.17 635.309 1740.81 653.965C1811.46 672.622 1723.52 698.565 1548.31 811.983Z" fill="#6EBAF1" fillOpacity="0.4"/>
          </g>
          <g filter="url(#filter1_f_3806_129013)">
            <path d="M430.324 475.01C322.959 584.492 141.73 648.369 25.5372 617.683C-90.6553 586.998 -213.052 398.114 -105.688 288.633C1.67736 179.151 298.147 190.53 414.34 221.215C530.532 251.901 537.689 365.529 430.324 475.01Z" fill="url(#paint0_linear_3806_129013)" fillOpacity="0.4"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_3806_129013" x="690.375" y="230.314" width="1482.89" height="1185.19" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_3806_129013"/>
          </filter>
          <filter id="filter1_f_3806_129013" x="-647.051" y="-299.854" width="1653.44" height="1425.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3806_129013"/>
          </filter>
          <linearGradient id="paint0_linear_3806_129013" x1="203.954" y1="165.655" x2="471.238" y2="458.381" gradientUnits="userSpaceOnUse">
            <stop stopColor="#829AF1"/>
            <stop offset="1" stopColor="#6066EB"/>
          </linearGradient>
        </defs>
      </svg>

    )
    : md
      ? (
        <svg className={clsx(
          'w-full',
          'max-w-[834px]',
          className
        )} width="834" height="1568" viewBox="0 0 834 1568" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_3806_129014)">
            <g filter="url(#filter0_f_3806_129014)">
              <path d="M326.328 241.545C218.963 452.517 37.7337 575.608 -78.4589 516.477C-194.651 457.346 -317.048 93.3661 -209.684 -117.606C-102.319 -328.578 194.151 -306.651 310.344 -247.519C426.536 -188.388 433.693 30.5733 326.328 241.545Z" fill="url(#paint0_linear_3806_129014)" fillOpacity="0.4"/>
            </g>
            <g filter="url(#filter1_f_3806_129014)">
              <path d="M969.5 1148.56C794.293 1367.11 623.558 1556.89 552.915 1520.94C482.271 1484.99 527.515 1254.41 653.97 1005.92C780.425 757.441 1091.36 808.107 1162 844.058C1232.64 880.009 1144.71 930.002 969.5 1148.56Z" fill="#6EBAF1" fillOpacity="0.4"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_3806_129014" x="-751.047" y="-788.119" width="1653.44" height="1819.42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3806_129014"/>
            </filter>
            <filter id="filter1_f_3806_129014" x="111.562" y="405.898" width="1482.89" height="1527.44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_3806_129014"/>
            </filter>
            <linearGradient id="paint0_linear_3806_129014" x1="99.9581" y1="-354.585" x2="544.305" y2="-102.047" gradientUnits="userSpaceOnUse">
              <stop stopColor="#829AF1"/>
              <stop offset="1" stopColor="#6066EB"/>
            </linearGradient>

          </defs>
        </svg>

      )
      : (
        <svg className={clsx(
          'w-full',
          'max-w-[375px]',
          className
        )} width="375" height="573" viewBox="0 0 375 573" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_3806_129015)">
            <g filter="url(#filter0_f_3806_129015)">
              <path d="M269.063 293.168C190.493 447.557 57.8698 537.635 -27.1598 494.363C-112.189 451.091 -201.759 184.731 -123.19 30.3416C-44.6204 -124.047 172.336 -108.001 257.366 -64.7291C342.395 -21.457 347.632 138.779 269.063 293.168Z" fill="url(#paint0_linear_3806_129015)" fillOpacity="0.4"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_3806_129015" x="-653.461" y="-594.439" width="1478.19" height="1599.65" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3806_129015"/>
            </filter>
            <linearGradient id="paint0_linear_3806_129015" x1="103.406" y1="-143.08" x2="428.579" y2="41.7277" gradientUnits="userSpaceOnUse">
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
