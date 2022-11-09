import clsx from 'clsx'
import React, { useRef } from 'react'
import TestimoniItem from './TestimoniItem'

import { TestimonialAnimation } from 'animation'

import Reza from 'assets/img/testimonial/reza.png'
import Victoria from 'assets/img/testimonial/victoria.png'
import David from 'assets/img/testimonial/david.png'
import Mike from 'assets/img/testimonial/mike.png'

import Amerika from 'assets/svg/flag/Amerika.svg'
import Canada from 'assets/svg/flag/Canada.svg'
import England from 'assets/svg/flag/England.svg'

const Testimonial = () => {
  const containerRef = useRef()
  TestimonialAnimation(containerRef)

  const testimoniArr = [
    {
      user: {
        img: Reza,
        name: 'Reza Lauren'
      },
      flag: Canada,
      text: "I couldn't have asked for more than this. Since I invested in it I made over 100,000 dollars profits. I would be lost without it."
    },
    {
      user: {
        img: Victoria,
        name: 'Victoria Deliver'
      },
      flag: Amerika,
      text: "It's is both attractive and highly adaptable. It's exactly what I've been looking for. Definitely worth the investment."
    },
    {
      user: {
        img: David,
        name: 'David Alex'
      },
      flag: England,
      text: "No matter where you go, It's is the coolest, most happening thing around! Not able to tell you how happy I am with it."
    },
    {
      user: {
        img: Mike,
        name: 'Mike Jhonson'
      },
      flag: Amerika,
      text: "I love your system. Thank you for making it painless, pleasant and most of all hassle free! It's incredible."
    }
  ]

  return (
    <section className={clsx(
      'relative',
      'mb-[62px] md:mb-20 xl:mb-16'
    )}>
      <div
        id="container-testimonial"
        ref={containerRef}
        className={clsx(
          'flex space-x-8'
        )}
      >
        {testimoniArr.map((item, index) => {
          return (
            <TestimoniItem
              key={index}
              userImg={item.user.img}
              userName={item.user.name}
              flag={item.flag}
              text={item.text}
              className="testimoni-item min-w-[327px]"
            />
          )
        })}
        {testimoniArr.map((item, index) => {
          return (
            <TestimoniItem
              key={index}
              userImg={item.user.img}
              userName={item.user.name}
              flag={item.flag}
              text={item.text}
              className="testimoni-item min-w-[327px]"
            />
          )
        })}
        {testimoniArr.map((item, index) => {
          return (
            <TestimoniItem
              key={index}
              userImg={item.user.img}
              userName={item.user.name}
              flag={item.flag}
              text={item.text}
              className="testimoni-item min-w-[327px]"
            />
          )
        })}
      </div>
    </section>
  )
}

export default Testimonial
