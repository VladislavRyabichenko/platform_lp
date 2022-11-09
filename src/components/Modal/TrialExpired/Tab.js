import clsx from 'clsx'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'

import { Button } from 'components/common'

import { ExpiredContext } from 'context/Modal/ExpiredContext'

const Tab = () => {
  const { tabActive, setTabActive } = useContext(ExpiredContext)

  return (
    <div className="flex items-center justify-between mt-8">
      <ButtonItem
        isActive={tabActive === 'monthly'}
        text="Monthly" className=""
        onClick={() => setTabActive('monthly')}
      />
      <ButtonItem
        isActive={tabActive === 'yearly'}
        text="Yearly" className=""
        onClick={() => setTabActive('yearly')}
      />
    </div>
  )
}

const ButtonItem = ({ isActive, className, text, onClick }) => {
  return (
    <div className={clsx(
      'w-full border-b',
      isActive
        ? 'border-b-black dark:border-b-white'
        : 'border-b-black/[0.08] dark:border-b-white/20',
      className
    )}>
      <Button
        className="w-full h-fit text-black/60 dark:text-white/80 mb-4 md:mb-6"
        onClick={onClick}
      >
        <p className="text-m-bold md:text-l-bold">{text}</p>
      </Button>
    </div>
  )
}

ButtonItem.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string
}

export default Tab
