import React from 'react'

import Subtitle from '../../components/Subtitle'
import Description from '../../components/Description'

const YourInformation = () => {
  return (
    <div className="space-y-2">
      <Subtitle>Your Information</Subtitle>
      <Description>
        {`If You wish to place an Order for Goods available on the Service, You may be asked to supply certain information relevant to Your Order including, without limitation, Your name, Your email, Your phone number, Your credit card number, the expiration date of Your credit card, Your billing address, and Your shipping information.

        You represent and warrant that: (i) You have the legal right to use any credit or debit card(s) or other payment method(s) in connection with any Order; and that (ii) the information You supply to us is true, correct and complete.

        By submitting such information, You grant us the right to provide the information to payment processing third parties for purposes of facilitating the completion of Your Order.`}
      </Description>
    </div>
  )
}

export default YourInformation
