import gsap from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TestimonialAnimation = (ref) => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to(
      '.testimoni-item',
      {
        xPercent: -435,
        repeat: -1,
        duration: 40,
        ease: 'linear',
        scrollTrigger: {
          trigger: '#container-testimonial'
        }
      }
    ).totalProgress(0.5)

    gsap.to(ref.current, {
      xPercent: 0,
      ease: 'linear'
    })
  })
}

export default TestimonialAnimation
