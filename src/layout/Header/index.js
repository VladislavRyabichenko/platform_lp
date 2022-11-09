import clsx from 'clsx'
import React, { useRef, useState } from 'react'

import Navigation from './Navigation'

import Logo from './Logo'
import Responsive from './Responsive'
import HamburgerButton from './HamburgerButton'
import ThemeSwitchButton from './ThemeSwitchButton'

import LoginButton from './LoginButton'
import RegisterButton from './RegisterButton'
import useStyleOverflow from 'utils/useStyleOverflow'
import useCloseClickOutside from 'utils/useCloseClickOutside'
import useScrollPosition from 'utils/useScrollPositition'

const Header = () => {
  const wrapperRef = useRef(null)
  const [isOpenNavigation, setIsOpenNavigation] = useState(false)

  useCloseClickOutside(wrapperRef, setIsOpenNavigation)
  useStyleOverflow(isOpenNavigation)

  const scrollPosition = useScrollPosition()

  return (
    <header className={clsx(
      'sticky top-0 left-0 right-0',
      !isOpenNavigation && scrollPosition > 50 ? 'bg-white/[0.32] dark:bg-black/75 backdrop-blur-xl' : 'bg-white/0 dark:bg-black/0',
      'z-10',
      'flex items-center border-b justify-between',
      'h-[52px] md:h-[60px] tablet:h-[92px]',
      'px-6 md:px-10 xl:px-20',
      'border-b-[#060721]/[0.08] dark:border-b-white/20'
    )}>
      <div className="flex items-center gap-x-4 md:gap-x-6">
        <Logo/>
        <ThemeSwitchButton/>
      </div>
      <HamburgerButton onClick={() => setIsOpenNavigation(true)} />

      <div className={clsx(
        'hidden lg:flex',
        'items-center',
        'tablet:space-x-[50px] lg:space-x-[100px] xl:space-x-[139px]'
      )}>
        <Navigation/>

        <div className="flex items-center space-x-3">
          <LoginButton/>
          <RegisterButton/>
        </div>
      </div>

      {/* Tablet and Mobile */}
      <div ref={wrapperRef} className={clsx(
        'fixed lg:hidden',
        'left-0 top-0',
        'w-full',
        'transition-all duration-700 ease-in-out',
        'overflow-scroll',
        'bg-white dark:bg-black',
        'z-10',
        'shadow-sm dark:shadow-none',
        isOpenNavigation ? 'max-h-full' : 'max-h-[0px]'
      )}>
        <Responsive closeNavigation={() => setIsOpenNavigation(false)} />
      </div>
    </header>
  )
}

export default Header
