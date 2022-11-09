import React from 'react'
import PropTypes from 'prop-types'

const Emotion1 = ({ className, fillColor, fillOpacity }) => {
  return (
    <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M20 5C28.2843 5 35 11.7157 35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5Z" fill={fillColor} fillOpacity={fillOpacity} />
      <path fillRule="evenodd" clipRule="evenodd" d="M13.25 28.5829C14.281 19.3005 26.156 19.3005 27.0001 28.5829C24.7425 22.9529 17.406 20.982 13.25 28.5829Z" fill="#15162E" />
      <path fillRule="evenodd" clipRule="evenodd" d="M25.5313 13.125C26.3942 13.125 27.0938 13.8246 27.0938 14.6875C27.0938 15.5505 26.3942 16.25 25.5313 16.25C24.6683 16.25 23.9688 15.5505 23.9688 14.6875C23.9688 13.8245 24.6683 13.125 25.5313 13.125Z" fill="#15162E" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14.4688 13.125C15.3317 13.125 16.0313 13.8246 16.0313 14.6875C16.0313 15.5505 15.3317 16.25 14.4688 16.25C13.6058 16.25 12.9062 15.5505 12.9062 14.6875C12.9062 13.8245 13.6058 13.125 14.4688 13.125Z" fill="#15162E" />
    </svg>
  )
}

Emotion1.propTypes = {
  className: PropTypes.string,
  fillColor: PropTypes.string,
  fillOpacity: PropTypes.string
}

export default Emotion1
