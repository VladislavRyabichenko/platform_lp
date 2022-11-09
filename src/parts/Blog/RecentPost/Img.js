import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const Img = ({ className, large, medium, small }) => {
  return (
    <>
      <img
        className={clsx(
          'hidden lg:block',
          className
        )}
        src={large} alt=""
      />
      <img
        className={clsx(
          'hidden md:block lg:hidden',
          className
        )}
        src={medium} alt=""
      />
      <img
        className={clsx(
          'block md:hidden',
          className
        )}
        src={small} alt=""
      />
    </>
  )
}

Img.propTypes = {
  className: PropTypes.string,
  large: PropTypes.string,
  medium: PropTypes.string,
  small: PropTypes.string
}

export default Img
