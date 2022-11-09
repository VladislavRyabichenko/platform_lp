import React from 'react'

import Subtitle from '../../components/Subtitle'
import Description from '../../components/Description'

const Payments = () => {
  return (
    <div className="space-y-2">
      <Subtitle>Payments</Subtitle>
      <Description>
        {`Payment can be made through various payment methods we have available, such as Visa, MasterCard, American Express cards or online payment methods (PayPal, Google Pay, Samsung Pay and Apple Pay for example).

        Payment cards (credit cards or debit cards) are subject to validation checks and authorization by Your card issuer. `}
      </Description>
    </div>
  )
}

export default Payments
