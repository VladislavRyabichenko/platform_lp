const useScrollToTop = ({ isSmooth }) => {
  return window.scroll({ top: 0, left: 0, behavior: isSmooth ? 'smooth' : 'auto' })
}

export default useScrollToTop
