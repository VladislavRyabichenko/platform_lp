import clsx from 'clsx'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { dataSupportedBroker } from 'data'

import Table from './Table'
import Pagination from './Pagination'

import { FadeInDelay } from 'animation'

const PlatformTradingTable = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(20)

  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = dataSupportedBroker.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(dataSupportedBroker.length / recordsPerPage)

  return (
    <motion.section
      custom={{ yStart: -50, duration: 1, delay: 1.1 }}
      initial="hidden"
      animate="visible"
      variants={FadeInDelay}
      className={clsx(
        'mb-[88px]',
        'max-w-[1440px]',
        'm-auto left-0 right-0',
        'px-6 md:px-10 xl:px-[140px]'
      )}
    >
      <div className="relative overflow-x-auto dark:shadow-md sm:rounded-2xl">
        <Table dataPlatform={currentRecords}/>
      </div>

      <Pagination
        lengthData={dataSupportedBroker.length}
        indexOfFirstRecord={indexOfFirstRecord}
        indexOfLastRecord={indexOfLastRecord}
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </motion.section>
  )
}

export default PlatformTradingTable
