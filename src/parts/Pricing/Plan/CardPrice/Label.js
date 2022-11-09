import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ id, label, bgLabel, title }) => {
  return (
    <div className={clsx(
      `${bgLabel} py-1 px-3 rounded-t-[10px] rounded-r-[10px]`,
      id === 'premium-plus' && 'md:w-[137px] xl:w-full'
    )}>
      <p className={clsx(
        'leading-4 tracking-[0.2px] text-white',
        id === 'premium-plus' ? 'text-[11px] font-normal' : 'text-[11px] xl:text-[12px] font-medium'
      )}>{label}</p>
    </div>
  )
}

Label.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  bgLabel: PropTypes.string
}

export default Label
