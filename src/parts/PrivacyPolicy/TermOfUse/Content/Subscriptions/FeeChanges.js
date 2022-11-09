import React from 'react'

import Subtitle from '../../components/Subtitle'
import Description from '../../components/Description'

const FeeChanges = () => {
  return (
    <div className="space-y-2">
      <Subtitle>Fee Changes</Subtitle>
      <Description>
        {`The Company, in its sole discretion and at any time, may modify the Subscription fees. Any Subscription fee change will become effective at the end of the then-current Subscription period.

        The Company will provide You with reasonable prior notice of any change in Subscription fees to give You an opportunity to terminate Your Subscription before such change becomes effective.

        Your continued use of the Service after the Subscription fee change comes into effect constitutes Your agreement to pay the modified Subscription fee amount.`}
      </Description>
    </div>
  )
}

export default FeeChanges
