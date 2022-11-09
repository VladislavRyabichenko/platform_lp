import clsx from 'clsx'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import SuccessIcon from 'assets/icon/reset-success.svg'

import { Button } from 'components/common'

import InputSearch from './InputSearch'
import BrokerItem from './BrokerItem'

import useScrollToTop from 'utils/useScrollToTop'

const Form = () => {
  const navigate = useNavigate()

  const [isShowAll, setIsShowAll] = useState(false)

  const handleToogleShowAll = () => {
    return setIsShowAll(!isShowAll)
  }

  return (
    <section
      className={clsx(
        'bg-white/[0.56] dark:bg-white/[0.06] rounded-2xl',
        'py-8 px-4 md:p-8',
        'mt-10 md:mt-[100px] lg:mt-[100px]'
      )}
      style={{
        boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div className="space-y-6">
        <div className="bg-[#74CEB9] w-fit px-4 py-2 rounded-t-2xl rounded-r-2xl m-auto left-0 right-0">
          <img className="w-4 h-4" src={SuccessIcon} alt=""/>
        </div>
        <div className="">
          <h3 className="h4-bold md:h3-bold text-black dark:text-white text-center">Find your broker</h3>
          <p className="text-s-reguler md:text-m-reguler text-black/60 dark:text-white/[0.8] text-center mt-3">
            Connect with broker and get your account verified.
          </p>
        </div>

        <InputSearch/>

        <div>
          <p className="text-s-medium text-black dark:text-white">Recommendation brokers</p>

          <div className="mt-4 space-y-8 lg:space-y-4">
            <BrokerItem id="cloudquant" name="CloudQuant"/>
            <BrokerItem id="fxcm" name="FXCM"/>
            <BrokerItem id="redi-plus" name="REDIPlus"/>
          </div>
        </div>

        <div className="border-b border-b-black/[0.08] dark:border-b-[#2C2D43]">
          <p className="text-s-medium text-black dark:text-white">Broker List</p>

          <div className={clsx(
            isShowAll ? 'max-h-[414px] lg:max-h-[350px]' : 'max-h-[128px] lg:max-h-[112px]',
            'mt-4 overflow-hidden',
            'space-y-8 lg:space-y-4',
            'transition-all duration-200'
          )}>
            <BrokerItem id="agen-trader" name="AgenaTrader"/>
            <BrokerItem id="ally" name="Ally"/>
            <BrokerItem id="apex-trader" name="ApexTrader"/>
            <BrokerItem id="blackwood-pro" name="Blackwood Pro"/>
            <BrokerItem id="bookmap" name="Bookmap"/>
          </div>

          <div className="flex items-center w-full h-10 my-4">
            <Button className="w-fit h-fit gap-x-3 m-auto left-0 right-0" onClick={handleToogleShowAll}>
              <p className="text-black/[0.32] dark:text-white/[0.56] text-s-medium">Show more</p>
              <svg className={clsx(
                'transform transition-all duration-150',
                isShowAll ? 'rotate-180' : 'rotate-0'
              )} width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7787 5.9668L9.43208 10.3135C8.91875 10.8268 8.07875 10.8268 7.56542 10.3135L3.21875 5.9668" stroke="#70717F" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        </div>

        <Button
          onClick={() => {
            navigate('/auth/login')
            useScrollToTop({ isSmooth: false })
          }}
          className="w-full h-12 border border-black/[0.08] dark:border-white/20 text-s-bold text-black dark:text-white"
        >Cancel</Button>
      </div>

    </section>
  )
}

export default Form
