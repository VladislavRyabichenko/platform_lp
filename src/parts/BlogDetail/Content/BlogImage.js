import clsx from 'clsx'
import React from 'react'

import Large from 'assets/img/blog-detail/header-image-lg.png'
import Medium from 'assets/img/blog-detail/header-image-md.png'
import Small from 'assets/img/blog-detail/header-image.png'

const BlogImage = () => {
  return (
    <>
      <img className={clsx(
        'max-w-[1160px] m-auto left-0 right-0',
        'w-full',
        'block md:hidden'
      )} src={Small} alt=""/>
      <img className={clsx(
        'max-w-[1160px] m-auto left-0 right-0',
        'w-full',
        'hidden md:block lg:hidden'
      )} src={Medium} alt=""/>
      <img className={clsx(
        'max-w-[1160px] m-auto left-0 right-0',
        'w-full',
        'hidden lg:block'
      )} src={Large} alt=""/>
    </>
  )
}

export default BlogImage
