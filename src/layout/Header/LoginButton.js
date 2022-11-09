import clsx from 'clsx'
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router'

import { Button } from 'components/common'

import { HubspotContext } from 'context/HubspotContext'
import useScrollToTop from 'utils/useScrollToTop'

const LoginButton = ({ className }) => {
  const navigate = useNavigate()
  const { removeHandler } = useContext(HubspotContext)

  return (
    <Button
      className={clsx(
        'lg:w-[131px]',
        'h-[44px]',
        'bg-transparent border border-black/[0.08] dark:border-white/20 text-black dark:text-white',
        className
      )}
      onClick={() => {
        removeHandler()
        document.body.style.overflow = 'scroll'
        navigate('/auth/login')
        useScrollToTop({ isSmooth: false })
      }}
    >Log In</Button>
  )
}

LoginButton.propTypes = {
  className: PropTypes.string
}

export default LoginButton
