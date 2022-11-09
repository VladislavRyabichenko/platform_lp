import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const PriceLabel = ({ id, title, label }) => {
  return id === 'premium-plus'
    ? (
      <div className="flex items-center gap-x-2 mt-2">
        <p className={clsx(
          'text-xs-reguler tracking-[0.2px]  dark:text-white/[0.8]',
          id === 'premium-plus' ? 'text-white/[0.8]' : 'text-black/60'
        )}>{label}</p>

        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2" cy="2" r="2" fill="white" fillOpacity="0.8"/>
        </svg>

        <p className={clsx(
          'text-xs-reguler tracking-[0.2px] text-black/60 dark:text-white/[0.8]',
          id === 'premium-plus' ? 'text-white/[0.8]' : 'text-black/60'
        )}>7 days trial</p>
      </div>
    )
    : (
      <p className="text-xs-reguler tracking-[0.2px] text-black/60 dark:text-white/[0.80] mt-2">{label}</p>
    )
}

PriceLabel.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string
}

export default PriceLabel
