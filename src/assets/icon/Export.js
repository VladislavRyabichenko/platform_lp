import React from 'react'
import PropTypes from 'prop-types'

const Exports = ({ className = 'stroke-white' }) => {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0013 1.66699C5.4013 1.66699 1.66797 5.40033 1.66797 10.0003C1.66797 14.6003 5.4013 18.3337 10.0013 18.3337C14.6013 18.3337 18.3346 14.6003 18.3346 10.0003" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.832 9.16634L17.6654 2.33301" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.3336 5.69199V1.66699H14.3086" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

Exports.propTypes = {
  className: PropTypes.string
}

export default Exports
