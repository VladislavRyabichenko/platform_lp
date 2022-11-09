import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Large = ({ className }) => {
  return (
    <svg className={clsx(
      'max-w-[1440px]',
      className
    )} width="1440" height="584" viewBox="0 0 1440 584" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_3710_124046)">
        <path d="M1648.32 344.894C1473.11 563.451 1302.38 753.226 1231.73 717.275C1161.09 681.324 1206.34 450.744 1332.79 202.261C1459.25 -46.2229 1770.18 4.44303 1840.82 40.394C1911.46 76.3449 1823.53 126.338 1648.32 344.894Z" fill="#6EBAF1" fillOpacity="0.7"/>
      </g>
      <g filter="url(#filter1_f_3710_124046)">
        <path d="M338.32 344.894C163.113 563.451 -7.62148 753.226 -78.265 717.275C-148.909 681.324 -103.665 450.744 22.7902 202.261C149.245 -46.2229 460.177 4.44303 530.82 40.394C601.464 76.3449 513.528 126.338 338.32 344.894Z" fill="#6EBAF1" fillOpacity="0.1"/>
      </g>

      <defs>
        <filter id="filter0_f_3710_124046" x="790.383" y="-397.766" width="1482.89" height="1527.44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_3710_124046"/>
        </filter>
        <filter id="filter1_f_3710_124046" x="-519.617" y="-397.766" width="1482.89" height="1527.44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_3710_124046"/>
        </filter>
      </defs>
    </svg>
  )
}

Large.propTypes = {
  className: PropTypes.string
}

export default Large
