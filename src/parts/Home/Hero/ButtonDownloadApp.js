import clsx from 'clsx'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'

import { Button } from 'components/common'

import { ThemeContext } from 'context/ThemeContext'

const ButtonDownloadApp = () => {
  return (
    <div className={clsx(
      'flex items-center w-fit m-auto left-0 right-0 gap-x-2',
      'mt-4 sm:mt-6'
    )}>
      <AppButton className="w-[135px]" type="playstore"/>
      <AppButton className="w-[120px]" type="appstore"/>
    </div>
  )
}

const AppButton = ({ className, type }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Button className={clsx(
      className,
      'h-10'
    )}>
      {theme === 'light' && (<img src={require(`assets/img/${type}/light.png`)} alt=""/>)}
      {theme === 'dark' && (<img src={require(`assets/img/${type}/dark.png`)} alt=""/>)}
    </Button>
  )
}

AppButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string
}

export default ButtonDownloadApp
