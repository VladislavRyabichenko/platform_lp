import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

import FailedIcon from 'assets/icon/verify-failed.svg'

import { Button } from 'components/common'

const Form = () => {
  return (
    <section
      className={clsx(
        'bg-white/[0.56] dark:bg-white/[0.06] rounded-2xl',
        'py-8 px-4 md:p-8',
        'mt-10 md:mt-[168px] lg:mt-[206px]'
      )}
      style={{
        boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div>
        <div className="bg-[#F64786] w-fit px-4 py-2 rounded-t-2xl rounded-r-2xl m-auto left-0 right-0">
          <img className="w-4 h-4" src={FailedIcon} alt=""/>
        </div>
        <div className="mt-6">
          <h3 className="h4-bold md:h3-bold text-black dark:text-white text-center">Verification Failed</h3>
          <p className="text-s-reguler md:text-m-reguler text-black/60 dark:text-white/[0.8] text-center mt-3">
            Your email verification failed. Please try again.
          </p>
        </div>

        <Button className="w-full h-12 bg-primary-500 text-s-bold mt-6 text-white">Resend Code</Button>
        <Link to="/auth/login" className="flex items-center gap-x-2 m-auto left-0 right-0 mt-6 w-fit h-fit">
          <div>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="stroke-black/[0.88] dark:stroke-white/80" d="M16.3346 9.99984H4.66797M4.66797 9.99984L10.5013 15.8332M4.66797 9.99984L10.5013 4.1665" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-s-medium text-black/[0.88] dark:text-white/80">Back to Sign In</p>
        </Link>
      </div>

    </section>
  )
}

export default Form
