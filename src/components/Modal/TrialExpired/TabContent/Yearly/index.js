import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'

const Yearly = ({ isActive, className }) => {
  return (
    <div className={clsx(
      isActive ? 'block' : 'hidden',
      className
    )}>
      <div className="flex flex-col items-end gap-y-3 p-3 md:p-4 border border-brand-primary-dark rounded-xl">
        <div
          className="px-3 py-1 rounded-t-[10px] rounded-r-[10px]"
          style={{
            background: 'linear-gradient(225deg, #0C5DFF 0%, #8FE8FA 100%)'
          }}
        >
          <p className="caption-xs md:caption-s text-white tracking-[0.2]">Free 2 months of subscriptions</p>
        </div>

        <div className="flex items-center w-full gap-x-3 rounded-xl">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-x-2 md:gap-x-3">
              <Icon/>
              <p className="text-l-bold md:h4-bold text-black dark:text-white">Premium+</p>
            </div>

            <p className="text-m-bold md:h4-bold text-black dark:text-white">
            16.67 <span className="caption-s md:text-xs-reguler tracking-[0.2] text-black/60 dark:text-white/[0.56]">/ monthly</span>
            </p>
          </div>
        </div>

        <p className="text-xs-reguler text-black/[0.76] dark:text-white/80">Billed Annually</p>
      </div>

    </div>
  )
}

Yearly.propTypes = {
  isActive: PropTypes.bool,
  className: PropTypes.string
}

export default Yearly
