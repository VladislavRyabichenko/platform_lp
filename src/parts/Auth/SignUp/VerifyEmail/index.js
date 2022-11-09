import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import MailIcon from './icon.svg'

import { Button, Input } from 'components/common'

const Form = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll('.otp-field input')

    const submit = () => {
      let otp = ''
      inputs.forEach((input) => {
        otp += input.value
        input.disabled = true
        input.classList.add('disabled')
      })
      console.log(otp)
    }

    const handleOnPasteOtp = (e) => {
      const data = e.clipboardData.getData('text')
      const value = data.split('')
      if (value.length === inputs.length) {
        inputs.forEach((input, index) => (input.value = value[index]))
        submit()
      }
    }

    const handleOtp = (e) => {
      const input = e.target
      const value = input.value
      input.value = ''
      input.value = value ? value[0] : ''

      const fieldIndex = input.dataset.index
      if (value.length > 0 && fieldIndex < inputs.length - 1) {
        input.parentNode.nextElementSibling.childNodes[0].focus()
      }

      if (e.key === 'Backspace' && fieldIndex > 0) {
        input.parentNode.previousElementSibling.childNodes[0].focus()
      }

      if (fieldIndex === inputs.length - 1) {
        submit()
      }
    }

    inputs.forEach((input, index) => {
      input.dataset.index = index
      input.addEventListener('paste', handleOnPasteOtp)
      input.addEventListener('keyup', handleOtp)
    })
  }, [])

  return (
    <section
      className={clsx(
        'bg-white/[0.56] dark:bg-white/[0.06] rounded-2xl',
        'py-8 px-4 md:p-8',
        'mt-10 md:mt-[168px] lg:mt-[188px]'
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
          <h3 className="h4-bold md:h3-bold text-black dark:text-white text-center">Please check your email</h3>
          <p className="text-s-reguler md:text-m-reguler text-black/60 dark:text-white/[0.8] text-center mt-3">
          We sent a verification code to <span className="text-s-reguler md:text-m-medium">manhhachkt@gmail.com</span>
          </p>
        </div>

        <form className="mt-6">
          <div>
            <div className="otp-field flex gap-x-3 w-full justify-center mb-8">
              <InputItem/>
              <InputItem/>
              <InputItem/>
              <InputItem/>
            </div>

            <p className="text-s-reguler text-black/60 dark:text-white/[0.56] text-center">
              Don’t receive an email? <Link to="#" className="text-s-bold text-primary-500">Resend</Link>
            </p>
          </div>

          <Button className="w-full h-12 bg-primary-500 text-s-bold mt-6 text-white">Verify Email</Button>
        </form>
      </div>

    </section>
  )
}

const InputItem = () => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <div className={clsx(
      'rounded-xl',
      'w-12 md:w-20',
      'h-12 md:h-[72px]',
      'border',
      isFocus ? 'border-black dark:border-white' : 'bg-black/[0.02] dark:bg-white/[0.06] border-transparent'
    )}>
      <Input
        pattern={/^[0-9]*$/}
        maxLength="1"
        className="h4-bold md:h2-bold text-black dark:text-white h-full w-full text-center"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholder={isFocus ? '' : '-'}
      />
    </div>
  )
}

export default Form
