const FadeInDelay = {
  hidden: ({ xStart, yStart }) => ({
    x: xStart,
    y: yStart,
    opacity: 0
  }),
  visible: ({ duration, delay }) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration,
      delay
    }
  })
}

export default FadeInDelay
