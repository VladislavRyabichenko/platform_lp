import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({ className }) => {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.6654 2H1.33203L6.66536 8.30667V12.6667L9.33203 14V8.30667L14.6654 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

Filter.propTypes = {
  className: PropTypes.string
}

export default Filter
