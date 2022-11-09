import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Medium = ({ className }) => {
  return (
    <svg className={clsx(
      'max-w-[834px]',
      className
    )} width="834" height="486" viewBox="0 0 834 486" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4135_139852)">
        <rect width="834" height="486" fill="white"/>
        <g filter="url(#filter0_f_4135_139852)">
          <path d="M249.23 -216.89C187.048 -125.222 82.0857 -71.738 14.7908 -97.4307C-52.504 -123.123 -123.392 -281.274 -61.2101 -372.942C0.972011 -464.61 172.677 -455.083 239.972 -429.39C307.267 -403.698 311.412 -308.558 249.23 -216.89Z" fill="url(#paint0_linear_4135_139852)" fillOpacity="0.3"/>
        </g>
        <g filter="url(#filter1_f_4135_139852)">
          <path d="M128.677 447.177C63.6028 564.529 0.190261 666.427 -26.0475 647.124C-52.2852 627.82 -35.4811 504.012 11.4855 370.591C58.4521 237.17 173.935 264.375 200.173 283.678C226.411 302.982 193.75 329.825 128.677 447.177Z" fill="#6EBAF1" fillOpacity="0.3"/>
        </g>
        <g filter="url(#filter2_f_4135_139852)">
          <path d="M919.817 111.825C730.222 283.113 544.606 431.327 463.56 400.384C382.514 369.441 425.015 184.847 558.49 -11.9195C691.964 -208.686 1044.69 -159.197 1125.74 -128.254C1206.78 -97.3114 1109.41 -59.4625 919.817 111.825Z" fill="#6EBAF1" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_4135_139852" x="-435.164" y="-797.031" width="1078.45" height="1056.04" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_4135_139852"/>
        </filter>
        <filter id="filter1_f_4135_139852" x="-288.434" y="17.4844" width="747.691" height="882" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_4135_139852"/>
        </filter>
        <filter id="filter2_f_4135_139852" x="-27.5469" y="-607.438" width="1632" height="1461.94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="225" result="effect1_foregroundBlur_4135_139852"/>
        </filter>
        <linearGradient id="paint0_linear_4135_139852" x1="118.124" y1="-475.911" x2="334.452" y2="-312.03" gradientUnits="userSpaceOnUse">
          <stop stopColor="#829AF1"/>
          <stop offset="1" stopColor="#6066EB"/>
        </linearGradient>

      </defs>
    </svg>

  )
}

Medium.propTypes = {
  className: PropTypes.string
}

export default Medium
