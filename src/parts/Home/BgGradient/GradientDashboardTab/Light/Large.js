import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Large = ({ className }) => {
  return (
    <svg className={clsx(
      'max-w-[1440px]',
      className
    )} width="1440" height="584" viewBox="0 0 1440 584" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4126_151917)">
        <g filter="url(#filter0_f_4126_151917)">
          <path d="M430.324 -282.99C322.959 -173.508 141.73 -109.631 25.5372 -140.317C-90.6553 -171.002 -213.052 -359.886 -105.688 -469.367C1.67737 -578.849 298.147 -567.47 414.34 -536.785C530.532 -506.099 537.689 -392.471 430.324 -282.99Z" fill="url(#paint0_linear_4126_151917)" fillOpacity="0.3"/>
        </g>
        <g filter="url(#filter1_f_4126_151917)">
          <path d="M222.175 510.121C109.818 650.277 0.328668 771.977 -44.9739 748.922C-90.2764 725.868 -61.2622 578.001 19.8312 418.652C100.925 259.304 300.32 291.795 345.623 314.85C390.925 337.904 334.533 369.964 222.175 510.121Z" fill="#6EBAF1" fillOpacity="0.3"/>
        </g>
        <g filter="url(#filter2_f_4126_151917)">
          <path d="M1588.17 109.6C1260.81 314.174 940.325 491.189 800.389 454.234C660.454 417.278 733.838 196.812 964.297 -38.1912C1194.76 -273.194 1803.78 -214.089 1943.72 -177.133C2083.66 -140.177 1915.53 -94.973 1588.17 109.6Z" fill="#6EBAF1" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_4126_151917" x="-647.051" y="-1057.85" width="1653.44" height="1425.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_4126_151917"/>
        </filter>
        <filter id="filter1_f_4126_151917" x="-474.363" y="-112.492" width="1243.67" height="1272.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_4126_151917"/>
        </filter>
        <filter id="filter2_f_4126_151917" x="129.418" y="-811.988" width="2463.88" height="1871.14" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="300" result="effect1_foregroundBlur_4126_151917"/>
        </filter>
        <linearGradient id="paint0_linear_4126_151917" x1="203.954" y1="-592.345" x2="471.238" y2="-299.619" gradientUnits="userSpaceOnUse">
          <stop stopColor="#829AF1"/>
          <stop offset="1" stopColor="#6066EB"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

Large.propTypes = {
  className: PropTypes.string
}

export default Large
