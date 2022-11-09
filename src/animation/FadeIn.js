const FadeIn = {
  hidden: ({ xStart, yStart }) => ({
    x: xStart,
    y: yStart,
    opacity: 0
  }),
  visible: ({ duration }) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration
    }
  })
}

export default FadeIn
