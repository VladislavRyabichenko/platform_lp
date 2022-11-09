import clsx from 'clsx'
import React from 'react'
import { useNavigate } from 'react-router'

import MailIcon from './icon.svg'

import { Button } from 'components/common'
import { Link } from 'react-router-dom'

import useScrollToTop from 'utils/useScrollToTop'

const Form = () => {
  const navigate = useNavigate()

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
          <img className="w-4 h-4" src={MailIcon} alt=""/>
        </div>
        <div className="mt-6">
          <h3 className="h4-bold md:h3-bold text-black dark:text-white text-center">Verify your Email</h3>
          <p className="text-s-reguler md:text-m-reguler text-black/60 dark:text-white/[0.8] text-center mt-3">
            Thank you, check your email for instructions to reset your password
          </p>
        </div>

        <div className="mt-6">
          <Button className="w-full h-12 bg-primary-500 text-s-bold text-white">Go to Email</Button>
          <Button
            onClick={() => {
              navigate('/auth/login')
              useScrollToTop({ isSmooth: false })
            }}
            className="w-full h-12 border border-black/[0.08] dark:border-white/20 text-s-bold mt-6 text-black dark:text-white"
          >Skip</Button>
        </div>

        <p className="text-s-reguler text-black/60 dark:text-white/[0.56] text-center mt-6">Don’t receive an email? <Link className="text-s-bold text-primary-500" to="">Resend</Link></p>
      </div>

    </section>
  )
}

export default Form
