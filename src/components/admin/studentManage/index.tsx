import React from 'react'
import TableDataStudent from './tableData'

interface Props {
  roleManage?: string
}

const StudentManageComponent = ({roleManage = 'student'}: Props) => {
  return (
    <>
        <TableDataStudent roleManage={roleManage} />
    </>
  )
}

export default StudentManageComponent