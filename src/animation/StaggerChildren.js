const StaggerChildren = {
  hidden: { opacity: 0 },
  visible: ({ staggerChildren = 0.5, delayChildren = 0 }) => ({
    opacity: 1,
    transition: {
      delayChildren,
      staggerChildren
    }
  })
}

export default StaggerChildren
