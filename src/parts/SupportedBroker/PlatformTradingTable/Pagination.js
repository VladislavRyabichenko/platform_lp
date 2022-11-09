import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components/common'

const Pagination = ({ lengthData, indexOfFirstRecord, indexOfLastRecord, nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  return (
    <div className={clsx(
      'flex',
      'gap-y-4',
      'flex-col sm:flex-row',
      'justify-between items-center w-full',
      'pt-9 md:pt-6'
    )}>
      <p className="text-s-medium text-black dark:text-white/[0.56]">
        Result: {indexOfFirstRecord + 1} - {indexOfLastRecord > lengthData ? lengthData : indexOfLastRecord} of {lengthData}
      </p>

      <div className="flex items-center gap-x-2">
        <PrevButton isActive={currentPage !== 1} onClick={prevPage}/>
        <div className="flex items-center gap-x-2">
          {pageNumbers.map(pgNumber => (
            <BulletButton
              key={pgNumber}
              isActive={currentPage === pgNumber}
              value={pgNumber}
              onClick={() => setCurrentPage(pgNumber)}
            />
          ))}
        </div>
        <NextButton isActive={currentPage !== nPages} onClick={nextPage}/>
      </div>
    </div>
  )
}

const BulletButton = ({ isActive, onClick, value }) => {
  return (
    <Button
      className={clsx(
        'w-6 h-6 rounded-[32px] flex items-center justify-center',
        'hover:bg-black/[0.02] dark:hover:bg-white/[0.06]',
        isActive && 'bg-black/[0.02] dark:bg-white/[0.06]'
      )}
      onClick={onClick}
    >
      <p className={clsx(
        'text-m-medium dark:text-white/[0.8]',
        isActive ? 'text-black/[0.88]' : 'text-black/[0.32]'
      )}>{value}</p>
    </Button>
  )
}

const PrevButton = ({ isActive, onClick }) => {
  return (
    <Button className={clsx(
      'w-6 h-6',
      isActive ? 'hover:bg-white/[0.06]' : 'cursor-not-allowed'
    )} onClick={onClick} >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="stroke-black/[0.08] dark:stroke-white/[0.2]" d="M10.0012 13.2797L5.65453 8.93306C5.1412 8.41973 5.1412 7.57973 5.65453 7.06639L10.0012 2.71973" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Button>
  )
}

const NextButton = ({ isActive, onClick }) => {
  return (
    <Button className={clsx(
      'w-6 h-6',
      isActive ? 'hover:bg-white/[0.06]' : 'cursor-not-allowed'
    )} onClick={onClick}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="stroke-black/[0.08] dark:stroke-white/[0.2]" d="M5.94141 13.2797L10.2881 8.93306C10.8014 8.41973 10.8014 7.57973 10.2881 7.06639L5.94141 2.71973" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Button>
  )
}

Pagination.propTypes = {
  lengthData: PropTypes.number,
  indexOfFirstRecord: PropTypes.number,
  indexOfLastRecord: PropTypes.number,
  nPages: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func
}

BulletButton.propTypes = {
  isActive: PropTypes.bool,
  value: PropTypes.number,
  onClick: PropTypes.func
}

PrevButton.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func
}

NextButton.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func
}

export default Pagination
