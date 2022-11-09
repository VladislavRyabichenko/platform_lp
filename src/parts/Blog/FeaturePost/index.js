import clsx from 'clsx'
import { motion } from 'framer-motion'
import React, { useMemo, useState } from 'react'

import Header from './Header'
import PostItem from './PostItem'
import Pagination from './Pagination'

import arrPost from './data'

import { StaggerChildren, FadeIn } from 'animation'

const FeaturePost = () => {
  const [showResult] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)

  const currentPost = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * showResult
    const lastPageIndex = firstPageIndex + showResult

    return arrPost.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, arrPost])

  return (
    <section className={clsx(
      'px-6 md:px-10 lg:px-[140px]',
      'mb-14 md:mb-[96px] lg:mb-[124px]',
      'max-w-[1440px]',
      'm-auto left-0 right-0'
    )}>
      <Header/>

      <motion.div
        custom={{ staggerChildren: 0.4 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -125px 0px' }}
        variants={StaggerChildren}
        className={clsx(
          'flex gap-x-10 mt-6',
          'gap-y-6 md:gap-y-12',
          'flex-wrap',
          'justify-center',
          'mb-8 md:mb-16'
        )}
      >
        {currentPost.map((item, index) => {
          return (
            <PostItem
              custom={{ yStart: -50, duration: 0.9 }}
              variants={FadeIn}
              key={index} img={item.img} label={item.label} title={item.title}
            />
          )
        })}
      </motion.div>

      <Pagination
        currentPage={currentPage}
        totalCount={arrPost.length}
        totalPages={arrPost.length / showResult}
        pageSize={showResult}
        onPageChange={page => setCurrentPage(page)}
      />
    </section>
  )
}

export default FeaturePost
