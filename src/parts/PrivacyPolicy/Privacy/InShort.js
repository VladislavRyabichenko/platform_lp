import React from 'react'
import PropTypes from 'prop-types'

const InShorts = ({ text }) => {
  return (
    <div className="p-4 bg-black/[0.02] dark:bg-white/[0.06] rounded-lg">
      <p className="text-s-reguler md:text-m-medium text-black dark:text-white/[0.56]">{text}</p>
    </div>
  )
}

InShorts.propTypes = {
  text: PropTypes.string
}

export default InShorts
