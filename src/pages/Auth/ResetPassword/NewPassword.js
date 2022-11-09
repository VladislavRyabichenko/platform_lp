import clsx from 'clsx'
import React from 'react'

import Form from 'parts/Auth/ResetPassword/NewPassword'
import { Logo, BackgroundGradient } from 'parts/Auth'

const NewPassword = () => {
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
          <h3 className="h4-bold md:h3-bold text-black dark:text-white text-center">Set New Password</h3>
          <p className="text-s-reguler md:text-m-reguler text-black/60 dark:text-white/[0.8] mt-3 text-center max-w-[85%] m-auto left-0 right-0">
            Your new password must be different from previously used password.
          </p>
        </div>

        <Form/>
      </div>
    </>
  )
}

export default NewPassword
