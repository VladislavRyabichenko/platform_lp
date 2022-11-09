import React from 'react'
import PropTypes from 'prop-types'

import CompareItem from './CompareItem'

const CompareGroup = ({ data }) => {
  return (
    <div className="space-y-4">
      {data.map((item, index) => {
        const { name, isPro, isAllIncluded, isAllFeatures, IsOnlyOneAccount } = item

        return (
          <CompareItem
            key={index}
            name={name}
            isPro={isPro}
            isAllIncluded={isAllIncluded}
            isAllFeatures={isAllFeatures}
            IsOnlyOneAccount={IsOnlyOneAccount}
          />
        )
      })}
    </div>
  )
}

CompareGroup.propTypes = {
  data: PropTypes.array
}

export default CompareGroup
