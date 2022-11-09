import clsx from 'clsx'
import React from 'react'

import { Link } from 'react-router-dom'

import DarkLogo from 'assets/logo.png'
import LightLogo from 'assets/logo-light.png'
import useScrollToTop from 'utils/useScrollToTop'

const Logo = () => {
  return (
    <Link to="/" onClick={() => useScrollToTop({ isSmooth: false })} className={clsx(
      'w-[100px] md:w-[134px]',
      'h-6 md:h-[32px]'
    )}>
      <img className="dark:block hidden w-full h-full" src={DarkLogo} alt=""/>
      <img className="dark:hidden block w-full h-full" src={LightLogo} alt=""/>
    </Link>
  )
}

export default Logo
