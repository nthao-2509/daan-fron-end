import { Table } from 'antd'
import React from 'react'
import { columns } from './columns'
import { UrlServer } from 'config/UrlServer';
import { postWithAuthorization, postWithAuthorizationAndAdmin } from 'helpers/queryHelper';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useQuery } from 'react-query';
import { ADMIN_QUERY_STUDENT } from 'config/keyQuery';
import { columnsTeacher } from './columnsTeacher';

interface Props {
  roleManage?: string
}


const fetchAllUser = ( roleSelect: string , accessToken: string) => {
    return postWithAuthorizationAndAdmin(
        `${UrlServer}/admin/select-account`,
        accessToken,
        {
            roleSelect
        }
      );
  };
  
  const TableDataStudent = ({roleManage = 'student'}: Props) => {
    const {user} = useSelector((state: RootState) => state.auth)
    const { data: dataStudent, isLoading }: any = useQuery(ADMIN_QUERY_STUDENT, () => fetchAllUser(roleManage, user.accessToken));

    
    
  return <Table columns={roleManage === 'student'? columns : columnsTeacher} dataSource={dataStudent?.data} loading={isLoading} />
}

export default TableDataStudent