import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

function useResponsive () {
  const [isClient, setIsClient] = useState(false)

  const sm = useMediaQuery({
    query: '(min-width: 640px)'
  })

  const md = useMediaQuery({
    query: '(min-width: 768px)'
  })

  const lg = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  const xl = useMediaQuery({
    query: '(min-width: 1280px)'
  })

  const xl2 = useMediaQuery({
    query: '(min-width: 1536px)'
  })

  useEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true)
  }, [])

  return {
    sm: isClient ? sm : false,
    md: isClient ? md : false,
    lg: isClient ? lg : false,
    xl: isClient ? xl : false,
    xl2: isClient ? xl2 : false
  }
}

export default useResponsive
