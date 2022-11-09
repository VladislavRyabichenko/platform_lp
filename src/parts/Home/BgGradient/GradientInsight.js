import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import useResponsive from 'utils/useResponsive'

const GradientInsight = ({ className }) => {
  const { md, lg } = useResponsive()

  return lg // large
    ? (
      <svg className={clsx(
        'w-full',
        'max-w-[448px]',
        className
      )} width="448" height="856" viewBox="0 0 448 856" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3813_128874)">
          <g filter="url(#filter0_f_3813_128874)">
            <ellipse rx="100.002" ry="297.789" transform="matrix(-0.89123 0.453552 0.453552 0.89123 224.071 904.755)" fill="#6EBAF1" fillOpacity="0.4"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_3813_128874" x="-277.766" y="295.465" width="1003.67" height="1218.58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="170" result="effect1_foregroundBlur_3813_128874"/>
          </filter>
        </defs>
      </svg>

    )
    : md
      ? (
        <></>
      )
      : (
        <svg className={clsx(
          'w-full',
          'max-w-[375px]',
          className
        )} width="375" height="573" viewBox="0 0 375 573" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_3723_124057)">
            <g filter="url(#filter0_f_3723_124057)">
              <path d="M560.063 293.168C481.493 447.557 348.87 537.635 263.84 494.363C178.811 451.091 89.2406 184.731 167.81 30.3416C246.38 -124.047 463.336 -108.001 548.366 -64.7291C633.395 -21.457 638.632 138.779 560.063 293.168Z" fill="url(#paint0_linear_3723_124057)" fillOpacity="0.4"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_3723_124057" x="-362.457" y="-594.439" width="1478.18" height="1599.65" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3723_124057"/>
            </filter>
            <linearGradient id="paint0_linear_3723_124057" x1="394.406" y1="-143.08" x2="719.579" y2="41.7277" gradientUnits="userSpaceOnUse">
              <stop stopColor="#829AF1"/>
              <stop offset="1" stopColor="#6066EB"/>
            </linearGradient>
          </defs>
        </svg>
      )
}

GradientInsight.propTypes = {
  className: PropTypes.string
}

export default GradientInsight
