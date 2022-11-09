import React from 'react'
import PropTypes from 'prop-types'

const Description = ({ children }) => {
  return (
    <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56] whitespace-pre-line">{children}</p>
  )
}

Description.propTypes = {
  children: PropTypes.node
}

export default Description
