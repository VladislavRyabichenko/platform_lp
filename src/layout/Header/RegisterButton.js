import clsx from 'clsx'
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router'

import { Button } from 'components/common'

import SignUpIcon from 'assets/icon/SignUp'

import { HubspotContext } from 'context/HubspotContext'
import useScrollToTop from 'utils/useScrollToTop'

const RegisterButton = ({ className }) => {
  const navigate = useNavigate()
  const { removeHandler } = useContext(HubspotContext)

  return (
    <Button
      className={clsx(
        'lg:w-[131px]',
        'h-[44px]',
        'bg-primary-500',
        'text-white',
        className
      )}
      onClick={() => {
        removeHandler()
        document.body.style.overflow = 'scroll'
        navigate('/auth/sign-up')
        useScrollToTop({ isSmooth: false })
      }}
    >
        Sign Up
      <SignUpIcon/>
    </Button>
  )
}

RegisterButton.propTypes = {
  className: PropTypes.string
}

export default RegisterButton
