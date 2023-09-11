import { Table } from 'antd';
import { UrlServer } from 'config/UrlServer';
import { ADMIN_QUERY_LOP_HOC_PHAN } from 'config/keyQuery';
import { postWithAuthorizationAndAdmin } from 'helpers/queryHelper';
import React from 'react'
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { columns } from './column';

const fetchAllUser = (accessToken: string) => {
    return postWithAuthorizationAndAdmin(
        `${UrlServer}/admin/select-lop-hoc-phan`,
        accessToken,
      );
  };
  

const TableDataComponent = () => {
    
    const {user} = useSelector((state: RootState) => state.auth)
    const { data: dataStudent, isLoading }: any = useQuery(ADMIN_QUERY_LOP_HOC_PHAN, () => fetchAllUser(user.accessToken));
    return <Table columns={columns} dataSource={dataStudent?.data} loading={isLoading} />

}

export default TableDataComponent