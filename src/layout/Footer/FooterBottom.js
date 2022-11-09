import clsx from 'clsx'
import React from 'react'
import tw from 'twin.macro'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import SSL from 'assets/img/SSL.png'

import { Account, Resources, ConnectWithUs, Product } from './LinkGroup'

const AnchorLink = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  

  ${tw`
    text-[#060721] dark:text-white
    hover:text-opacity-50
  `};
`

const FooterBottom = ({ setIsOpenFeedBack }) => {
  const scrolToTop = () => {
    return window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div className={clsx(
      'bg-white dark:bg-[#060721]',
      'divide-[#060721]/[0.08] dark:divide-white/[0.2]',
      'divide-y-[1px]',
      'pt-12 md:pt-12 lg:pt-12',
      'px-6 md:px-10 xl:px-[140px]',
      'pb-8 md:pb-12 lg:pb-14'
    )}>
      <div className={clsx(
        'flex items-start justify-between',
        'pb-20 md:pb-7 lg:pb-10',
        'flex-col tablet:flex-row'
      )}>
        <div className={clsx(
          'w-full tablet:w-[564px]',
          'mb-10 tablet:mb-0'
        )}>
          <div className={clsx(
            'w-[100px] md:w-[134px]',
            'h-6 md:h-[32px]'
          )}>
            <img className="dark:block hidden w-full h-full" src={require('assets/logo.png')} alt=""/>
            <img className="dark:hidden block w-full h-full" src={require('assets/logo-light.png')} alt=""/>
          </div>

          <p className="text-xs-reguler tracking-[0.2px] text-[#060721] dark:text-white/[0.56] mt-5">TRYNDx is a leading Trading Journal that offers an innovative experience when it comes to improving your portfolio, increasing your profits and surpass the average trader. Journal trades, see how you stack up against others and gain access to leadership, verified traders and mentors.</p>

          <div className="hidden sm:flex space-x-6 mt-8">
            <AnchorLink to="/policy/privacy" onClick={scrolToTop} >Privacy Policy</AnchorLink>
            <AnchorLink to="/policy/term-of-use" onClick={scrolToTop}>Terms of Use</AnchorLink>
            <AnchorLink to="/policy/refund" onClick={scrolToTop} >Refund Policy</AnchorLink>
            <AnchorLink to="/faq" onClick={scrolToTop}>FAQ</AnchorLink>
          </div>
        </div>

        <div className={clsx(
          'grid items-start',
          'grid-cols-[max-content,max-content] sm:grid-flow-col',
          'gap-x-14 sm:gap-x-12',
          'gap-y-8'
        )}>
          <Account linkOnClick={scrolToTop} />
          <Product setIsOpenFeedBack={setIsOpenFeedBack} linkOnClick={scrolToTop}/>
          <Resources linkOnClick={scrolToTop}/>
          <ConnectWithUs linkOnClick={scrolToTop}/>
        </div>
      </div>

      <div className={clsx(
        'flex justify-between pt-4',
        'flex-col lg:flex-row'
      )}>
        <div className="space-y-3 w-full lg:w-[862px]">
          <p className="font-normal text-[11px] leading-[14px] tracking-[0.2px] text-[#060721]/60 dark:text-white/[0.56]">
            Copyright © 2022 TRYNDx LLC. All Rights Reserved.   |  500 Delaware Ave, STE 1 #1960 Wilmington, DE, US, 19899
          </p>
          <p className="font-normal text-[11px] leading-[14px] tracking-[0.2px] text-[#060721]/60 dark:text-white/[0.56]">
            Disclaimer : We do not sell or advertise investments of any kind. We are not an investment or trading company. Trading contains substantial risk and is not for every investor. An investor could potentially lose all or more than the initial investment. Risk capital is money that can be lost without jeopardizing one’s financial security or lifestyle. Only risk capital should be used for trading. Past performance is not necessarily indicative of future results.
          </p>
        </div>

        <div className="flex items-center space-x-3 md:space-x-4">
          <img className="mt-10 lg:mt-0 w-[109px] h-[47px]" src={SSL} alt=""/>
          <a href="//www.dmca.com/Protection/Status.aspx?ID=c1cbb162-28ae-4d41-bf41-75e473d08c8b" title="DMCA.com Protection Status" className="dmca-badge mt-10 lg:mt-0" target="_blank" rel="noreferrer">
            <img src ="https://images.dmca.com/Badges/dmca-badge-w150-5x1-10.png?ID=c1cbb162-28ae-4d41-bf41-75e473d08c8b" alt="DMCA.com Protection Status" />
          </a>
        </div>
      </div>
    </div>
  )
}

FooterBottom.propTypes = {
  setIsOpenFeedBack: PropTypes.bool
}

export default FooterBottom
