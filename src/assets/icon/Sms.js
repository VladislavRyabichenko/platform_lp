import React from 'react'
import PropTypes from 'prop-types'

const Sms = ({ className }) => {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.168 17.0827H5.83464C3.33464 17.0827 1.66797 15.8327 1.66797 12.916V7.08268C1.66797 4.16602 3.33464 2.91602 5.83464 2.91602H14.168C16.668 2.91602 18.3346 4.16602 18.3346 7.08268V12.916C18.3346 15.8327 16.668 17.0827 14.168 17.0827Z" strokeOpacity="0.8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.1654 7.5L11.557 9.58333C10.6987 10.2667 9.29036 10.2667 8.43203 9.58333L5.83203 7.5" strokeOpacity="0.8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

Sms.propTypes = {
  className: PropTypes.string
}

export default Sms
