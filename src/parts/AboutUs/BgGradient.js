import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import useResponsive from 'utils/useResponsive'

const BgGradient = ({ className }) => {
  const { md, lg } = useResponsive()

  return lg // large
    ? (
      <></>
    )
    : md
      ? (
        <svg className={clsx(
          'w-full',
          'max-w-[834px]',
          className
        )} width="834" height="624" viewBox="0 0 834 624" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_3731_124059)">
            <g filter="url(#filter0_f_3731_124059)">
              <path d="M326.32 241.545C218.955 452.517 37.7259 575.608 -78.4667 516.477C-194.659 457.346 -317.056 93.3661 -209.691 -117.606C-102.327 -328.578 194.143 -306.651 310.336 -247.519C426.528 -188.388 433.685 30.5733 326.32 241.545Z" fill="url(#paint0_linear_3731_124059)" fillOpacity="0.4"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_3731_124059" x="-751.055" y="-788.119" width="1653.44" height="1819.42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3731_124059"/>
            </filter>
            <linearGradient id="paint0_linear_3731_124059" x1="99.9503" y1="-354.585" x2="544.298" y2="-102.047" gradientUnits="userSpaceOnUse">
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
        )} width="375" height="617" viewBox="0 0 375 617" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_3731_124058)">
            <g filter="url(#filter0_f_3731_124058)">
              <path d="M269.063 337.168C190.493 491.557 57.8698 581.635 -27.1598 538.363C-112.189 495.091 -201.759 228.731 -123.19 74.3416C-44.6204 -80.0474 172.336 -64.0012 257.366 -20.7291C342.395 22.543 347.632 182.779 269.063 337.168Z" fill="url(#paint0_linear_3731_124058)" fillOpacity="0.4"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_3731_124058" x="-653.457" y="-550.439" width="1478.18" height="1599.65" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3731_124058"/>
            </filter>
            <linearGradient id="paint0_linear_3731_124058" x1="103.406" y1="-99.0798" x2="428.579" y2="85.7277" gradientUnits="userSpaceOnUse">
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
