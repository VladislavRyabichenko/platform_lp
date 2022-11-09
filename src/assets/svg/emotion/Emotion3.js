import React from 'react'
import PropTypes from 'prop-types'

const Emotion3 = ({ className, fillColor, fillOpacity }) => {
  return (
    <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M20 5C28.2843 5 35 11.7157 35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5Z" fill={fillColor} fillOpacity={fillOpacity}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.8125 25H27.1875V26.25H12.8125V25Z" fill="#15162E"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.1094 13.75C25.9724 13.75 26.6719 14.4496 26.6719 15.3125C26.6719 16.1755 25.9724 16.875 25.1094 16.875C24.2464 16.875 23.5469 16.1755 23.5469 15.3125C23.5469 14.4495 24.2464 13.75 25.1094 13.75Z" fill="#15162E"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M14.8906 13.75C15.7536 13.75 16.4532 14.4496 16.4532 15.3125C16.4532 16.1755 15.7536 16.875 14.8906 16.875C14.0277 16.875 13.3281 16.1755 13.3281 15.3125C13.3281 14.4495 14.0277 13.75 14.8906 13.75Z" fill="#15162E"/>
    </svg>
  )
}

Emotion3.propTypes = {
  className: PropTypes.string,
  fillColor: PropTypes.string,
  fillOpacity: PropTypes.string
}

export default Emotion3
