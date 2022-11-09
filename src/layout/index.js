import { Outlet } from 'react-router'
import React, { useState } from 'react'

import Footer from './Footer'
import Header from './Header'

import {
  Feedback,
  TrialExpired
} from 'components/Modal'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header/>

      <Outlet/>
      <Footer setIsOpenFeedBack={setIsOpen} />
      <Feedback isOpen={isOpen} setIsOpen={setIsOpen}/>
      <TrialExpired/>
    </>
  )
}

export default Layout
