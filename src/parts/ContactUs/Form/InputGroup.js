import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'
// import { Input } from 'components/common'

const InputGroup = ({ className, id, type, icon: Icon, label, placeholder, pattern, value, onChange }) => {
  return (
    <div className={clsx(
      'space-y-2',
      'w-full',
      className
    )}>
      <label htmlFor={id} className="text-s-medium text-black dark:text-white">{label}</label>

      <div className="flex items-start space-x-2 bg-black/[0.02] dark:bg-white/[0.06] rounded-xl py-[14px] px-4">
        <Icon className="stroke-black dark:stroke-white"/>

        {type === 'textarea'
          ? (
            <textarea rows={7} className="bg-transparent w-full focus:outline-none text-s-reguler text-black dark:text-white placeholder:text-black/[0.32] dark:placeholder:text-white/[0.32]" placeholder={placeholder} value={value} onChange={onChange}></textarea>
          )
          : (
            // <Input
            //   id={id}
            //   className="w-full bg-transparent focus:outline-none text-s-reguler text-black dark:text-white placeholder:text-black/[0.32] dark:placeholder:text-white/[0.32]"
            //   type={type}
            //   placeholder={placeholder}
            //   pattern={pattern}
            //   value={value} onChange={onChange}
            // />
            <input id={id} className="w-full bg-transparent focus:outline-none text-s-reguler text-black dark:text-white placeholder:text-black/[0.32] dark:placeholder:text-white/[0.32]" type={type} value={value} onChange={onChange} placeholder={placeholder}/>
          )}
      </div>
    </div>
  )
}

InputGroup.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.node,
  label: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string
}

export default InputGroup
