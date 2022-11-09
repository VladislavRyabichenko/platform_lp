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
        'max-w-[1439px]',
        className
      )} width="1439" height="1137" viewBox="0 0 1439 1137" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3726_124046)">
          <g filter="url(#filter0_f_3726_124046)">
            <path d="M1548.5 1012.56C1373.29 1231.11 1202.55 1420.89 1131.91 1384.94C1061.27 1348.99 1106.51 1118.41 1232.97 869.925C1359.42 621.441 1670.35 672.107 1741 708.058C1811.64 744.009 1723.7 794.002 1548.5 1012.56Z" fill="#6EBAF1" fillOpacity="0.7"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_3726_124046" x="690.559" y="269.898" width="1482.89" height="1527.44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_3726_124046"/>
          </filter>
        </defs>
      </svg>
    )
    : md
      ? (
        <svg className={clsx(
          'w-full',
          'max-w-[831px]',
          className
        )} width="831" height="1646" viewBox="0 0 831 1646" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_3726_124047)">
            <g filter="url(#filter0_f_3726_124047)">
              <path d="M326.324 241.545C218.959 452.517 37.7298 575.608 -78.4628 516.477C-194.655 457.346 -317.052 93.3661 -209.687 -117.606C-102.323 -328.578 194.147 -306.651 310.34 -247.519C426.532 -188.388 433.689 30.5733 326.324 241.545Z" fill="url(#paint0_linear_3726_124047)" fillOpacity="0.4"/>
            </g>
            <g filter="url(#filter1_f_3726_124047)">
              <path d="M969.496 1148.56C794.289 1367.11 623.554 1556.89 552.911 1520.94C482.267 1484.99 527.511 1254.41 653.966 1005.92C780.421 757.441 1091.35 808.107 1162 844.058C1232.64 880.009 1144.7 930.002 969.496 1148.56Z" fill="#6EBAF1" fillOpacity="0.4"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_3726_124047" x="-751.051" y="-788.119" width="1653.44" height="1819.42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3726_124047"/>
            </filter>
            <filter id="filter1_f_3726_124047" x="111.559" y="405.898" width="1482.89" height="1527.44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_3726_124047"/>
            </filter>
            <linearGradient id="paint0_linear_3726_124047" x1="99.9542" y1="-354.585" x2="544.302" y2="-102.047" gradientUnits="userSpaceOnUse">
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
          <g clipPath="url(#clip0_3726_124048)">
            <g filter="url(#filter0_f_3726_124048)">
              <path d="M269.063 293.168C190.493 447.557 57.8698 537.635 -27.1598 494.363C-112.189 451.091 -201.759 184.731 -123.19 30.3416C-44.6204 -124.047 172.336 -108.001 257.366 -64.7291C342.395 -21.457 347.632 138.779 269.063 293.168Z" fill="url(#paint0_linear_3726_124048)" fillOpacity="0.4"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_3726_124048" x="-653.457" y="-594.439" width="1478.18" height="1599.65" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3726_124048"/>
            </filter>
            <linearGradient id="paint0_linear_3726_124048" x1="103.406" y1="-143.08" x2="428.579" y2="41.7277" gradientUnits="userSpaceOnUse">
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
