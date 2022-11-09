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
        <g clipPath="url(#clip0_3723_124055)">
          <g filter="url(#filter0_f_3723_124055)">
            <path d="M1548.31 811.983C1373.1 925.4 1202.37 1023.88 1131.72 1005.23C1061.08 986.569 1106.32 866.912 1232.78 737.964C1359.23 609.017 1670.17 635.309 1740.81 653.965C1811.45 672.622 1723.52 698.565 1548.31 811.983Z" fill="#6EBAF1" fillOpacity="0.4"/>
          </g>
          <g filter="url(#filter1_f_3723_124055)">
            <path d="M430.32 475.01C322.955 584.492 141.726 648.369 25.5333 617.683C-90.6592 586.998 -213.056 398.114 -105.691 288.633C1.67346 179.151 298.143 190.53 414.336 221.215C530.528 251.901 537.685 365.529 430.32 475.01Z" fill="url(#paint0_linear_3723_124055)" fillOpacity="0.4"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_3723_124055" x="690.371" y="230.314" width="1482.89" height="1185.19" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_3723_124055"/>
          </filter>
          <filter id="filter1_f_3723_124055" x="-647.055" y="-299.854" width="1653.44" height="1425.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3723_124055"/>
          </filter>
          <linearGradient id="paint0_linear_3723_124055" x1="203.95" y1="165.655" x2="471.234" y2="458.381" gradientUnits="userSpaceOnUse">
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
        )} width="834" height="1287" viewBox="0 0 834 1287" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_3723_124056)">
            <g filter="url(#filter0_f_3723_124056)">
              <path d="M818.25 988.418C712.948 1119.77 610.334 1233.83 567.877 1212.22C525.419 1190.62 552.611 1052.04 628.612 902.693C704.613 753.351 891.487 783.802 933.945 805.409C976.403 827.016 923.552 857.062 818.25 988.418Z" fill="#6EBAF1" fillOpacity="0.7"/>
            </g>
            <g filter="url(#filter1_f_3723_124056)">
              <path d="M275.152 367.293C200.834 513.328 75.3879 598.531 -5.04054 557.601C-85.469 516.67 -170.192 264.724 -95.8742 118.689C-21.5563 -27.3455 183.66 -12.1676 264.088 28.7629C344.517 69.6934 349.47 221.258 275.152 367.293Z" fill="url(#paint0_linear_3723_124056)" fillOpacity="0.7"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_3723_124056" x="139.832" y="379.283" width="1216.81" height="1243.58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_3723_124056"/>
            </filter>
            <filter id="filter1_f_3723_124056" x="-624.504" y="-499.34" width="1452.31" height="1567.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3723_124056"/>
            </filter>
            <linearGradient id="paint0_linear_3723_124056" x1="118.46" y1="-45.348" x2="426.036" y2="129.459" gradientUnits="userSpaceOnUse">
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

BgGradient.propTypes = {
  className: PropTypes.string
}

export default BgGradient
