import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const DotsBackground = ({ className, folder }) => {
  return (
    <>
      {/* Dark Mode */}
      <div className="hidden dark:block">
        <GroupImage
          className={className}
          folder={folder}
          theme="dark"
        />
      </div>

      {/* Light Mode */}
      <div className="block dark:hidden">
        <GroupImage
          className={className}
          folder={folder}
          theme="light"
        />
      </div>
    </>
  )
}

const GroupImage = ({ className, folder, theme }) => {
  return (
    <>
      <img
        className={clsx(
          'block sm:hidden',
          className
        )}
        src={require(`assets/dots-background/${theme}/${folder}/small.png`)}
        alt=""
      />
      <img
        className={clsx(
          'hidden sm:block lg:hidden',
          className
        )}
        src={require(`assets/dots-background/${theme}/${folder}/medium.png`)}
        alt=""
      />
      <img
        className={clsx(
          'hidden lg:block',
          className
        )}
        src={require(`assets/dots-background/${theme}/${folder}/large.png`)}
        alt=""
      />
    </>
  )
}

DotsBackground.propTypes = {
  folder: PropTypes.string,
  className: PropTypes.string
}

GroupImage.propTypes = {
  theme: PropTypes.string,
  folder: PropTypes.string,
  className: PropTypes.string
}

export default DotsBackground
