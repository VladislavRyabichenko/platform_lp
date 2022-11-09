import React from 'react'
import PropTypes from 'prop-types'

const Logo = ({ url }) => {
  return (
    <img className="absolute w-[96px] h-[96px] m-auto top-0 bottom-0 right-0" src={url} alt=""/>
  )
}

Logo.propTypes = {
  url: PropTypes.string
}

export default Logo
