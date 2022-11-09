import React from 'react'
import Description from '../components/Description'
import Title from '../components/Title'

const Termination = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <Title>Termination</Title>
      <Description>
        {`We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.

        Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your Account, You may simply discontinue using the Service.`}
      </Description>
    </div>
  )
}

export default Termination
