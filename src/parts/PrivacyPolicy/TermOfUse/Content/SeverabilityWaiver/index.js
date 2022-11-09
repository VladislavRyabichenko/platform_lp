import React from 'react'

import Waiver from './Waiver'
import Severability from './Severability'

import Title from '../../components/Title'

const SeverabilityWaiver = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <Title>Severability and Waiver</Title>
      <Severability/>
      <Waiver/>
    </div>
  )
}

export default SeverabilityWaiver
