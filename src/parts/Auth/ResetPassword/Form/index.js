import clsx from 'clsx'
import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router'

import InputGroup from './InputGroup'

import Sms from 'assets/icon/Sms'
import { Button } from 'components/common'

import useScrollToTop from 'utils/useScrollToTop'

const Form = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email format is invalid')
        .required('Email is a required field')
    }),
    onSubmit: function (values) {
      navigate('/auth/reset-password/new')
      useScrollToTop({ isSmooth: false })
    }
  })

  return (
    <div
      className={clsx(
        'bg-white/[0.56] dark:bg-white/[0.06] rounded-2xl mt-8 space-y-6',
        'py-8 px-4 md:p-8'
      )}
      style={{
        boxShadow: '0px 4px 60px rgba(0, 0, 0, 0.04)'
      }}
    >
      <form onSubmit={formik.handleSubmit} className="space-y-6" noValidate>
        <InputGroup id="email" name="email" icon={Sms} label="Email Address" type="email" placeholder="Email Address" value={formik.values.email} handleBlur={formik.handleBlur} onChange={formik.handleChange} isError={formik.touched.email && formik.errors.email}/>
        {formik.touched.email && formik.errors.email && (
          <span className='text-danger-500 tracking-[0.2] text-xs-reguler'>{formik.errors.email}</span>
        )}

        <Button
          type="submit"
          className="w-full h-12 bg-[#2160DC] text-white"
        >
          Continue
        </Button>

        <div>
          <Button
            onClick={() => {
              navigate('/auth/login')
              useScrollToTop({ isSmooth: false })
            }}
            className="w-full h-12 text-black dark:text-white"
          >
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.3346 9.99984H4.66797M4.66797 9.99984L10.5013 15.8332M4.66797 9.99984L10.5013 4.1665" stroke="white" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <p>Back to Sign In</p>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form
