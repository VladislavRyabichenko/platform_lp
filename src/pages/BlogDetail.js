import React from 'react'

import {
  BgGradient,
  Header,
  UserInformation,
  Content,
  UserInformationBottom,
  Related
} from 'parts/BlogDetail'

import DotsBackground from 'components/DotsBackground'

const BlogDetail = () => {
  return (
    <>
      <DotsBackground folder="blog-detail" className="absolute top-0 left-0 z-[-1] w-full h-auto"/>
      <BgGradient className="absolute m-auto top-0 right-0 left-0 z-[-1] w-full h-auto overflow-visible"/>
      <Header/>
      <UserInformation/>
      <Content/>
      <UserInformationBottom/>
      <Related/>
    </>
  )
}

export default BlogDetail
