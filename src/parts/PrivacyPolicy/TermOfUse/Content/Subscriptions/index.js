import React from 'react'

import SubscriptionPeriod from './SubscriptionPeriod'
import SubscriptionCancellations from './SubscriptionCancellations'

import Title from '../../components/Title'
import Billing from './Billing'
import FeeChanges from './FeeChanges'
import Refunds from './Refunds'
import FreeTrial from './FreeTrial'

const Subscriptions = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <Title>Subscriptions</Title>
      <SubscriptionPeriod/>
      <SubscriptionCancellations/>
      <Billing/>
      <FeeChanges/>
      <Refunds/>
      <FreeTrial/>
    </div>
  )
}

export default Subscriptions
