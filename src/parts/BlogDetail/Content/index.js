import React from 'react'
import PropTypes from 'prop-types'

import BlogImage from './BlogImage'

import clsx from 'clsx'

const Content = () => {
  return (
    <section className={clsx(
      'mt-8 md:mt-14 lg:mt-16',
      'px-6 md:px-10 lg:px-0'
    )}>
      <BlogImage/>

      <div className="max-w-[962px] m-auto left-0 right-0 mt-8 md:mt-16">
        <div>
          <h3 className="h4-bold md:h3-bold text-black dark:text-white">Heading goes in here</h3>

          <p className="text-s-reguler md:text-m-reguler text-black dark:text-white whitespace-pre-line mt-6">
            {`A simple short Subheading goes in here

            Sed ut perspiciatis unde omnis iste natus error sit vol uptatem accusantium doloremque laudantium, total merem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae nugit

            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`}
          </p>
        </div>

        <Separator className="my-8 md:my-12 m-auto left-0 right-0"/>

        <div>
          <h3 className="h4-bold md:h3-bold text-black dark:text-white">List Example</h3>

          <div className="mt-6 text-black dark:text-white text-s-reguler md:text-m-reguler">
            <p>A simple short Subheading goes in here</p>
            <ul className="list-disc mt-6 pl-6">
              <li>Sed ut perspiciatis unde omnis iste natus error.</li>
              <li>Quia voluptas sit aspernatur aut odit aut fugit.</li>
              <li>Inventore veritatis et quasi architecto.</li>
            </ul>
          </div>

          <div className="mt-6 text-black dark:text-white text-s-reguler md:text-m-reguler">
            <p>A simple short Subheading goes in here</p>
            <ul className="list-disc mt-6 pl-6">
              <li>Sed ut perspiciatis unde omnis iste natus error.</li>
              <li>Quia voluptas sit aspernatur aut odit aut fugit.</li>
              <li>Inventore veritatis et quasi architecto.</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 md:my-12 m-auto left-0 right-0"/>

        <div>
          <h3 className="h4-bold md:h3-bold text-black dark:text-white">Heading goes in here</h3>

          <p className="text-s-reguler md:text-m-reguler text-black dark:text-white whitespace-pre-line mt-6">
            {`A simple short Subheading goes in here

            Sed ut perspiciatis unde omnis iste natus error sit vol uptatem accusantium doloremque laudantium, total merem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae nugit
            
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`}
          </p>
        </div>

        <div>
          <img className="block md:hidden my-8 md:my-12" src={require('assets/img/blog-detail/image-2.png')} alt=""/>
          <img className="hidden md:block lg:hidden my-8 md:my-12" src={require('assets/img/blog-detail/image-2-md.png')} alt=""/>
          <img className="hidden lg:block my-8 md:my-12" src={require('assets/img/blog-detail/image-2-lg.png')} alt=""/>
        </div>

        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white whitespace-pre-line">
          {`Sed ut perspiciatis unde omnis iste natus error sit vol uptatem accusantium doloremque laudantium, total merem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae nugit

          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`}
        </p>

        <Separator className="my-8 md:my-12 m-auto left-0 right-0"/>

      </div>
    </section>
  )
}

const Separator = ({ className }) => {
  return (
    <svg className={clsx(
      'fill-black/[0.32] dark:fill-white/[0.32]',
      className
    )} width="56" height="8" viewBox="0 0 56 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="4" r="4" />
      <circle cx="28" cy="4" r="4" />
      <circle cx="52" cy="4" r="4" />
    </svg>
  )
}

Separator.propTypes = {
  className: PropTypes.string
}

export default Content
