import React from 'react'
import PropTypes from 'prop-types'

const Global = ({ className }) => {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.9987 14.6673C11.6806 14.6673 14.6654 11.6825 14.6654 8.00065C14.6654 4.31875 11.6806 1.33398 7.9987 1.33398C4.3168 1.33398 1.33203 4.31875 1.33203 8.00065C1.33203 11.6825 4.3168 14.6673 7.9987 14.6673Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33177 2H5.99844C4.69844 5.89333 4.69844 10.1067 5.99844 14H5.33177" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 2C11.3 5.89333 11.3 10.1067 10 14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 10.6667V10C5.89333 11.3 10.1067 11.3 14 10V10.6667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 6.00039C5.89333 4.70039 10.1067 4.70039 14 6.00039" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

Global.propTypes = {
  className: PropTypes.string
}

export default Global
