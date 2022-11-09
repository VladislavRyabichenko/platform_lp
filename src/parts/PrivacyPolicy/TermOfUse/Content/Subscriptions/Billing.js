import React from 'react'

import Subtitle from '../../components/Subtitle'
import Description from '../../components/Description'

const Billing = () => {
  return (
    <div className="space-y-2">
      <Subtitle>Billing</Subtitle>
      <Description>
        {`You shall provide the Company with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information.

        Should automatic billing fail to occur for any reason, the Company will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.`}
      </Description>
    </div>
  )
}

export default Billing
