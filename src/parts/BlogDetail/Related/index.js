import clsx from 'clsx'
import React from 'react'

import Header from './Header'
import PostItem from './PostItem'

const Related = () => {
  const arrPost = [
    {
      img: {
        lg: require('assets/img/feature-post/large/post-4.png'),
        md: require('assets/img/feature-post/large/post-4.png'),
        sm: require('assets/img/feature-post/small/post-4.png')
      },
      label: 'PENNY STOCKS',
      title: 'From avoiding FOMO to having a plan, 5 key ways to manage a crypto down cycle'
    },
    {
      img: {
        lg: require('assets/img/feature-post/large/post-5.png'),
        md: require('assets/img/feature-post/large/post-5.png'),
        sm: require('assets/img/feature-post/small/post-5.png')
      },
      label: 'INVESTING',
      title: 'From avoiding FOMO to having a plan, 5 key ways to manage a crypto down cycle'
    },
    {
      img: {
        lg: require('assets/img/feature-post/large/post-6.png'),
        md: require('assets/img/feature-post/large/post-6.png'),
        sm: require('assets/img/feature-post/small/post-6.png')
      },
      label: 'STRATEGIES',
      title: 'From avoiding FOMO to having a plan, 5 key ways to manage a crypto down cycle'
    }
  ]

  return (
    <section className={clsx(
      'mt-8 md:mt-16 lg:mt-20',
      'px-6 md:px-10 lg:px-[140px]',
      'max-w-[1440px] m-auto left-0 right-0'
    )}>
      <Header/>

      <div className={clsx(
        'flex gap-x-10 gap-y-12 mt-10',
        'flex-wrap',
        'justify-center',
        'mb-12 md:mb-20'
      )}>
        {arrPost.map((item, index) => {
          return (
            <PostItem
              key={index}
              index={index}
              img={item.img}
              label={item.label}
              title={item.title}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Related
