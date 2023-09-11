import { Button } from 'antd'
import Header from 'common/Header'
import StudentManageComponent from 'components/admin/studentManage'
import React from 'react'

const StudentManage = () => {
  return (
    <>
      <Header heading="Quản lý sinh viên" >
        <Button style={{
          marginRight: 20
        }} >Nhập Excel</Button>
        <Button type='primary'>Thêm sinh viên</Button>
      </Header>
      <StudentManageComponent roleManage='student' />
    </>
  )
}

export default StudentManage