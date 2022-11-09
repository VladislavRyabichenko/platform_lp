import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components/common'

const CloseButton = ({ onClick }) => {
  return (
    <Button
      className="block lg:hidden w-fit h-fit space-x-0"
      onClick={onClick}
    >
      <Icon/>
    </Button>
  )
}

const Icon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="url(#paint0_linear_3157_79920)" />
      <path d="M6 6L18.7279 18.7279" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 19L18.7279 6.27208" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="paint0_linear_3157_79920" x1="12" y1="-12" x2="-12" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0C5DFF" />
          <stop offset="1" stopColor="#8FE8FA" />
        </linearGradient>
      </defs>
    </svg>
  )
}

CloseButton.propTypes = {
  onClick: PropTypes.func
}

export default CloseButton
