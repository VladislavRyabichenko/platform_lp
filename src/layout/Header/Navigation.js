import clsx from 'clsx'
import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

import useScrollToTop from 'utils/useScrollToTop'

const AnchorLink = styled(Link)`
  ${tw`
    text-s-medium
    hover:text-[#060721] hover:text-opacity-100
    dark:hover:text-white
  `};
  ${props => (props.isActive
    ? tw`text-[#060721] text-opacity-100 dark:text-white`
    : tw`text-[#060721] text-opacity-60 dark:text-white/[0.56]`
  )};
`

function removeTrailingSlash (str) {
  return str.replace(/^\/|\/$/g, '')
}

const Navigation = () => {
  const { pathname } = useLocation()

  const path = removeTrailingSlash(pathname)

  return (
    <nav className={clsx(
      'space-x-8 xl:space-x-16'
    )}>
      <AnchorLink onClick={() => useScrollToTop({ isSmooth: false })} isActive={path === ''} to="/">Home</AnchorLink>
      <AnchorLink onClick={() => useScrollToTop({ isSmooth: false })} isActive={path === 'features'} to="/features">Features</AnchorLink>
      <AnchorLink onClick={() => useScrollToTop({ isSmooth: false })} isActive={path === 'pricing'} to="/pricing">Pricing</AnchorLink>
      <AnchorLink onClick={() => useScrollToTop({ isSmooth: false })} isActive={path === 'blog'} to="/blog">Blog</AnchorLink>
      <AnchorLink onClick={() => useScrollToTop({ isSmooth: false })} isActive={path === 'faq'} to="/faq">FAQ</AnchorLink>
    </nav>
  )
}

export default Navigation
