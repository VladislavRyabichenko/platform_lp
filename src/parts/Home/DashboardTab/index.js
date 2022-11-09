import clsx from 'clsx'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import React, { useState, useContext } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import TabItem from './TabItem'
import LogoTabItem from './LogoTabItem'

import { ThemeContext } from 'context/ThemeContext'
import { GradientDashboardTab } from '../BgGradient'

import { FadeInDelay } from 'animation'

const DashboardTab = () => {
  const [tabActive, setTabActive] = useState('dashboard-1')
  const { theme } = useContext(ThemeContext)

  const [indexSelected, setIndexSelected] = useState(0)

  return (
    <div className="relative">
      <GradientDashboardTab className="absolute top-0 z-[-1] m-auto left-0 right-0 overflow-visible"/>
      <div
        className={clsx(
          'm-auto left-0 right-0 md:w-fit max-w-[962px]',
          'mt-[44px] sm:mt-[72px] tablet:mt-20',
          'px-6 md:px-10 lg:px-0'
        )}
      >
        <motion.div
          // custom={{ delayChildren: 2 }}
          initial="hidden"
          animate="visible"
          custom={{ duration: 1, delay: 2.25 }}
          variants={FadeInDelay}
          className="flex items-center justify-between border-b border-b-[#060721]/[0.08] dark:border-b-white/20"
        >
          <TabItem
            logo={
              <LogoTabItem name={'dashboard-1'} tabActive={tabActive}/>
            }
            isActive={tabActive === 'dashboard-1'}
            onClick={() => setTabActive('dashboard-1')}
            title="Intuitive Analytic Dashboard"
            description="All the data you need to excel all the time"
            className={clsx(
              'sm:flex',
              indexSelected === 0 ? 'block' : 'hidden'
            )}
          />
          <TabItem
            logo={
              <LogoTabItem name={'dashboard-2'} tabActive={tabActive}/>
            }
            isActive={tabActive === 'dashboard-2'}
            onClick={() => setTabActive('dashboard-2')}
            title="Identify Successful Strategies"
            description="Never encounter the same mistakes repeatedly"
            className={clsx(
              'sm:flex',
              indexSelected === 1 ? 'block' : 'hidden'
            )}
          />
          <TabItem
            logo={
              <LogoTabItem name={'dashboard-3'} tabActive={tabActive}/>
            }
            isActive={tabActive === 'dashboard-3'}
            onClick={() => setTabActive('dashboard-3')}
            title="Analyze Your Performance"
            description="Scrutinize every metric based on your statistics"
            className={clsx(
              'sm:flex',
              indexSelected === 2 ? 'block' : 'hidden'
            )}
          />
        </motion.div>

        <div className="mt-[22px] hidden sm:block">
          <img src={require(`assets/img/dashboard/${theme}/${tabActive}.png`)} alt=""/>
        </div>

        <div className="w-full mt-[22px] block sm:hidden">
          <Slider
            className=""
            slidesToShow={1}
            slidesToScroll={1}
            speed={500}
            infinite={true}
            dots={false}
            arrows={false}
            autoplay={true}
            autoplaySpeed={7500}
            afterChange={index => {
              setIndexSelected(index)
              index === 0 && setTabActive('dashboard-1')
              index === 1 && setTabActive('dashboard-2')
              index === 2 && setTabActive('dashboard-3')
            }}
          >
            <img src={require(`assets/img/dashboard/${theme}/dashboard-1.png`)} alt=""/>
            <img src={require(`assets/img/dashboard/${theme}/dashboard-2.png`)} alt=""/>
            <img src={require(`assets/img/dashboard/${theme}/dashboard-3.png`)} alt=""/>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default DashboardTab
