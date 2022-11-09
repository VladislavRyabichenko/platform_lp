import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../Logo'
import CloseButton from './CloseButton'
import ThemeSwitchButton from '../ThemeSwitchButton'

const Header = ({ closeOnClick }) => {
  return (
    <div className={clsx(
      'flex items-center border-b justify-between',
      'h-[52px] md:h-[60px] tablet:h-[92px]',
      'px-6 md:px-10 xl:px-20',
      'border-b-[#060721]/[0.08] dark:border-b-white/20'
    )}>

      <div className="flex items-center gap-x-4 md:gap-x-6">
        <Logo/>

        <ThemeSwitchButton/>
      </div>

      <CloseButton onClick={closeOnClick}/>
    </div>
  )
}

Header.propTypes = {
  closeOnClick: PropTypes.func
}

export default Header
