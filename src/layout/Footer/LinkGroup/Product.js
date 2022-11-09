import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components/common'

import { AnchorLink, TitleGroup } from './Styled'

const Product = ({ setIsOpenFeedBack, linkOnClick }) => {
  return (
    <div className="w-[70px]">
      <AnchorLink className="whitespace-nowrap block sm:hidden" to="/policy/term-of-use" onClick={linkOnClick}>
        Terms of Use
      </AnchorLink>

      <TitleGroup className="mt-6 sm:mt-0">Product</TitleGroup>

      <div className="space-y-3 mt-4">
        <AnchorLink className="block" to="/features" onClick={linkOnClick}>Features</AnchorLink>
        <AnchorLink className="block" to="/pricing" onClick={linkOnClick}>Pricing</AnchorLink>
        <AnchorLink className="block" to="/supported-broker" onClick={linkOnClick}>Supported Brokers</AnchorLink>
        <Button className={clsx(
          'w-fit h-fit',
          'text-s-reguler',
          'text-[#060721] dark:text-white'
        )} onClick={() => {
          setIsOpenFeedBack(true)
        }}>Feedback</Button>
      </div>
    </div>
  )
}

Product.propTypes = {
  linkOnClick: PropTypes.func,
  setIsOpenFeedBack: PropTypes.func
}

export default Product
