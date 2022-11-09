import React from 'react'
import PropTypes from 'prop-types'

import ChecklistIcon from 'assets/icon/ChecklistIcon'
import CloseIcon from 'assets/icon/CloseIcon'

const CompareItem = ({ name, isPro, isAllIncluded, isAllFeatures, IsOnlyOneAccount }) => {
  return (
    <div className="p-4 bg-black/[0.02] dark:bg-white/[0.06] rounded-lg">
      <p className="text-m-medium text-black dark:text-white mb-4">{name}</p>

      <div className="flex justify-between border-t border-t-white/[0.1] pt-4">
        <TypeItem title="Pro" fillColor="#F2B007" isChecklist={isPro} IsOnlyOneAccount={IsOnlyOneAccount} />
        <TypeItem title="Premium" fillColor="#5AC994" isChecklist={isAllIncluded} />
        <TypeItem title="Premium+" fillColor="#2160DC" isChecklist={isAllFeatures} />
      </div>
    </div>
  )
}

const TypeItem = ({ name, title, fillColor, isChecklist, IsOnlyOneAccount }) => {
  return (
    <div className="relative w-20">
      <p className="text-s-bold text-center text-black dark:text-white mb-2">{title}</p>
      {isChecklist
        ? (
          <>
            <ChecklistIcon fill={fillColor}/>
            {IsOnlyOneAccount && (
              <p className="caption-xs lg:text-m-reguler text-black/60 dark:text-white/[0.56] whitespace-nowrap left-[100%] lg:left-[75%] text-center mt-2">(1  account only)</p>
            )}
          </>
        )
        : (
          <CloseIcon className="fill-black/[0.02] dark:fill-white/[0.06]" />
        )
      }
    </div>
  )
}

CompareItem.propTypes = {
  name: PropTypes.string,
  isPro: PropTypes.bool,
  isAllIncluded: PropTypes.bool,
  isAllFeatures: PropTypes.bool,
  IsOnlyOneAccount: PropTypes.bool
}

TypeItem.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  fillColor: PropTypes.string,
  isChecklist: PropTypes.bool,
  IsOnlyOneAccount: PropTypes.bool
}

export default CompareItem
