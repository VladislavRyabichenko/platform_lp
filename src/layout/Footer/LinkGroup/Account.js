import React from 'react'
import PropTypes from 'prop-types'

import { AnchorLink, TitleGroup } from './Styled'

const Account = ({ linkOnClick }) => {
  return (
    <div>
      <AnchorLink className="block sm:hidden" to="/policy/privacy" onClick={linkOnClick}>Privacy Policy</AnchorLink>

      <TitleGroup className="mt-6 sm:mt-0">Account</TitleGroup>

      <div className="space-y-3 mt-4">
        <AnchorLink className="block" to="/auth/login" onClick={linkOnClick}>Log In</AnchorLink>
        <AnchorLink className="block" to="/auth/sign-up" onClick={linkOnClick}>Sign Up</AnchorLink>
      </div>
    </div>
  )
}

Account.propTypes = {
  linkOnClick: PropTypes.func
}

export default Account
