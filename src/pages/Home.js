import React from 'react'

import {
  Hero,
  DashboardTab,
  Brand,
  Testimonial,
  Advantage,
  AnalyticalDashboard,
  TraderCommunity,
  Leaderbords,
  ExpertTrader,
  Mentor,
  Insights,
  GetInTouch,
  MapsOrnament
} from 'parts/Home'

import DotsBackground from 'components/DotsBackground'
import CTADownload from 'components/CTADownload'

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <DotsBackground folder="home" className="w-full absolute top-0 z-[-1] m-auto left-0 right-0"/>
      <Hero/>
      <DashboardTab/>
      <div className="relative">
        <MapsOrnament className="absolute top-[-84px] m-auto left-0 right-0 max-w-[1440px] w-full h-auto" />
        <Brand/>
        <Testimonial/>
      </div>
      <Advantage/>
      <AnalyticalDashboard/>
      <TraderCommunity/>
      <Leaderbords/>
      <ExpertTrader/>
      <Mentor/>
      <Insights/>
      <GetInTouch/>
      <CTADownload/>
    </div>
  )
}

export default Home
