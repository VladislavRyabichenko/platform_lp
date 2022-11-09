import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
  id, name, type, className, placeholder, isRequired, onFocus, onBlur, maxLength, pattern, value, onChange
}) => {
  const handlePatternChange = (e) => {
    const { value } = e.target
    if (pattern !== undefined) {
      if (pattern.test(value)) {
        onChange(e)
      }
    } else {
      onChange(e)
    }
  }

  return (
    <input
      id={id} className={clsx(
        'w-full bg-transparent focus:outline-none',
        className
      )}
      type={type}
      maxLength={maxLength}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      name={name}
      value={value}
      onChange={handlePatternChange}
      required={isRequired}
    />
  )
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.string,
  pattern: PropTypes.string
}

export default Input
