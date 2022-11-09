import React from 'react'

import { Input } from 'components/common'

const Agrement = () => {
  return (
    <div className="flex items-start space-x-3">
      <div>
        <Input id="agrement" className="w-fit h-fit cursor-pointer" type="checkbox"/>
      </div>
      <label htmlFor="agrement" className="text-xs-reguler text-black/60 dark:text-white cursor-pointer tracking-[0.2]">
        I certify that I agree to the <span className="text-xs-bold">User Agreement</span> and <span className="text-xs-bold">Privacy Policy.</span>
      </label>
    </div>
  )
}

export default Agrement
