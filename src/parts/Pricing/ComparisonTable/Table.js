import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const Table = ({ className, data, CloseIcon, ChecklistIcon }) => {
  return (
    <table className={clsx(
      'w-full text-sm text-left text-gray-500 dark:text-gray-400',
      className
    )}>
      <thead className="text-m-bold text-black dark:text-white">
        <tr>
          <th scope="col" className="px-4 py-3">
            <p className="text-l-bold">
              Compare Plans
            </p>
          </th>
          <th scope="col" className="px-14 py-3">
            <p className="text-center">
              Pro
            </p>
          </th>
          <th scope="col" className="px-9 py-3">
            <p className="text-center">
              Premium
            </p>
          </th>
          <th scope="col" className="px-9 py-3">
            <p className="text-center">
              Premium+
            </p>
          </th>
        </tr>
      </thead>

      <tbody>
        {
          data.map((item, index) => {
            const { name, isPro, isAllIncluded, isAllFeatures, IsOnlyOneAccount } = item
            return (
              <tr key={index} className={clsx(
                'odd:bg-transparent even:bg-black/[0.02] dark:even:bg-white/[0.06] rounded'
              )}>
                <th scope="row" className="px-4 py-3 text-m-reguler text-black dark:text-white whitespace-nowrap">
                  {name}
                </th>
                <td className="px-12 py-3">
                  <div className="relative w-full flex justify-center items-center">
                    {isPro
                      ? (
                        <>
                          <ChecklistIcon fill="#F2B007"/>
                          {IsOnlyOneAccount && (
                            <p className="absolute caption-xs lg:text-m-reguler text-black/60 dark:text-white/[0.56] whitespace-nowrap left-[100%] lg:left-[75%]">(1  account only)</p>
                          )}
                        </>
                      )
                      : (
                        <CloseIcon className="fill-black/[0.02] dark:fill-white/[0.06]"/>
                      )}
                  </div>
                </td>
                <td className="px-6 py-3">
                  <div className="w-full flex justify-center items-center">
                    {
                      isAllIncluded
                        ? (
                          <ChecklistIcon fill="#5AC994"/>
                        )
                        : (
                          <CloseIcon className="fill-black/[0.02] dark:fill-white/[0.06]"/>
                        )
                    }
                  </div>
                </td>
                <td className="px-6 py-3">
                  <div className="w-full flex justify-center items-center">
                    {
                      isAllFeatures
                        ? (
                          <ChecklistIcon fill="#2160DC"/>
                        )
                        : (
                          <CloseIcon className="fill-black/[0.02] dark:fill-white/[0.06]"/>
                        )
                    }
                  </div>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

Table.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
  CloseIcon: PropTypes.node,
  ChecklistIcon: PropTypes.node
}

export default Table
