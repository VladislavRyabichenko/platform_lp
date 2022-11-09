import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button, Input } from 'components/common'

import EyeIcon from 'assets/icon/eye.svg'
import clsx from 'clsx'

const InputGroup = ({ id, name, icon: Icon, label, type, placeholder, value, onChange, handleBlur, isError }) => {
  const [isFocus, setIsFocus] = useState(false)
  const [isShowPassword, SetIsShowPassword] = useState(false)

  const handleToogleShowPassword = () => {
    SetIsShowPassword(!isShowPassword)
  }

  return (
    <div>
      <label htmlFor={id} className="text-s-medium text-black dark:text-white">{label}</label>

      <div className={clsx(
        'flex items-center gap-x-2 rounded-xl px-4 py-[14px] mt-2',
        'border',
        isError
          ? 'border-danger-500'
          : isFocus ? 'border-black/[0.88] dark:border-white' : 'bg-black/[0.02] dark:bg-white/[0.06] border-transparent'
      )}>
        <Icon className="stroke-black dark:stroke-white" />
        <Input
          id={id}
          name={name}
          className="text-s-reguler text-black dark:text-white"
          type={
            type === 'password'
              ? (isShowPassword ? 'text' : 'password')
              : type
          }
          onFocus={() => setIsFocus(true)}
          onBlur={(e) => {
            setIsFocus(false)
            handleBlur(e)
          }}
          placeholder={placeholder}
          isRequired={true}
          onChange={onChange}
          value={value}
        />
        {type === 'password' && (
          <Button onClick={handleToogleShowPassword} className="w-fit h-fit">
            <img src={EyeIcon} alt=""/>
          </Button>
        )}
      </div>
    </div>
  )
}

InputGroup.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  handleBlur: PropTypes.func,
  isError: PropTypes.bool
}

export default InputGroup
