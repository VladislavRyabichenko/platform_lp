import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

import { Button } from 'components/common'

import Logo from './Logo'
import Label from './Label'
import Price from './Price'
import PriceLabel from './PriceLabel'

import Exports from 'assets/icon/Export'
import useScrollToTop from 'utils/useScrollToTop'

const CardPrice = ({
  id, title, label, bgLabel, logo, bgCard, price, priceLabel, variants, custom
}) => {
  const navigate = useNavigate()

  return (
    <motion.div
      custom={custom}
      variants={variants}
      className={clsx(
        'flex flex-col',
        'w-[327px] md:w-full',
        'min-h-[266px]',
        'justify-between',
        'bg-white/[0.56] dark:bg-white/[0.06] rounded-lg',
        'py-6 lg:py-8',
        'px-4 lg:px-6',
        id === 'premium-plus' && 'bg-brand-primary-dark dark:bg-brand-primary-dark',
        bgCard
      )}
    >
      <div className="flex items-center justify-between relative">
        <div>
          <div className="flex items-center gap-x-[7px] gap-y-2 flex-wrap lg:flex-nowrap">
            <p className={clsx(
              'text-l-bold dark:text-white',
              id === 'premium-plus' ? 'text-white' : 'text-black'
            )}>{title}</p>
            <Label id={id} label={label} bgLabel={bgLabel} title={title} />
          </div>
          <Price id={id} title={title} price={price} />
          <PriceLabel id={id} title={title} label={priceLabel}/>
        </div>

        <Logo url={logo} />
      </div>

      <Button
        onClick={() => {
          navigate('/auth/sign-up')
          useScrollToTop({ isSmooth: false })
        }}
        className={clsx(
          'w-full md:w-[154px]',
          'h-[44px] md:h-14',
          'border border-black/[0.24] dark:border-white/[0.2] mt-6',
          'dark:text-white',
          id === 'premium-plus' ? 'text-brand-primary-dark dark:text-brand-primary-dark bg-white dark:bg-white' : 'text-black'
        )}
      >
        <p>Free Trial</p>
        <Exports className={clsx(
          'dark:stroke-white',
          id === 'premium-plus' ? 'stroke-brand-primary-dark dark:stroke-brand-primary-dark' : 'stroke-black'
        )}/>
      </Button>
    </motion.div>
  )
}

CardPrice.propTypes = {
  id: PropTypes.string,
  bgLabel: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  logo: PropTypes.node,
  bgCard: PropTypes.string,
  price: PropTypes.number,
  priceLabel: PropTypes.string,
  variants: PropTypes.object,
  custom: PropTypes.object
}
export default CardPrice
