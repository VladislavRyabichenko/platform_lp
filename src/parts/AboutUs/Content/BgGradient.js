
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
        'max-w-[365px]',
        className
      )} width="365" height="432" viewBox="0 0 365 432" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4202_141847)">
          <g filter="url(#filter0_f_4202_141847)">
            <path d="M544.496 210.644C369.289 324.061 198.554 422.543 127.911 403.887C57.2672 385.23 102.511 265.574 228.966 136.626C355.421 7.67765 666.353 33.9702 736.996 52.6266C807.64 71.2829 719.703 97.2261 544.496 210.644Z" fill="#6EBAF1" fillOpacity="0.4"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_4202_141847" x="-313.441" y="-371.024" width="1482.89" height="1185.19" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_4202_141847"/>
          </filter>
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

BgGradient.propTypes = {
  className: PropTypes.string
}

export default BgGradient
