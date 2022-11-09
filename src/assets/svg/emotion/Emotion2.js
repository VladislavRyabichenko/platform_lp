import React from 'react'
import PropTypes from 'prop-types'

const Emotion2 = ({ className, fillColor, fillOpacity }) => {
  return (
    <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M20 5C28.2843 5 35 11.7157 35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5Z" fill={fillColor} fillOpacity={fillOpacity}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.125 24.3623C14.1876 30.4713 25.9606 30.222 26.875 24.3623C24.6446 27.3958 17.3147 28.8439 13.125 24.3623Z" fill="#15162E"/>
      <path d="M27.3057 16.1608C27.0041 13.625 23.8232 12.8717 22.3711 14.6066C25.5131 13.8627 26.8767 17.5 27.3057 16.1608Z" fill="#15162E"/>
      <path d="M12.6953 16.1608C12.9969 13.625 16.1778 12.8717 17.6299 14.6066C14.4879 13.8627 13.1243 17.5 12.6953 16.1608Z" fill="#15162E"/>
    </svg>
  )
}

Emotion2.propTypes = {
  className: PropTypes.string,
  fillColor: PropTypes.string,
  fillOpacity: PropTypes.string
}

export default Emotion2
