import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const Button = ({ type = 'Button', custom, variants, className, children, onClick, onMouseEnter, onMouseLeave, isDisable }) => {
  return (
    <motion.button
      custom={custom}
      variants={variants}
      type={type}
      className={clsx(
        'rounded-xl',
        'flex',
        'items-center',
        'justify-center',
        'gap-x-2',
        'text-s-bold',
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      disabled={isDisable}
    >{children}</motion.button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  custom: PropTypes.object,
  variants: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  isDisable: PropTypes.bool
}

export default Button
