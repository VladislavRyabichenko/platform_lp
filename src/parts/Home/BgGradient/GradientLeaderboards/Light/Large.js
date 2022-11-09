import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Large = ({ className }) => {
  return (
    <svg className={clsx(
      'max-w-[1081px]',
      className
    )} width="1081" height="620" viewBox="0 0 1081 620" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4210_137743)">
        <g filter="url(#filter0_f_4210_137743)">
          <ellipse cx="224.186" cy="241.755" rx="100.002" ry="297.789" transform="rotate(26.9718 224.186 241.755)" fill="#6E73F1" fillOpacity="0.4"/>
        </g>
        <g filter="url(#filter1_f_4210_137743)">
          <ellipse cx="894.745" cy="276.952" rx="100.002" ry="214.98" transform="rotate(26.9718 894.745 276.952)" fill="#6E73F1" fillOpacity="0.2"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_4210_137743" x="-277.648" y="-367.535" width="1003.67" height="1218.58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="170" result="effect1_foregroundBlur_4210_137743"/>
        </filter>
        <filter id="filter1_f_4210_137743" x="422.645" y="-259.984" width="944.199" height="1073.87" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="170" result="effect1_foregroundBlur_4210_137743"/>
        </filter>
      </defs>
    </svg>

  )
}

Large.propTypes = {
  className: PropTypes.string
}

export default Large
