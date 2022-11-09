import clsx from 'clsx'
import React, { useRef, useContext } from 'react'

import { BrandAnimation } from 'animation'

import { ThemeContext } from 'context/ThemeContext'

const Partner = () => {
  const containerRef = useRef()
  BrandAnimation(containerRef)

  const { theme } = useContext(ThemeContext)

  return (
    <section className={clsx(
      'bg-black/[0.02] dark:bg-white/[0.06]',
      'px-6 md:px-0',
      'pt-10 md:pt-16',
      'pb-10 md:pb-16 xl:pb-14'
    )}>
      <p className="mb-4 text-m-reguler text-black/60 dark:text-white/[0.56] text-center">We have partnered with the most recognized Stock Brokers</p>

      <div className={clsx(
        'flex md:hidden items-center gap-6 flex-wrap justify-center'
      )}>
        <img className="w-[152px]" src={require(`assets/svg/brand/${theme}/DasTrader.png`)}/>
        <img className="w-[140px]" src={require(`assets/svg/brand/${theme}/ETrade1.png`)}/>
        <img className="w-[110px]" src={require(`assets/svg/brand/${theme}/fidelity.png`)}/>
        <img className="w-[165px]" src={require(`assets/svg/brand/${theme}/InteractiveBrokers.png`)}/>
        <img className="w-[125px]" src={require(`assets/svg/brand/${theme}/MetaTrader.png`)}/>
        <img className="w-[114px]" src={require(`assets/svg/brand/${theme}/robinhood.png`)}/>
        <img className="w-[121px]" src={require(`assets/svg/brand/${theme}/ameritrade.png`)}/>
        <img className="w-[125px]" src={require(`assets/svg/brand/${theme}/thinkorswim.png`)}/>
        <img className="w-[160px]" src={require(`assets/svg/brand/${theme}/trade-station.png`)}/>
        <img className="w-[55px]" src={require(`assets/svg/brand/${theme}/trade-zero.png`)}/>
        <img className="w-[92px]" src={require(`assets/svg/brand/${theme}/webull.png`)}/>
        <img className="w-[143px]" src={require(`assets/svg/brand/${theme}/jp-morgan-chase.png`)}/>
        <img className="w-[81px]" src={require(`assets/svg/brand/${theme}/cobra-trading.png`)}/>
        <img className="w-[90px]" src={require(`assets/svg/brand/${theme}/E*trade.png`)}/>
      </div>

      <div
        ref={containerRef}
        className="hidden md:grid grid-cols-[2205px_2205px_2205px] gap-x-10"
      >
        <div className={clsx(
          'brand-content-img',
          'flex items-center space-x-10'
        )}>
          <img className="w-[152px]" src={require(`assets/svg/brand/${theme}/DasTrader.png`)}/>
          <img className="w-[140px]" src={require(`assets/svg/brand/${theme}/ETrade1.png`)}/>
          <img className="w-[110px]" src={require(`assets/svg/brand/${theme}/fidelity.png`)}/>
          <img className="w-[165px]" src={require(`assets/svg/brand/${theme}/InteractiveBrokers.png`)}/>
          <img className="w-[125px]" src={require(`assets/svg/brand/${theme}/MetaTrader.png`)}/>
          <img className="w-[114px]" src={require(`assets/svg/brand/${theme}/robinhood.png`)}/>
          <img className="w-[121px]" src={require(`assets/svg/brand/${theme}/ameritrade.png`)}/>
          <img className="w-[125px]" src={require(`assets/svg/brand/${theme}/thinkorswim.png`)}/>
          <img className="w-[160px]" src={require(`assets/svg/brand/${theme}/trade-station.png`)}/>
          <img className="w-[55px]" src={require(`assets/svg/brand/${theme}/trade-zero.png`)}/>
          <img className="w-[92px]" src={require(`assets/svg/brand/${theme}/webull.png`)}/>
          <img className="w-[143px]" src={require(`assets/svg/brand/${theme}/jp-morgan-chase.png`)}/>
          <img className="w-[81px]" src={require(`assets/svg/brand/${theme}/cobra-trading.png`)}/>
          <img className="w-[90px]" src={require(`assets/svg/brand/${theme}/E*trade.png`)}/>
        </div>
        <div className={clsx(
          'brand-content-img',
          'flex items-center space-x-10'
        )}>
          <img className="w-[152px]" src={require(`assets/svg/brand/${theme}/DasTrader.png`)}/>
          <img className="w-[140px]" src={require(`assets/svg/brand/${theme}/ETrade1.png`)}/>
          <img className="w-[110px]" src={require(`assets/svg/brand/${theme}/fidelity.png`)}/>
          <img className="w-[165px]" src={require(`assets/svg/brand/${theme}/InteractiveBrokers.png`)}/>
          <img className="w-[125px]" src={require(`assets/svg/brand/${theme}/MetaTrader.png`)}/>
          <img className="w-[114px]" src={require(`assets/svg/brand/${theme}/robinhood.png`)}/>
          <img className="w-[121px]" src={require(`assets/svg/brand/${theme}/ameritrade.png`)}/>
          <img className="w-[125px]" src={require(`assets/svg/brand/${theme}/thinkorswim.png`)}/>
          <img className="w-[160px]" src={require(`assets/svg/brand/${theme}/trade-station.png`)}/>
          <img className="w-[55px]" src={require(`assets/svg/brand/${theme}/trade-zero.png`)}/>
          <img className="w-[92px]" src={require(`assets/svg/brand/${theme}/webull.png`)}/>
          <img className="w-[143px]" src={require(`assets/svg/brand/${theme}/jp-morgan-chase.png`)}/>
          <img className="w-[81px]" src={require(`assets/svg/brand/${theme}/cobra-trading.png`)}/>
          <img className="w-[90px]" src={require(`assets/svg/brand/${theme}/E*trade.png`)}/>
        </div>
        <div className={clsx(
          'brand-content-img',
          'flex items-center space-x-10'
        )}>
          <img className="w-[152px]" src={require(`assets/svg/brand/${theme}/DasTrader.png`)}/>
          <img className="w-[140px]" src={require(`assets/svg/brand/${theme}/ETrade1.png`)}/>
          <img className="w-[110px]" src={require(`assets/svg/brand/${theme}/fidelity.png`)}/>
          <img className="w-[165px]" src={require(`assets/svg/brand/${theme}/InteractiveBrokers.png`)}/>
          <img className="w-[125px]" src={require(`assets/svg/brand/${theme}/MetaTrader.png`)}/>
          <img className="w-[114px]" src={require(`assets/svg/brand/${theme}/robinhood.png`)}/>
          <img className="w-[121px]" src={require(`assets/svg/brand/${theme}/ameritrade.png`)}/>
          <img className="w-[125px]" src={require(`assets/svg/brand/${theme}/thinkorswim.png`)}/>
          <img className="w-[160px]" src={require(`assets/svg/brand/${theme}/trade-station.png`)}/>
          <img className="w-[55px]" src={require(`assets/svg/brand/${theme}/trade-zero.png`)}/>
          <img className="w-[92px]" src={require(`assets/svg/brand/${theme}/webull.png`)}/>
          <img className="w-[143px]" src={require(`assets/svg/brand/${theme}/jp-morgan-chase.png`)}/>
          <img className="w-[81px]" src={require(`assets/svg/brand/${theme}/cobra-trading.png`)}/>
          <img className="w-[90px]" src={require(`assets/svg/brand/${theme}/E*trade.png`)}/>
        </div>
      </div>
    </section>
  )
}

export default Partner
