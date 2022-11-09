import React from 'react'

import LoginButton from '../LoginButton'
import RegisterButton from '../RegisterButton'

const GroupButton = () => {
  return (
    <>
      <div>
        <LoginButton className="w-full"/>
      </div>
      <div>
        <RegisterButton className="w-full" />
      </div>
    </>
  )
}

export default GroupButton
