import React from 'react'

import Definitions from './Definitions'
import Interpretaion from './Interpretation'

import Title from '../../components/Title'

const InterpretationDefinition = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <Title>Interpretation and Definitions</Title>
      <Interpretaion/>
      <Definitions/>
    </div>
  )
}

export default InterpretationDefinition
