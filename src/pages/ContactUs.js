import React from 'react'

import {
  BgGradient,
  Header,
  Form
} from 'parts/ContactUs'

import DotsBackground from 'components/DotsBackground'

const ContactUs = () => {
  return (
    <>
      <DotsBackground folder="contact-us" className="absolute top-0 left-0 z-[-1] w-full h-auto"/>
      <BgGradient className="absolute m-auto top-0 right-0 left-0 z-[-1] w-full h-auto overflow-visible"/>
      <Header/>
      <Form/>
    </>
  )
}

export default ContactUs
