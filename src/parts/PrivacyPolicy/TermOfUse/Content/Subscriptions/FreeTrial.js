import React from 'react'

import Subtitle from '../../components/Subtitle'
import Description from '../../components/Description'

const FreeTrial = () => {
  return (
    <div className="space-y-2">
      <Subtitle>Free Trial</Subtitle>
      <Description>
        {`The Company may, at its sole discretion, offer a Subscription with a Free Trial for a limited period of time.
        You may be required to enter Your billing information in order to sign up for the Free Trial.

        If You do enter Your billing information when signing up for a Free Trial, You will not be charged by the Company until the Free Trial has expired. On the last day of the Free Trial period, unless You cancelled Your Subscription, You will be automatically charged the applicable Subscription fees for the type of Subscription You have selected.

        At any time and without notice, the Company reserves the right to (i) modify the terms and conditions of the Free Trial offer, or (ii) cancel such Free Trial offer.`}
      </Description>
    </div>
  )
}

export default FreeTrial
