import { useEffect } from 'react'

const useStyleOverflow = (isOpen) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [isOpen])
}

export default useStyleOverflow
