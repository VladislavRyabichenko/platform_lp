import React from 'react'

import DotsBackground from 'components/DotsBackground'

import {
  Header,
  Contents
} from 'parts/Features'
import CTADownload from 'components/CTADownload'

const Features = () => {
  return (
    <>
      <DotsBackground folder="feature" className="absolute top-0 left-0 z-[-1] w-full h-auto"/>
      <Header/>
      <Contents/>
      <CTADownload/>
    </>
  )
}

export default Features
