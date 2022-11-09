import React from 'react'

import {
  BgGradient,
  Header,
  CurrencyDropdown,
  Plan,
  ComparisonTable,
  Partner,
  OurAdvanced,
  FAQ
} from 'parts/Pricing'

import DotsBackground from 'components/DotsBackground'
import CTADownload from 'components/CTADownload'

const Pricing = () => {
  return (
    <div className="overflow-x-hidden">
      <DotsBackground folder="pricing" className="absolute top-0 md:top-0 dark:lg:top-[92px] left-0 z-[-1] w-full h-auto"/>
      <BgGradient className="absolute m-auto top-0 right-0 left-0 z-[-1] w-full h-auto overflow-visible"/>
      <Header/>

      <CurrencyDropdown/>

      <Plan/>
      <ComparisonTable/>

      <Partner/>
      <OurAdvanced/>
      <FAQ/>
      <CTADownload/>
    </div>
  )
}

export default Pricing
