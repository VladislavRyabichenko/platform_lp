import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components/common'

import { usePagination, DOTS } from 'utils/usePagination'

import useResponsive from 'utils/useResponsive'

const Pagination = ({
  onPageChange,
  totalCount,
  totalPages,
  siblingCount = 0,
  currentPage,
  pageSize,
  className
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    currentPage < totalPages && onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    currentPage > 1 && onPageChange(currentPage - 1)
  }

  const indexOfLastRecord = currentPage * pageSize
  const indexOfFirstRecord = indexOfLastRecord - pageSize

  const { md } = useResponsive()

  return (
    <div className="border-t border-t-white/[0.2] pt-6 flex justify-between items-center flex-wrap gap-y-4">
      <p className="text-s-medium text-black dark:text-white">
        Showing {indexOfFirstRecord + 1} to {indexOfLastRecord > totalCount ? totalCount : indexOfLastRecord} of {totalCount} entries
      </p>

      <div className="flex gap-x-2 items-center">
        <ButtonPagination
          onClick={onPrevious}
          className={clsx(
            currentPage === 1 && 'text-black/[0.32] dark:text-white/[0.32] hover:bg-transparent'
          )}
          text={
            md ? 'Previous' : <PrevIcon/>
          }
          isDisable={currentPage === 1}
        />

        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <ButtonPagination className="w-8 h-8 text-black/60 dark:text-white" text="..."/>
          }

          return (
            <ButtonPagination
              key={index}
              className="w-8 h-8 text-black dark:text-white"
              isActive={pageNumber === currentPage}
              onClick={() => onPageChange(pageNumber)}
              text={pageNumber}
            />
          )
        })}
        <ButtonPagination
          onClick={onNext}
          className={clsx(
            currentPage === Math.ceil(totalPages) && 'text-black/[0.32] dark:text-white/[0.32] hover:bg-transparent'
          )}
          text={md ? 'Next' : <NextIcon/>}
          isDisable={currentPage === Math.ceil(totalPages)}
        />
      </div>
    </div>
  )
}

const ButtonPagination = ({ isActive, className, text, onClick, isDisable }) => {
  return (
    <Button
      className={clsx(
        'text-s-reguler w-fit h-fit border border-black/[0.08] dark:border-white/[0.2] rounded-lg hover:bg-[#2160DC]/50 text-black dark:text-white',
        'p-[6px] md:py-1.5',
        'md:px-3',
        isActive ? 'text-white bg-[#2160DC]' : 'bg-black/[0.02] dark:bg-white/[0.06]',
        isDisable && 'cursor-not-allowed',
        className
      )}
      onClick={onClick}
      isDisable={isDisable}
    >{text}</Button>
  )
}

const PrevIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4995 16.5984L7.06621 11.1651C6.42454 10.5234 6.42454 9.47344 7.06621 8.83177L12.4995 3.39844" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const NextIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.4248 16.5984L12.8581 11.1651C13.4998 10.5234 13.4998 9.47344 12.8581 8.83177L7.4248 3.39844" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

ButtonPagination.propTypes = {
  isActive: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isDisable: PropTypes.bool
}

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  totalCount: PropTypes.number,
  totalPages: PropTypes.number,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  className: PropTypes.string
}

export default Pagination
