import Input from 'components/Input'
import React from 'react'

const RememberMe = () => {
  return (
    <div className="flex items-center space-x-3">
      <Input id="rememberMe" className="w-fit h-fit cursor-pointer" type="checkbox"/>
      <label htmlFor="rememberMe" className="text-xs-reguler text-white cursor-pointer">Remember Me</label>
    </div>
  )
}

export default RememberMe
