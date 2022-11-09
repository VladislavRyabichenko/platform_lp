import clsx from 'clsx'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import DarkLogo from 'assets/logo.png'
import LightLogo from 'assets/logo-light.png'

import { HubspotContext } from 'context/HubspotContext'

const Logo = () => {
  const { loadHandler } = useContext(HubspotContext)

  return (
    <Link to="/" onClick={loadHandler}>
      <div className={clsx(
        'w-[100px] md:w-[134px]',
        'h-6 md:h-[32px]',
        'm-auto left-0 right-0'
      )}>
        <img className="dark:block hidden w-full h-full" src={DarkLogo} alt=""/>
        <img className="dark:hidden block w-full h-full" src={LightLogo} alt=""/>
      </div>
    </Link>
  )
}

export default Logo
