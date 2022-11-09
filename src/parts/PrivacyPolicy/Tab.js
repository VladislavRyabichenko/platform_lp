import { useParams } from 'react-router'
import React, { useEffect, useState } from 'react'

import TabContent from './TabContent'
import TabPrivacy from './TabPrivacy'

const Tab = () => {
  const { type } = useParams()
  const [tabActive, setTabActive] = useState('')

  useEffect(() => {
    setTabActive(type)
  }, [type])

  const handleSetIsActive = (value) => {
    return setTabActive(value)
  }

  return (
    <>
      <TabPrivacy tabActive={tabActive} handleSetIsActive={handleSetIsActive} />
      <TabContent tabActive={tabActive}/>
    </>
  )
}

export default Tab
