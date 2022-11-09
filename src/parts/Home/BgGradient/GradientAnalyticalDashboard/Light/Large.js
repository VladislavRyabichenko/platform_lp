import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Large = ({ className }) => {
  return (
    <svg className={clsx(
      'max-w-[1079px]',
      className
    )} width="1079" height="618" viewBox="0 0 1079 618" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4205_137742)">
        <g filter="url(#filter0_f_4205_137742)">
          <ellipse cx="224.19" cy="169.755" rx="100.002" ry="297.789" transform="rotate(26.9718 224.19 169.755)" fill="#6E73F1" fillOpacity="0.4"/>
        </g>
        <g filter="url(#filter1_f_4205_137742)">
          <ellipse cx="895.752" cy="286.847" rx="81.6284" ry="243.077" transform="rotate(26.9718 895.752 286.847)" fill="#6E73F1" fillOpacity="0.2"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_4205_137742" x="-277.645" y="-439.535" width="1003.67" height="1218.58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="170" result="effect1_foregroundBlur_4205_137742"/>
        </filter>
        <filter id="filter1_f_4205_137742" x="486.117" y="-210.497" width="819.271" height="994.689" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="138.766" result="effect1_foregroundBlur_4205_137742"/>
        </filter>
      </defs>
    </svg>
  )
}

Large.propTypes = {
  className: PropTypes.string
}

export default Large
