import clsx from 'clsx'
import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import * as Dark from './Dark'
import * as Light from './Light'

import { ThemeContext } from 'context/ThemeContext'

const GradientDashboardTab = ({ className }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      {theme === 'dark' && (
        <>
          <Dark.Large className={clsx(
            'hidden lg:block',
            className
          )} />
          <Dark.Medium className={clsx(
            'hidden sm:block lg:hidden',
            className
          )} />
          <Dark.Small className={clsx(
            'block sm:hidden',
            className
          )} />
        </>
      )}

      {theme === 'light' && (
        <>
          <Light.Large className={clsx(
            'hidden lg:block',
            className
          )} />
          <Light.Medium className={clsx(
            'hidden sm:block lg:hidden',
            className
          )}/>
          <Light.Small className={clsx(
            'block sm:hidden',
            className
          )}/>
        </>
      )}

    </>
  )
}

GradientDashboardTab.propTypes = {
  className: PropTypes.string
}

export default GradientDashboardTab
