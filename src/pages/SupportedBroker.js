import React from 'react'

import {
  BgGradient,
  Header,
  PlatformTradingTable
} from 'parts/SupportedBroker'

import DotsBackground from 'components/DotsBackground'
import CTADownload from 'components/CTADownload'

const SupportedBroker = () => {
  return (
    <>
      <BgGradient className="absolute m-auto left-0 right-0 top-0 z-[-1] overflow-visible"/>
      <DotsBackground folder="supported-broker" className="absolute top-0 left-0 z-[-1] w-full h-auto"/>
      <Header/>
      <PlatformTradingTable/>
      <CTADownload/>
    </>
  )
}

export default SupportedBroker
