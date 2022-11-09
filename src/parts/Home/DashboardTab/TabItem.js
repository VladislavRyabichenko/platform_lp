import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components/common'

const TabItem = ({ isActive, onClick, className, title, description, logo, variants, custom }) => {
  return (
    <Button
      custom={custom}
      variants={variants}
      onClick={onClick}
      className={clsx(
        '!w-full !h-full gap-x-[11px] rounded-none',
        'md:max-w-[224px] lg:min-w-[321px]',
        'border-b sm:border-b-1',
        'hover:border-b sm:hover:border-b-1',
        'hover:border-b-[#060721] dark:hover:border-b-white',
        'pb-4 sm:pb-[22px]',
        '!justify-start',
        isActive ? 'border-b-[#060721] dark:border-b-white' : 'border-b-transparent',
        className
      )}
    >
      <div>
        {logo}
      </div>
      <div>
        <p className={clsx(
          'font-bold text-xs leading-4 tracking-[0.2px] text-left',
          isActive ? 'text-[#060721] dark:text-white' : 'text-[#060721C2]/[0.76] dark:text-white/80'
        )}>{title}</p>
        <p className="font-normal text-[12px] md:text-[11px] leading-[14px] tracking-[0.2px] text-[#060721]/60 dark:text-white/[0.56] text-left">
          {description}
        </p>
      </div>
    </Button>
  )
}

TabItem.propTypes = {
  variants: PropTypes.object,
  custom: PropTypes.object,
  logo: PropTypes.node,
  title: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  className: PropTypes.string,
  description: PropTypes.string
}

export default TabItem
