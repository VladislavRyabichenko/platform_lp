import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import useResponsive from 'utils/useResponsive'

const BgGradient = ({ className }) => {
  const { md, lg } = useResponsive()

  return lg // large
    ? (
      <svg
        className={clsx(
          'w-full',
          'max-w-[1440px]',
          className
        )} width="1440" height="1024" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    : md
      ? (
        <svg className={clsx(
          'w-full',
          'max-w-[834px]',
          className
        )} width="834" height="1194" viewBox="0 0 834 1194" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_3905_134530)">
            <path d="M326.324 241.545C218.959 452.517 37.7298 575.608 -78.4628 516.477C-194.655 457.346 -317.052 93.3661 -209.687 -117.606C-102.323 -328.578 194.147 -306.651 310.34 -247.519C426.532 -188.388 433.689 30.5733 326.324 241.545Z" fill="url(#paint0_linear_3905_134530)" fillOpacity="0.4"/>
          </g>
          <g filter="url(#filter1_f_3905_134530)">
            <path d="M969.496 1148.56C794.289 1367.11 623.554 1556.89 552.911 1520.94C482.267 1484.99 527.511 1254.41 653.966 1005.92C780.421 757.441 1091.35 808.107 1162 844.058C1232.64 880.009 1144.7 930.002 969.496 1148.56Z" fill="#6EBAF1" fillOpacity="0.4"/>
          </g>
          <defs>
            <filter id="filter0_f_3905_134530" x="-751.051" y="-788.119" width="1653.44" height="1819.42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3905_134530"/>
            </filter>
            <filter id="filter1_f_3905_134530" x="111.559" y="405.898" width="1482.89" height="1527.44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_3905_134530"/>
            </filter>
            <linearGradient id="paint0_linear_3905_134530" x1="99.9542" y1="-354.585" x2="544.302" y2="-102.047" gradientUnits="userSpaceOnUse">
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
          <g clipPath="url(#clip0_3905_134531)">
            <g filter="url(#filter0_f_3905_134531)">
              <path d="M269.063 293.168C190.493 447.557 57.8698 537.635 -27.1598 494.363C-112.189 451.091 -201.759 184.731 -123.19 30.3416C-44.6204 -124.047 172.336 -108.001 257.366 -64.7291C342.395 -21.457 347.632 138.779 269.063 293.168Z" fill="url(#paint0_linear_3905_134531)" fillOpacity="0.4"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_3905_134531" x="-653.457" y="-594.439" width="1478.18" height="1599.65" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3905_134531"/>
            </filter>
            <linearGradient id="paint0_linear_3905_134531" x1="103.406" y1="-143.08" x2="428.579" y2="41.7277" gradientUnits="userSpaceOnUse">
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
