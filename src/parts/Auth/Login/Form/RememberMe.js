import React from 'react'

import { Input } from 'components/common'

const RememberMe = () => {
  return (
    <div className="flex items-center space-x-3">
      <Input id="rememberMe" className="w-fit h-fit cursor-pointer" type="checkbox"/>
      <label htmlFor="rememberMe" className="text-xs-reguler text-black dark:text-white cursor-pointer">Remember Me</label>
    </div>
  )
}

export default RememberMe
