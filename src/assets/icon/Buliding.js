import React from 'react'
import PropTypes from 'prop-types'

const Building = ({ className }) => {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.66797 18.334H18.3346" strokeOpacity="0.8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.1667 1.66602H5.83333C3.33333 1.66602 2.5 3.15768 2.5 4.99935V18.3327H17.5V4.99935C17.5 3.15768 16.6667 1.66602 14.1667 1.66602Z" strokeOpacity="0.8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.83203 13.75H8.33203" strokeOpacity="0.8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.668 13.75H14.168" strokeOpacity="0.8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.83203 10H8.33203" strokeOpacity="0.8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.668 10H14.168" strokeOpacity="0.8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.83203 6.25H8.33203" strokeOpacity="0.8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.668 6.25H14.168" strokeOpacity="0.8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

Building.propTypes = {
  className: PropTypes.string
}

export default Building
