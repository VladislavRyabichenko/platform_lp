import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

import SuccessIcon from 'assets/icon/reset-success.svg'

import { Button } from 'components/common'

const Form = () => {
  return (
    <section
      className={clsx(
        'bg-white/[0.56] dark:bg-white/[0.06] rounded-2xl',
        'py-8 px-4 md:p-8',
        'mt-10 md:mt-[168px] lg:mt-[204px]'
      )}
      style={{
        boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div>
        <div className="bg-[#74CEB9] w-fit px-4 py-2 rounded-t-2xl rounded-r-2xl m-auto left-0 right-0">
          <img className="w-4 h-4" src={SuccessIcon} alt=""/>
        </div>
        <div className="mt-6">
          <h3 className="h4-bold md:h3-bold text-black dark:text-white text-center">Password Reset</h3>
          <p className="text-s-reguler md:text-m-reguler text-black/60 dark:text-white/[0.8] text-center mt-3 whitespace-pre-line">
            {`Your password has been successfully reset.
            Click below to log in.`}
          </p>
        </div>

        <div className="mt-6 w-full md:w-fit m-auto left-0 right-0">
          <Button className="w-full md:w-[342px] h-12 bg-primary-500 text-s-bold text-white">Continue</Button>
          <div className="mt-6">
            <Link to="/auth/login">
              <Button className="w-full md:w-[342px] h-12 text-black dark:text-white">
                Back to Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Form
