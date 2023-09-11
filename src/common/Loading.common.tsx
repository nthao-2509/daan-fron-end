import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

interface Props {
    size: 'large' | 'small',
    spinning: boolean;
    children?: React.ReactNode
}

const LoadingCommon = ({size, children, spinning}: Props) => {
  return <Spin size={size} spinning={spinning} indicator={antIcon}>
    {children}
  </Spin>;
}

export default LoadingCommon