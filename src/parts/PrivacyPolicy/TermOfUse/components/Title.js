import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ children }) => {
  return (
    <div className="w-full pb-4 border-b border-b-black/[0.08] dark:border-b-white/[0.2]">
      <h4 className="text-l-bold md:h4-bold text-black dark:text-white w-fit">{children}</h4>
    </div>
  )
}

Title.propTypes = {
  children: PropTypes.node
}

export default Title
