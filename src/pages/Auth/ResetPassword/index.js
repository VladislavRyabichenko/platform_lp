import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

import Form from 'parts/Auth/ResetPassword/Form'
import { Logo, BackgroundGradient } from 'parts/Auth'

const ResetPassword = () => {
  return (
    <>
      <BackgroundGradient className={clsx(
        'absolute top-0 left-0 z-[-1]',
        'max-w-[1440px]',
        'm-auto left-0 right-0',
        'overflow-visible'
      )}/>

      <div className={clsx(
        'm-auto left-0 right-0',
        'pt-10 md:pt-[72px]',
        'pb-9 md:pb-[64px]',
        'w-full md:w-[406px]',
        'max-w-[469px]',
        'px-6 md:px-0'
      )}>
        <Logo/>

        <div className="mt-10 md:mt-[156px]">
          <h3 className="h4-bold md:h3-bold text-black dark:text-white text-center">Reset Your Password</h3>
          <p className="text-s-reguler md:text-m-reguler text-black/60 dark:text-white/[0.8] mt-3 text-center">Enter the email address associated with your account and we will send you a link to reset your password.</p>
        </div>

        <Form/>

        <p className="hidden md:block text-s-reguler text-black/60 dark:text-white/[0.56] text-center mt-6">
          Don’t have an account? <Link to="/auth/sign-up" className="text-s-bold text-[#2160DC]">Sign Up</Link>
        </p>
      </div>
    </>
  )
}

export default ResetPassword
