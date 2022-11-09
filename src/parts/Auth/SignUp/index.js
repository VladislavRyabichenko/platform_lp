import clsx from 'clsx'
import React from 'react'

import Form from './Form'
import GroupButton from './GroupButton'
import OrSeparator from './OrSeparator'

const RegisterContainer = () => {
  return (
    <div className={clsx(
      'bg-white/[0.56] dark:bg-white/[0.06] rounded-2xl mt-8 space-y-6',
      'py-8 px-4 md:p-8'
    )}>
      <GroupButton/>
      <OrSeparator/>
      <Form/>
    </div>
  )
}

export default RegisterContainer
