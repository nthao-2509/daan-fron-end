import { Button } from 'antd'
import Header from 'common/Header'
import TeacherManageComponent from 'components/admin/studentManage'
import React from 'react'

const TeacherManage = () => {
  return (
    <>
      <Header heading="Quản lý giáo viên" >
        <Button style={{
          marginRight: 20
        }} >Nhập Excel</Button>
        <Button type='primary'>Thêm giáo viên</Button>
      </Header>
      <TeacherManageComponent roleManage="teacher" />
    </>
  )
}

export default TeacherManage