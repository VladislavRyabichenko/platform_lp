import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router'

import Agreement from './Agreement'
import InputGroup from './InputGroup'
import { Button } from 'components/common'

import Sms from 'assets/icon/Sms'
import Profile from 'assets/icon/Profile'
import Lock from 'assets/icon/Lock'

import useScrollToTop from 'utils/useScrollToTop'

const Form = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      fullname: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email format is invalid')
        .required('Email is a required field'),
      fullname: Yup.string()
        .required('Full name is a required field'),
      password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
    }),
    onSubmit: function (values) {
      navigate('/auth/verify-email')
      useScrollToTop({ isSmooth: false })
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6" noValidate>
      <InputGroup name="email" id="email" icon={Sms} label="Email Address" type="email" placeholder="Email Address" value={formik.values.email} handleBlur={formik.handleBlur} onChange={formik.handleChange} isError={formik.touched.email && formik.errors.email}/>
      {formik.touched.email && formik.errors.email && (
        <span className='text-danger-500 tracking-[0.2] text-xs-reguler'>{formik.errors.email}</span>
      )}

      <InputGroup name="fullname" id="fullname" icon={Profile} label="Full Name" type="text" placeholder="Full name" pattern={/^[A-Za-z\s'"`,.?]*$/} value={formik.values.fullname} handleBlur={formik.handleBlur} onChange={formik.handleChange} isError={formik.touched.fullname && formik.errors.fullname} />
      {formik.touched.fullname && formik.errors.fullname && (
        <span className='text-danger-500 tracking-[0.2] text-xs-reguler'>{formik.errors.fullname}</span>
      )}

      <InputGroup name="password" id="password" icon={Lock} label="Create Password" type="password" placeholder="Password" value={formik.values.password} handleBlur={formik.handleBlur} onChange={formik.handleChange} isError={formik.touched.password && formik.errors.password}/>
      {formik.touched.password && formik.errors.password && (
        <span className='text-danger-500 tracking-[0.2] text-xs-reguler'>{formik.errors.password}</span>
      )}

      <div className="flex justify-between items-center">
        <Agreement/>
      </div>

      <div>
        <Button type="submit" className="w-full h-12 bg-[#2160DC] text-white">
            Create my account
        </Button>
      </div>
    </form>
  )
}

export default Form
