import React from 'react'

import {
  BgGradient,
  Header,
  Content
} from 'parts/FAQ'

import DotsBackground from 'components/DotsBackground'
import CTADownload from 'components/CTADownload'

const FAQ = () => {
  return (
    <>
      <BgGradient className="absolute m-auto left-0 right-0 top-0 z-[-1] overflow-visible"/>
      <DotsBackground folder="faq" className="absolute top-0 left-0 z-[-1] w-full h-auto"/>
      <Header/>
      <Content/>
      <CTADownload/>
    </>
  )
}

export default FAQ
