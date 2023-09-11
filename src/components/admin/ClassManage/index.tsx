import { Button } from 'antd'
import Header from 'common/Header'
import React from 'react'
import TableDataComponent from './tableData'

const ClassManageComponent = () => {
  return (
    <>
    <Header heading='Quản lý lớp học'>
        <Button>Thêm lớp học</Button>
    </Header>
    <TableDataComponent />
    </>
  )
}

export default ClassManageComponent