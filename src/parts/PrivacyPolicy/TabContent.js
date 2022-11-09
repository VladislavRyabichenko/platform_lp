import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import Privacy from './Privacy'
import Refunds from './Refunds'
import TermOfUse from './TermOfUse'

const TabContent = ({ tabActive }) => {
  return (
    <section className={clsx(
      'px-6 md:px-10 lg:px-0',
      'max-w-[962px]',
      'm-auto left-0 right-0',
      'md:min-h-[592px] lg:min-h-fit'
    )}>
      {tabActive === 'privacy' && (
        <Privacy/>
      )}
      {tabActive === 'term-of-use' && (
        <TermOfUse/>
      )}
      {tabActive === 'refund' && (
        <Refunds/>
      )}

      <p className={clsx(
        'text-m-reguler text-black/60 dark:text-white/[0.56] w-fit m-auto left-0 right-0',
        'mt-6 md:mt-12 lg:mt-14',
        'mb-14 md:mb-16 lg:mb-[120px]'
      )}>
        Still have questions? <a className="text-primary-500 text-m-bold" href="mailto:support@tryndx.com">Lets talk</a>
      </p>
    </section>
  )
}

TabContent.propTypes = {
  tabActive: PropTypes.string
}

export default TabContent
