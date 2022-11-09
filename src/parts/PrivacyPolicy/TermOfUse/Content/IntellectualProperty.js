import React from 'react'
import Description from '../components/Description'
import Title from '../components/Title'

const IntellectualProperty = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <Title>Intellectual Property</Title>
      <Description>
        {`The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors.

        The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries.
        Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.`}
      </Description>
    </div>
  )
}

export default IntellectualProperty
