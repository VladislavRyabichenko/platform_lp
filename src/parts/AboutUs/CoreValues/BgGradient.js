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
          'max-w-[369px]',
          className
        )} width="369" height="688" viewBox="0 0 369 688" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_4202_141848)">
            <g filter="url(#filter0_f_4202_141848)">
              <path d="M544.496 272.558C369.289 491.115 198.554 680.89 127.911 644.939C57.2672 608.988 102.511 378.408 228.966 129.925C355.421 -118.559 666.353 -67.8929 736.996 -31.942C807.64 4.00895 719.703 54.0017 544.496 272.558Z" fill="#6EBAF1" fillOpacity="0.4"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_4202_141848" x="-313.441" y="-470.102" width="1482.89" height="1527.44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_4202_141848"/>
            </filter>
          </defs>
        </svg>
      )
      : (
        <></>
      )
}

BgGradient.propTypes = {
  className: PropTypes.string
}

export default BgGradient
