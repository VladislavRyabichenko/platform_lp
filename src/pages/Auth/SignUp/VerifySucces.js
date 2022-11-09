import clsx from 'clsx'
import React from 'react'

import Form from 'parts/Auth/SignUp/VerifySucces'
import { Logo, BackgroundGradient } from 'parts/Auth'

const VerifySucces = () => {
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
        'w-full md:w-[469px]',
        'max-w-[469px]',
        'px-6 md:px-0'
      )}>
        <Logo/>

        <Form/>
      </div>
    </>
  )
}

export default VerifySucces
