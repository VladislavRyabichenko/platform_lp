import gsap from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const BrandAnimation = (ref) => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to(
      '.brand-content-img',
      {
        x: 4490,
        repeat: -1,
        duration: 110,
        ease: 'linear',
        scrollTrigger: {
          trigger: '#container-brand-image'
        }
      }
    ).totalProgress(0.5)

    gsap.to(ref.current, {
      x: -4490,
      ease: 'linear'
    })
  })
}

export default BrandAnimation
