import clsx from 'clsx'
import React, { useState } from 'react'

import { Input } from 'components/common'
import SearchBroker from 'assets/icon/SearchBroker'

const InputSearch = () => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <div
      className={clsx(
        'flex items-center gap-x-2',
        'bg-black/[0.04] dark:bg-white/[0.06]',
        'rounded-xl',
        'h-12',
        'px-4',
        'border',
        isFocus ? 'border-black/[0.08] dark:border-white' : 'border-transparent'
      )}
    >
      <SearchBroker/>
      <Input
        className="text-s-reguler text-black/60 dark:text-white dark:placeholder:text-white"
        placeholder="Search broker"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </div>
  )
}

export default InputSearch
