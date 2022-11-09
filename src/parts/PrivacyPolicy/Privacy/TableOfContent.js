import clsx from 'clsx'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import React, { useState } from 'react'

import { Button } from 'components/common'

import ArrowDown from 'assets/icon/privacy-policy/ArrowDown'

const List = styled.li`
  ${tw`
    transition-all duration-1000 hover:underline cursor-pointer
  `};
`

const TableOfContents = () => {
  const [isCollapse, setIsCollapsed] = useState(true)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    window.scrollTo({
      top: element.offsetTop - 125,
      behavior: 'smooth'
    })
  }

  return (
    <div className={clsx(
      'my-8',
      'py-8 space-y-8',
      'border-y border-y-black/[0.08] dark:border-y-white/[0.2]',
      'overflow-hidden',
      'transition-all duration-500',
      'h-full',
      isCollapse ? 'max-h-[1000px]' : 'max-h-[100px]'
    )}>
      <div className="flex justify-between items-center">
        <h4 className="text-black dark:text-white text-l-bold md:h4-bold">Table Of Contents</h4>
        <Button className="w-fit h-fit" onClick={() => setIsCollapsed(!isCollapse)}>
          <ArrowDown className={clsx(
            'transform',
            isCollapse ? 'rotate-0' : 'rotate-180'
          )}/>
        </Button>
      </div>

      <ul className="list-decimal pl-6 text-black dark:text-white/[0.56] text-s-reguler md:text-m-reguler">
        <List onClick={() => scrollToSection('privacy-policy-1')}>What Information Do We Collect?</List>
        <List onClick={() => scrollToSection('privacy-policy-2')}>How Do We Use Your Information?</List>
        <List onClick={() => scrollToSection('privacy-policy-3')}>Will Your Information Be Shared With Anyone?</List>
        <List onClick={() => scrollToSection('privacy-policy-4')}>Do We Use Cookies And Other Tracking Technologies?</List>
        <List onClick={() => scrollToSection('privacy-policy-5')}>How Do We Handle Your Social Logins?</List>
        <List onClick={() => scrollToSection('privacy-policy-6')}>How Long Do We Keep Your Information?</List>
        <List onClick={() => scrollToSection('privacy-policy-7')}>How Do We Keep Your Information Safe?</List>
        <List onClick={() => scrollToSection('privacy-policy-8')}>Do We Collect Information From Minors?</List>
        <List onClick={() => scrollToSection('privacy-policy-9')}>What Are Your Privacy Rights?</List>
        <List onClick={() => scrollToSection('privacy-policy-10')}>Controls For Do-Not-Track Features</List>
        <List onClick={() => scrollToSection('privacy-policy-11')}>How Can You Contact Us?</List>
        <List onClick={() => scrollToSection('privacy-policy-12')}>How Can You Review, Update Or Delete The Data We Collect From You?</List>
      </ul>
    </div>
  )
}

export default TableOfContents
