import React from 'react'

import {
  BgGradient,
  Header,
  Content
} from 'parts/AboutUs'

import DotsBackground from 'components/DotsBackground'
import CTADownload from 'components/CTADownload'
import CoreValues from 'parts/AboutUs/CoreValues'

const AboutUs = () => {
  return (
    <>
      <BgGradient className="absolute m-auto left-0 right-0 top-0 z-[-1] overflow-visible"/>
      <DotsBackground folder="about-us" className="absolute top-0 lg:top-[92px] left-0 z-[-1] w-full h-auto"/>
      <Header/>
      <Content/>
      <CoreValues/>
      <CTADownload/>
    </>
  )
}

export default AboutUs
