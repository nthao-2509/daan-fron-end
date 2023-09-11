import React, { ReactNode } from 'react'
import { HeaderStyled } from './styles/header.styled'
import { Typography } from 'antd';

const { Title } = Typography;
const Header = (props :{
    heading: string,
    children: ReactNode
}) => {
  return (
    <HeaderStyled>
        <Title style={{
          textTransform: 'uppercase'
        }} level={4}>{props.heading}</Title>
        <div>
            {props.children}
        </div>
    </HeaderStyled>
  )
}

export default Header