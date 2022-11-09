import React from 'react'

import {
  BgGradient,
  Header,
  SubsriceForm,
  RecentPost,
  FeaturePost
} from 'parts/Blog'

import DotsBackground from 'components/DotsBackground'
import CTADownload from 'components/CTADownload'

const Blog = () => {
  return (
    <>
      <BgGradient className="absolute m-auto left-0 right-0 top-0 z-[-1] overflow-visible"/>
      <DotsBackground folder="blog" className="absolute top-0 left-0 z-[-1] w-full h-auto"/>
      <Header/>
      <SubsriceForm/>
      <RecentPost/>
      <FeaturePost/>
      <CTADownload/>
    </>
  )
}

export default Blog
