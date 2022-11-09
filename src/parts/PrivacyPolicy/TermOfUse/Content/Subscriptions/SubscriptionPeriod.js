import React from 'react'

import Subtitle from '../../components/Subtitle'
import Description from '../../components/Description'

const SubscriptionPeriod = () => {
  return (
    <div className="space-y-2">
      <Subtitle>Subscription period</Subtitle>
      <Description>
        {`The Service or some parts of the Service are available only with a paid Subscription. You will be billed in advance on a recurring and periodic basis (such as daily, weekly, monthly or annually), depending on the type of Subscription plan you select when purchasing the Subscription.

        At the end of each period, Your Subscription will automatically renew under the exact same conditions unless You cancel it or the Company cancels it.`}
      </Description>
    </div>
  )
}

export default SubscriptionPeriod
