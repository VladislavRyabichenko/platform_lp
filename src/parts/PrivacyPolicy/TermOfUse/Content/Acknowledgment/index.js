import React from 'react'

import Title from '../../components/Title'
import Description from '../../components/Description'

import Availability from './Availability'
import YourInformation from './YourInformation'
import Prices from './Prices'
import Payments from './Payments'

const Acknowledgment = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <Title>Acknowledgment</Title>
      <Description>
        {`These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.

        Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
        By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.

        You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
        Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.`}
      </Description>

      <YourInformation/>
      <Availability/>
      <Prices/>
      <Payments/>
    </div>
  )
}

export default Acknowledgment
