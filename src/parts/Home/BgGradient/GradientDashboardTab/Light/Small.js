import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Small = ({ className }) => {
  return (
    <svg className={clsx(
      'max-w-[375px]',
      className
    )} width="375" height="244" viewBox="0 0 375 244" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4135_139844)">
        <rect width="375" height="244" fill="white"/>
        <g filter="url(#filter0_f_4135_139844)">
          <path d="M112.065 -207.658C84.105 -132.958 36.9099 -89.3748 6.65142 -110.312C-23.6071 -131.248 -55.4813 -260.124 -27.5217 -334.824C0.437913 -409.524 77.6436 -401.76 107.902 -380.823C138.161 -359.886 140.024 -282.358 112.065 -207.658Z" fill="url(#paint0_linear_4135_139844)" fillOpacity="0.3"/>
        </g>
        <g filter="url(#filter1_f_4135_139844)">
          <path d="M57.8573 333.483C28.5975 429.113 0.0846451 512.149 -11.7129 496.418C-23.5104 480.688 -15.9546 379.798 5.16343 271.074C26.2815 162.35 78.2074 184.519 90.005 200.249C101.802 215.979 87.117 237.854 57.8573 333.483Z" fill="#6EBAF1" fillOpacity="0.3"/>
        </g>
        <g filter="url(#filter2_f_4135_139844)">
          <path d="M413.585 60.2071C328.335 199.788 244.875 320.567 208.433 295.352C171.992 270.137 191.102 119.712 251.118 -40.6317C311.133 -200.975 469.734 -160.647 506.176 -135.432C542.617 -110.217 498.835 -79.3742 413.585 60.2071Z" fill="#6EBAF1" fillOpacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_4135_139844" x="-288.293" y="-645.199" width="670.168" height="790.137" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_4135_139844"/>
        </filter>
        <filter id="filter1_f_4135_139844" x="-217.281" y="-12.9492" width="511.371" height="711.293" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_4135_139844"/>
        </filter>
        <filter id="filter2_f_4135_139844" x="-110.051" y="-459.215" width="929.137" height="1057.92" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_4135_139844"/>
        </filter>
        <linearGradient id="paint0_linear_4135_139844" x1="53.1142" y1="-418.733" x2="183.436" y2="-364.258" gradientUnits="userSpaceOnUse">
          <stop stopColor="#829AF1"/>
          <stop offset="1" stopColor="#6066EB"/>
        </linearGradient>

      </defs>
    </svg>

  )
}

Small.propTypes = {
  className: PropTypes.string
}

export default Small
