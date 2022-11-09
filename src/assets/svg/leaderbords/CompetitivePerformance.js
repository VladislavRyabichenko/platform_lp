import React from 'react'
import PropTypes from 'prop-types'

const CompetitivePerformance = ({ className }) => {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.85 9.01 9.02 9.02C12.19 9.27 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z" />
      <path d="M21.9981 8.5C21.9981 11.76 19.5981 14.45 16.4781 14.92V14.86C16.1681 10.98 13.0181 7.83 9.10812 7.52H9.07812C9.54812 4.4 12.2381 2 15.4981 2C19.0881 2 21.9981 4.91 21.9981 8.5Z" />
      <path d="M5.59 2H3C2.45 2 2 2.45 2 3V5.59C2 6.48 3.08 6.93 3.71 6.3L6.3 3.71C6.92 3.08 6.48 2 5.59 2Z" />
      <path d="M18.4097 22.0003H20.9997C21.5497 22.0003 21.9997 21.5503 21.9997 21.0003V18.4103C21.9997 17.5203 20.9197 17.0703 20.2897 17.7003L17.6997 20.2903C17.0797 20.9203 17.5197 22.0003 18.4097 22.0003Z" />
    </svg>
  )
}

CompetitivePerformance.propTypes = {
  className: PropTypes.string
}

export default CompetitivePerformance
