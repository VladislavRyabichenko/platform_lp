import React from 'react'
import PropTypes from 'prop-types'

const Emotion4 = ({ className, fillColor, fillOpacity }) => {
  return (
    <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M20 5C28.2843 5 35 11.7157 35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5Z" fill={fillColor} fillOpacity={fillOpacity}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.9998 21.836L28.566 21.8359V21.836C28.566 26.5669 24.7307 30.4021 19.9998 30.4021C15.2688 30.4021 11.4336 26.5669 11.4336 21.836H19.9998Z" fill="#15162E"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.4727 22.8126C12.9518 26.5432 16.139 29.4256 20.0001 29.4256C23.8612 29.4256 27.0484 26.5431 27.5275 22.8125L12.4727 22.8125L12.4727 22.8126Z" fill="white" fillOpacity={fillOpacity}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.625 13.125C26.488 13.125 27.1875 13.8246 27.1875 14.6875C27.1875 15.5505 26.488 16.25 25.625 16.25C24.762 16.25 24.0625 15.5505 24.0625 14.6875C24.0625 13.8245 24.7621 13.125 25.625 13.125Z" fill="#15162E"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M14.5625 13.125C15.4255 13.125 16.125 13.8246 16.125 14.6875C16.125 15.5505 15.4255 16.25 14.5625 16.25C13.6995 16.25 13 15.5505 13 14.6875C13 13.8245 13.6996 13.125 14.5625 13.125Z" fill="#15162E"/>
    </svg>
  )
}

Emotion4.propTypes = {
  className: PropTypes.string,
  fillColor: PropTypes.string,
  fillOpacity: PropTypes.string
}

export default Emotion4
