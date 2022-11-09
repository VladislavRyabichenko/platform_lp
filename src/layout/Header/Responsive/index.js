import clsx from 'clsx'
import React from 'react'
import tw from 'twin.macro'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

import GroupButton from './GroupButton'
import Header from './Header'
import useScrollToTop from 'utils/useScrollToTop'

const AnchorLink = styled(Link)`
  ${tw`
    block
    text-s-medium
    hover:text-[#060721] hover:text-opacity-100
    dark:hover:text-white
  `};
  ${props => (props.isActive
    ? tw`text-[#060721] text-opacity-100 dark:text-white`
    : tw`text-[#060721] text-opacity-60 dark:text-white/[0.56]`
  )};
`

const Container = styled.div`
  ${tw`
    py-3
    md:px-6
  `};
`

function removeTrailingSlash (str) {
  return str.replace(/^\/|\/$/g, '')
}

const HeaderResponsive = ({ closeNavigation }) => {
  const { pathname } = useLocation()

  const path = removeTrailingSlash(pathname)

  return (
    <>
      <Header closeOnClick={closeNavigation}/>
      <div className={clsx(
        'px-6 md:px-10',
        'py-6 md:py-8',
        'space-y-2 md:space-y-4'
      )}>
        <Container>
          <AnchorLink
            onClick={() => {
              closeNavigation()
              useScrollToTop({ isSmooth: false })
            }} isActive={path === ''} to="/"
          >Home</AnchorLink>
        </Container>
        <Container>
          <AnchorLink
            onClick={() => {
              closeNavigation()
              useScrollToTop({ isSmooth: false })
            }} isActive={path === 'features'} to="/features"
          >Features</AnchorLink>
        </Container>
        <Container>
          <AnchorLink
            onClick={() => {
              closeNavigation()
              useScrollToTop({ isSmooth: false })
            }} isActive={path === 'pricing'} to="/pricing"
          >Pricing</AnchorLink>
        </Container>
        <Container>
          <AnchorLink
            onClick={() => {
              closeNavigation()
              useScrollToTop({ isSmooth: false })
            }} isActive={path === 'blog'} to="/blog"
          >Blog</AnchorLink>
        </Container>
        <Container>
          <AnchorLink
            onClick={() => {
              closeNavigation()
              useScrollToTop({ isSmooth: false })
            }} isActive={path === 'faq'} to="/faq"
          >FAQ</AnchorLink>
        </Container>

        <GroupButton/>
      </div>
    </>
  )
}

HeaderResponsive.propTypes = {
  closeNavigation: PropTypes.func
}

export default HeaderResponsive
