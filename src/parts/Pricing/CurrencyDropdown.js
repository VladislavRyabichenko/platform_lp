import clsx from 'clsx'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'

import { Button } from 'components/common'

import ArrowIcon from 'assets/icon/arrow-down.svg'

import arrCurrency from './data'
import useCloseClickOutside from 'utils/useCloseClickOutside'

import { FadeInDelay } from 'animation'

const CurrencyDropdown = () => {
  const wrapperRef = useRef(null)
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [currencySelected, setCurrencySelected] = useState('usd')

  const handleToogleOpenFilter = () => {
    return setIsOpenDropdown(!isOpenDropdown)
  }

  useCloseClickOutside(wrapperRef, setIsOpenDropdown)

  return (
    <>
      <motion.div
        ref={wrapperRef}
        custom={{ yStart: -50, duration: 0.9, delay: 0.75 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={FadeInDelay}
        className="relative w-fit m-auto left-0 right-0"
      >
        <Button className={clsx(
          'flex items-center bg-black/[0.24] dark:bg-white/[0.06] rounded-lg w-fit px-3 h-9 mt-6 text-white'
        )} onClick={handleToogleOpenFilter}>
          {arrCurrency.filter(item => item.id === currencySelected)[0].label}
          <img className={clsx(
            'transition-all duration-200',
            'transform',
            isOpenDropdown ? 'rotate-180' : 'rotate-0'
          )} src={ArrowIcon} alt=""/>
        </Button>

        <div
          className={clsx(
            'absolute right-[-12px] py-4 px-5 bg-white dark:bg-[#15162E] border border-transparent dark:border-[#2C2D43] rounded-[10px] w-[168px] h-[196px]',
            'transition-all duration-[400] ease-linear',
            'overflow-scroll',
            isOpenDropdown ? 'top-[50px] opacity-100 z-[1]' : 'top-[45px] opacity-0 z-[-1]'
          )}
        >
          <div className="">
            {arrCurrency.map((item, index) => {
              const { id, label } = item
              return (
                <Item
                  key={index}
                  id={id}
                  label={label}
                  currencySelected={currencySelected}
                  onClick={() => {
                    setCurrencySelected(id)
                    setIsOpenDropdown(false)
                  }}
                />
              )
            })}
          </div>
        </div>

      </motion.div>
    </>
  )
}

const Item = ({ id, label, currencySelected, onClick }) => {
  return (
    <div
      className={clsx(
        'cursor-pointer',
        'flex items-center justify-between',
        'border-b border-b-black/[0.08] dark:border-b-[#1F213D]',
        'py-2',
        'first:pt-0 last:pb-0',
        'last:border-b-0'
      )}
      onClick={onClick}
    >
      <label className={clsx(
        'cursor-pointer text-s-medium',
        currencySelected === id ? 'text-text-500 dark:text-[#DADADE]' : 'text-text-300 dark:text-[#8F8F9B]'
      )}>{label}</label>
      {currencySelected === id && (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect className="fill-brand-primary-main dark:fill-[#172551]" width="16" height="16" rx="8"/>
          <path className="stroke-white dark:stroke-[#2160DC]" d="M11.3307 5.5L6.7474 10.0833L4.66406 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  )
}

Item.propTypes = {
  id: PropTypes.string,
  currencySelected: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
}

export default CurrencyDropdown
