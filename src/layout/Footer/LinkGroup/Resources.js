import React from 'react'
import PropTypes from 'prop-types'

import { AnchorLink, TitleGroup } from './Styled'

const Resources = ({ linkOnClick }) => {
  return (
    <div>
      <AnchorLink className="block sm:hidden" to="/policy/refund" onClick={linkOnClick}>
        Refund Policy
      </AnchorLink>

      <TitleGroup className="mt-6 sm:mt-0">Resources</TitleGroup>

      <div className="space-y-3 mt-4">
        <AnchorLink className="block" to="/about-us" onClick={linkOnClick}>About Us</AnchorLink>
        <AnchorLink className="block" to="/blog" onClick={linkOnClick}>Blog</AnchorLink>
        <AnchorLink className="block" to="/contact-us" onClick={linkOnClick}>Contact</AnchorLink>
        <AnchorLink className="block" to="/security" onClick={linkOnClick}>Security</AnchorLink>
      </div>
    </div>
  )
}

Resources.propTypes = {
  linkOnClick: PropTypes.func
}

export default Resources
