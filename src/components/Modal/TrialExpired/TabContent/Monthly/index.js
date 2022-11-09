import clsx from 'clsx'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import StartLogo from './Start'
import PremiumLogo from './Premium'

import { Button } from 'components/common'

const Monthly = ({ isActive, className }) => {
  const [plan, setPlan] = useState('pro')

  return (
    <div className={clsx(
      'space-y-4',
      isActive ? 'block' : 'hidden',
      className
    )}>
      <Item isActive={plan === 'pro'} logo={StartLogo} label="Pro" price="$19.99" onClick={() => setPlan('pro')} />
      <Item isActive={plan === 'premium'} logo={PremiumLogo} label="Premium" price="$29.99" onClick={() => setPlan('premium')} />
    </div>
  )
}

const Item = ({ isActive, logo: Logo, label, price, onClick }) => {
  return (
    <Button
      className={clsx(
        'flex items-center w-full gap-x-3 border rounded-xl h-auto',
        'py-3 md:py-5',
        'pl-3 pr-4 md:px-4',
        isActive ? 'border-brand-primary-dark' : 'border-black/[0.08] dark:border-white/20'
      )}
      onClick={onClick}
    >
      <Logo className={clsx(
        'fill-black/[0.24] dark:fill-white/10',
        'w-8 md:w-10',
        'h-8 md:h-10'
      )} />
      <div className="flex justify-between items-center w-full">
        <p className="text-l-bold md:h4-bold text-black dark:text-white">{label}</p>

        <p className="text-m-bold md:h4-bold text-black dark:text-white">
          {price} <span className="caption-s md:text-xs-reguler tracking-[0.2] text-black/60 dark:text-white/[0.56]">/ monthly</span>
        </p>
      </div>

    </Button>
  )
}

Item.propTypes = {
  isActive: PropTypes.bool,
  logo: PropTypes.node,
  label: PropTypes.string,
  price: PropTypes.string,
  onClick: PropTypes.func
}

Monthly.propTypes = {
  isActive: PropTypes.bool,
  className: PropTypes.string
}

export default Monthly
