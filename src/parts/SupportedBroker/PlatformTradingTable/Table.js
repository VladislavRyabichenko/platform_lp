import clsx from 'clsx'
import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import ChecklistIcon from 'assets/icon/ChecklistIcon'
import CloseIcon from 'assets/icon/CloseIcon'

import { ThemeContext } from 'context/ThemeContext'

const Table = ({ className, dataPlatform }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={clsx(
      'w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:bg-white/[0.06] sm:rounded-2xl',
      className
    )}>
      {/* Header */}
      <div className={clsx(
        'hidden sm:block',
        'text-m-bold text-black dark:text-white bg-black/[0.04] dark:bg-white/[0.06]',
        'px-10',
        'pt-4',
        'pb-3'
      )}>
        <div className="flex items-center justify-between">
          <div className="w-[48%]">
            <p className="text-l-bold">
              Trading Platform
            </p>
          </div>
          <div className="w-[13%]">
            <p className="text-center">
              Stocks
            </p>
          </div>
          <div className="w-[13%]">
            <p className="text-center">
              Futures
            </p>
          </div>
          <div className="w-[13%]">
            <p className="text-center">
              Forex
            </p>
          </div>
          <div className="w-[13%]">
            <p className="text-center">
              Options
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className={clsx(
        'sm:px-10',
        'sm:pt-6',
        'sm:pb-8',
        'space-y-6 sm:space-y-0',
        'sm:bg-black/[0.02] dark:bg-transparent'
      )}>
        {
          dataPlatform.map((item, index) => {
            const { id, name, isStock, isFutures, isForex, isOptions } = item
            return (
              <div key={index} className={clsx(
                'flex items-center',
                'justify-between',
                'flex-wrap sm:flex-nowrap',
                'sm:border-b sm:border-b-white/[0.1]',
                'last:border-none',
                'py-4',
                'px-4 sm:px-0',
                'sm:first:pt-0 sm:last:pb-0',
                'bg-black/[0.02] dark:bg-white/[0.06] sm:bg-transparent dark:sm:bg-transparent',
                'rounded-lg sm:rounded-none'
              )}>
                <div className="w-full sm:w-[48%] flex items-center gap-x-4">
                  <img className="w-12 h-12" src={require(`assets/logo/supported-broker/${theme}/${id}.png`)} alt=""/>
                  <p className="text-m-medium dark:text-m-reguler text-black dark:text-white whitespace-nowrap">{name}</p>
                </div>

                <svg className="w-full my-4 block sm:hidden" width="295" height="1" viewBox="0 0 295 1" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <line y1="0.5" x2="295" y2="0.5" stroke="white" strokeOpacity="0.1"/>
                </svg>

                <div className="w-fit sm:w-[13%]">
                  <div className={clsx(
                    'relative w-full flex justify-center items-center',
                    'flex-col',
                    'gap-y-2'
                  )}>
                    <p className="text-s-bold text-black dark:text-white block sm:hidden">Stocks</p>
                    {CheckPlan(isStock)}
                  </div>
                </div>
                <div className="w-fit sm:w-[13%]">
                  <div className={clsx(
                    'relative w-full flex justify-center items-center',
                    'flex-col',
                    'gap-y-2'
                  )}>
                    <p className="text-s-bold text-black dark:text-white block sm:hidden">Futures</p>
                    {CheckPlan(isFutures)}
                  </div>
                </div>
                <div className="w-fit sm:w-[13%]">
                  <div className={clsx(
                    'relative w-full flex justify-center items-center',
                    'flex-col',
                    'gap-y-2'
                  )}>
                    <p className="text-s-bold text-black dark:text-white block sm:hidden">Forex</p>
                    {CheckPlan(isForex)}
                  </div>
                </div>
                <div className="w-fit sm:w-[13%]">
                  <div className={clsx(
                    'relative w-full flex justify-center items-center',
                    'flex-col',
                    'gap-y-2'
                  )}>
                    <p className="text-s-bold text-black dark:text-white block sm:hidden">Options</p>
                    {CheckPlan(isOptions)}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const CheckPlan = (isOptions) => {
  const { theme } = useContext(ThemeContext)

  if (isOptions === undefined) {
    return <></>
  } else {
    if (isOptions) {
      return <ChecklistIcon fill={theme === 'light' ? '#3076FF' : 'white'}/>
    } else {
      return <CloseIcon className="fill-black/[0.32] dark:fill-white/[0.06]"/>
    }
  }
}

Table.propTypes = {
  className: PropTypes.string,
  dataPlatform: PropTypes.array
}

export default Table
