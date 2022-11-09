import tw from 'twin.macro'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const AnchorLink = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  

  ${tw`
    text-[#060721] dark:text-white
    hover:text-opacity-50
  `};
`

const TitleGroup = styled.h1`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  ${tw`
    text-[#060721] dark:text-white
  `};
`

export { AnchorLink, TitleGroup }
