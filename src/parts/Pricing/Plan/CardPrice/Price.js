import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Price = ({ id, title, price }) => {
  const prices = price.split('.')

  return (
    <div className="mt-2 flex gap-x-1">
      <h2 className={clsx(
        'h2-bold dark:text-white',
        id === 'premium-plus' ? 'text-white' : 'text-black'
      )}>
        {prices[0]}
      </h2>
      <p className={clsx(
        'text-s-reguler dark:text-white mt-2',
        id === 'premium-plus' ? 'mb-2 text-white' : 'text-black'
      )}>
              .{prices[1]}
        { id === 'premium-plus' && ' / Month'}
      </p>
    </div>
  )
}

Price.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string
}

export default Price
