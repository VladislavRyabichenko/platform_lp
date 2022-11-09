import clsx from 'clsx'
import React from 'react'

import Form from './Form'
import GroupButton from './GroupButton'
import OrSeparator from './OrSeparator'

const LoginContainer = () => {
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
      <GroupButton/>
      <OrSeparator/>
      <Form/>
    </div>
  )
}

export default LoginContainer
