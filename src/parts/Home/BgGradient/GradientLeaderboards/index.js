import clsx from 'clsx'
import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import * as Dark from './Dark'
import * as Light from './Light'

import { ThemeContext } from 'context/ThemeContext'

const GradientLeaderboards = ({ className }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      {theme === 'dark' && (
        <>
          <Dark.Large className={clsx(
            'hidden lg:block right-0',
            className
          )} />
          <Dark.Medium className={clsx(
            'hidden sm:block lg:hidden right-0',
            className
          )} />
          <Dark.Small className={clsx(
            'block sm:hidden right-0',
            className
          )} />
        </>
      )}

      {theme === 'light' && (
        <>
          <Light.Large className={clsx(
            'hidden lg:block left-0',
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

GradientLeaderboards.propTypes = {
  className: PropTypes.string
}

export default GradientLeaderboards
