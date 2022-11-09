/* eslint-disable no-tabs */
import React from 'react'
import Description from '../components/Description'
import Title from '../components/Title'

const ContactUs = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <Title>Contact Us</Title>
      <Description>
        {`If you have any questions about these Terms and Conditions, You can contact us:
        •	By email: support@tryndx.com`}
      </Description>
    </div>
  )
}

export default ContactUs
