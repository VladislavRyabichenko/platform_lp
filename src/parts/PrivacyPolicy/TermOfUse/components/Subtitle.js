import React from 'react'
import PropTypes from 'prop-types'

const Subtitle = ({ children }) => {
  return (
    <h4 className="text-m-medium md:text-l-medium text-black dark:text-white/[0.88]">{children}</h4>
  )
}

Subtitle.propTypes = {
  children: PropTypes.node
}

export default Subtitle
