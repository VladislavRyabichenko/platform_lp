import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components/common'

import Menu from 'assets/icon/Menu'

const HamburgerButton = ({ onClick }) => {
  return (
    <Button
      className="block lg:hidden w-fit h-fit space-x-0"
      onClick={onClick}
    >
      <Menu/>
    </Button>
  )
}

HamburgerButton.propTypes = {
  onClick: PropTypes.func
}

export default HamburgerButton
