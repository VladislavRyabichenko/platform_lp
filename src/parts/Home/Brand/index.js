import React, { useRef, useContext } from 'react'

import { BrandAnimation } from 'animation'

import { ThemeContext } from 'context/ThemeContext'

const Brand = () => {
  const containerRef = useRef()
  BrandAnimation(containerRef)

  const { theme } = useContext(ThemeContext)

  return (
    <div className="mt-11 mb-10 tablet:my-20 max-w-full">
      <p className="block tablet:hidden text-m-reguler text-black/60 dark:text-white/[0.56] text-center mb-2">
        We Featured on popular Partners like
      </p>

      <div
        id="container-brand-image"
        ref={containerRef}
        className="grid grid-cols-[2205px_2205px_2205px] gap-x-10"
      >
        <div className="brand-content-img flex items-center space-x-10" >
          <img className="w-[152px]" src={require(`assets/img/home/brand/${theme}/DasTrader.png`)}/>
          <img className="w-[140px]" src={require(`assets/img/home/brand/${theme}/ETrade1.png`)}/>
          <img className="w-[110px]" src={require(`assets/img/home/brand/${theme}/fidelity.png`)}/>
          <img className="w-[165px]" src={require(`assets/img/home/brand/${theme}/InteractiveBrokers.png`)}/>
          <img className="w-[125px]" src={require(`assets/img/home/brand/${theme}/MetaTrader.png`)}/>
          <img className="w-[114px]" src={require(`assets/img/home/brand/${theme}/robinhood.png`)}/>
          <img className="w-[121px]" src={require(`assets/img/home/brand/${theme}/ameritrade.png`)}/>
          <img className="w-[125px]" src={require(`assets/img/home/brand/${theme}/thinkorswim.png`)}/>
          <img className="w-[160px]" src={require(`assets/img/home/brand/${theme}/trade-station.png`)}/>
          <img className="w-[55px]" src={require(`assets/img/home/brand/${theme}/trade-zero.png`)}/>
          <img className="w-[92px]" src={require(`assets/img/home/brand/${theme}/webull.png`)}/>
          <img className="w-[143px]" src={require(`assets/img/home/brand/${theme}/jp-morgan-chase.png`)}/>
          <img className="w-[81px]" src={require(`assets/img/home/brand/${theme}/cobra-trading.png`)}/>
          <img className="w-[90px]" src={require(`assets/img/home/brand/${theme}/E*trade.png`)}/>
        </div>

        <div className="brand-content-img flex items-center space-x-10" >
          <img className="w-[152px]" src={require(`assets/img/home/brand/${theme}/DasTrader.png`)}/>
          <img className="w-[140px]" src={require(`assets/img/home/brand/${theme}/ETrade1.png`)}/>
          <img className="w-[110px]" src={require(`assets/img/home/brand/${theme}/fidelity.png`)}/>
          <img className="w-[165px]" src={require(`assets/img/home/brand/${theme}/InteractiveBrokers.png`)}/>
          <img className="w-[125px]" src={require(`assets/img/home/brand/${theme}/MetaTrader.png`)}/>
          <img className="w-[114px]" src={require(`assets/img/home/brand/${theme}/robinhood.png`)}/>
          <img className="w-[121px]" src={require(`assets/img/home/brand/${theme}/ameritrade.png`)}/>
          <img className="w-[125px]" src={require(`assets/img/home/brand/${theme}/thinkorswim.png`)}/>
          <img className="w-[160px]" src={require(`assets/img/home/brand/${theme}/trade-station.png`)}/>
          <img className="w-[55px]" src={require(`assets/img/home/brand/${theme}/trade-zero.png`)}/>
          <img className="w-[92px]" src={require(`assets/img/home/brand/${theme}/webull.png`)}/>
          <img className="w-[143px]" src={require(`assets/img/home/brand/${theme}/jp-morgan-chase.png`)}/>
          <img className="w-[81px]" src={require(`assets/img/home/brand/${theme}/cobra-trading.png`)}/>
          <img className="w-[90px]" src={require(`assets/img/home/brand/${theme}/E*trade.png`)}/>
        </div>

        <div className="brand-content-img flex items-center space-x-10" >
          <img className="w-[152px]" src={require(`assets/img/home/brand/${theme}/DasTrader.png`)}/>
          <img className="w-[140px]" src={require(`assets/img/home/brand/${theme}/ETrade1.png`)}/>
          <img className="w-[110px]" src={require(`assets/img/home/brand/${theme}/fidelity.png`)}/>
          <img className="w-[165px]" src={require(`assets/img/home/brand/${theme}/InteractiveBrokers.png`)}/>
          <img className="w-[125px]" src={require(`assets/img/home/brand/${theme}/MetaTrader.png`)}/>
          <img className="w-[114px]" src={require(`assets/img/home/brand/${theme}/robinhood.png`)}/>
          <img className="w-[121px]" src={require(`assets/img/home/brand/${theme}/ameritrade.png`)}/>
          <img className="w-[125px]" src={require(`assets/img/home/brand/${theme}/thinkorswim.png`)}/>
          <img className="w-[160px]" src={require(`assets/img/home/brand/${theme}/trade-station.png`)}/>
          <img className="w-[55px]" src={require(`assets/img/home/brand/${theme}/trade-zero.png`)}/>
          <img className="w-[92px]" src={require(`assets/img/home/brand/${theme}/webull.png`)}/>
          <img className="w-[143px]" src={require(`assets/img/home/brand/${theme}/jp-morgan-chase.png`)}/>
          <img className="w-[81px]" src={require(`assets/img/home/brand/${theme}/cobra-trading.png`)}/>
          <img className="w-[90px]" src={require(`assets/img/home/brand/${theme}/E*trade.png`)}/>
        </div>
      </div>
    </div>
  )
}

export default Brand
