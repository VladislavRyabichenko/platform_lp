import React from 'react'

import {
  BgGradient,
  Header,
  Contents
} from 'parts/Security'

import DotsBackground from 'components/DotsBackground'
import CTADownload from 'components/CTADownload'

const Security = () => {
  return (
    <>
      <DotsBackground folder="security" className="absolute top-0 left-0 z-[-1] w-full h-auto"/>
      <BgGradient className="absolute m-auto top-0 right-0 left-0 z-[-1] w-full h-auto overflow-visible"/>
      <Header/>
      <Contents/>
      <CTADownload/>
    </>
  )
}

export default Security
