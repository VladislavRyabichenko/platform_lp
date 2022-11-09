import React from 'react'
import tw from 'twin.macro'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { AnchorLink, TitleGroup } from './Styled'

// Icon Connect With Us
import Facebook from 'assets/icon/connect-with-us/Facebook'
import Twitter from 'assets/icon/connect-with-us/Twitter'
import Youtube from 'assets/icon/connect-with-us/Youtube'
import Phone from 'assets/icon/connect-with-us/Phone'
import Global from 'assets/icon/connect-with-us/Global'

const ConnectWithUsItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  ${tw`
    text-[#060721] dark:text-white
  `};
`

const ConnectWithUs = ({ linkOnClick }) => {
  return (
    <div>
      <AnchorLink className="mb-6 block sm:hidden" to="/faq" onClick={linkOnClick}>FAQ</AnchorLink>

      <TitleGroup className="mt-6 sm:mt-0">Connect with us</TitleGroup>

      <div className="space-y-2 lg:space-y-3 mt-4">
        <ConnectWithUsItem to="#">
          <Facebook className="fill-black dark:fill-white"/>
          <p>@tryndx</p>
        </ConnectWithUsItem>
        <ConnectWithUsItem to="#">
          <Twitter className="fill-black dark:fill-white"/>
          <p>@tryndx</p>
        </ConnectWithUsItem>
        <ConnectWithUsItem to="#">
          <Youtube className="fill-black dark:fill-white"/>
          <p>tryndx</p>
        </ConnectWithUsItem>
        <ConnectWithUsItem to="#">
          <Phone className="fill-black dark:fill-white"/>
          <p>+1 2892303</p>
        </ConnectWithUsItem>
        <ConnectWithUsItem to="#">
          <Global className="stroke-black dark:stroke-white" />
          <p>www.tryndx.com</p>
        </ConnectWithUsItem>
      </div>
    </div>
  )
}

ConnectWithUs.propTypes = {
  linkOnClick: PropTypes.func
}

export default ConnectWithUs
