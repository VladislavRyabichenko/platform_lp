import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

import RememberMe from './RememberMe'
import InputGroup from './InputGroup'

import Sms from 'assets/icon/Sms'
import Lock from 'assets/icon/Lock'

import { Button } from 'components/common'

import useScrollToTop from 'utils/useScrollToTop'

const Form = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email format is invalid')
        .required('Email is a required field'),
      password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
    }),
    onSubmit: function (values) {
      navigate('/')
      useScrollToTop({ isSmooth: false })
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6" noValidate>
      <InputGroup name="email" id="email-address" icon={Sms} label="Email Address" type="email" placeholder="Email Address" value={formik.values.email} handleBlur={formik.handleBlur} onChange={formik.handleChange} isError={formik.touched.email && formik.errors.email} />
      {formik.touched.email && formik.errors.email && (
        <span className='text-danger-500 tracking-[0.2] text-xs-reguler'>{formik.errors.email}</span>
      )}

      <InputGroup name="password" id="password" icon={Lock} label="Password" type="password" placeholder="Password" value={formik.values.password} handleBlur={formik.handleBlur} onChange={formik.handleChange} isError={formik.touched.password && formik.errors.password} />
      {formik.touched.password && formik.errors.password && (
        <span className='text-danger-500 tracking-[0.2] text-xs-reguler'>{formik.errors.password}</span>
      )}

      <div className="flex justify-between items-center">
        <RememberMe/>

        <Link to="/auth/reset-password" className="text-xs-bold text-black dark:text-white tracking-[0.2]" >
          Forgot Password?
        </Link>
      </div>

      <Button
        type="submit"
        className="w-full h-12 bg-[#2160DC] text-white"
      >
        Sign In to TRYNDX
      </Button>
    </form>
  )
}

export default Form
