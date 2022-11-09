import React, { useContext } from 'react'

import Monthly from './Monthly'
import Yearly from './Yearly'

import { ExpiredContext } from 'context/Modal/ExpiredContext'

const TabContent = () => {
  const { tabActive } = useContext(ExpiredContext)

  return (
    <div className="mt-6">
      <Monthly isActive={tabActive === 'monthly'} />
      <Yearly isActive={tabActive === 'yearly'} />
    </div>
  )
}

export default TabContent
