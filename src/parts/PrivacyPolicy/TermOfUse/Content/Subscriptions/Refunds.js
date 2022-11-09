import React from 'react'

import Subtitle from '../../components/Subtitle'
import Description from '../../components/Description'

const Refunds = () => {
  return (
    <div className="space-y-2">
      <Subtitle>Refunds</Subtitle>
      <Description>
        {`Except when required by law, paid Subscription fees are non-refundable.

        Certain refund requests for Subscriptions may be considered by the Company on a case-by-case basis and granted at the sole discretion of the Company.`}
      </Description>
    </div>
  )
}

export default Refunds
