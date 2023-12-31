import {
    Avatar,
    Button,
    Form,
    Input,
    Modal,
    Popconfirm,
    Space,
    Tooltip,
    message,
  } from "antd";
import React from 'react'

import {
    LockOutlined,
    UnlockOutlined,
    EditOutlined,
    DeleteOutlined,
    EyeOutlined,
  } from "@ant-design/icons";
import { TypeUser } from "types/Types";
import { postWithAuthorizationAndAdmin } from "helpers/queryHelper";
import { UrlServer } from "config/UrlServer";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { ADMIN_QUERY_STUDENT } from "config/keyQuery";
import { useQueryClient } from "react-query";
import ModalCommon from "common/Modal.common";
import ContentUpdateStudentComponent from "./components/contentUpdateStudent.component";

interface Props {
  record: TypeUser
}

const ActionComponent = ({record}: Props) => {
  const [formUpdateInfoStudent] = Form.useForm()
  const [visibleModal, setVisibleModal] = React.useState<boolean>(false)
  const onCloseModal = React.useCallback(() => {
    setVisibleModal(false)
    queryClient.invalidateQueries(ADMIN_QUERY_STUDENT);
  },[setVisibleModal])
  const queryClient = useQueryClient();
  const {user} = useSelector((state: RootState) => state.auth)
    const confirm = async (userId: number | string) => {
      const result: any = await postWithAuthorizationAndAdmin(`${UrlServer}/admin/delete-user-by-id`, user.accessToken, {
        userId
      })
      if(result.status === 200) {
        queryClient.invalidateQueries(ADMIN_QUERY_STUDENT);
      }
      
      };
    const updateStatusActive = async (userId: number | string, status: number) => {
      const result: any = await postWithAuthorizationAndAdmin(`${UrlServer}/admin/update-status-user-active`, user.accessToken, {
        userId,
        status
      })
      if(result.status === 200) {
        queryClient.invalidateQueries(ADMIN_QUERY_STUDENT);
      }
      
    }

  return (
    <>
    <Space wrap>
        <Tooltip title={`${record?.active === 1 ? 'Mở' : 'Khóa'}`}>
          {record?.active === 1 ? (
            <Button shape='circle' onClick={() => updateStatusActive(record.id, 2)} type='dashed' icon={<UnlockOutlined />} />
          ) : (
            <Button danger shape='circle' onClick={() => updateStatusActive(record.id, 1)} type='dashed' icon={<LockOutlined />} />
          )}
        </Tooltip>
        <Tooltip title={`Cập nhật`}>
          <Button
            shape='circle'
            type='dashed'
            onClick={() => setVisibleModal(true)}
            icon={<EditOutlined />}
          />
        </Tooltip>
        <Popconfirm
          placement='topRight'
          title={"CẢNH BÁO"}
          description={"Bạn có chắc chắn muốn xóa tài khoản: " + record.email}
          onConfirm={() => confirm(record.id)}
          okText='Đồng ý'
          cancelText='Hủy'
        >
          <Tooltip title={`Xóa`}>
            <Button
              danger
              shape='circle'
              type='dashed'
              icon={<DeleteOutlined />}
            />
          </Tooltip>
        </Popconfirm>
      </Space>
        <ModalCommon
        title={'Cập nhật thông tin'}
        onClose={onCloseModal}
        visible={visibleModal}
        onSubmit={() => formUpdateInfoStudent.submit()}
     >
        <ContentUpdateStudentComponent onCloseModal={onCloseModal} record={record} form={formUpdateInfoStudent} />
     </ModalCommon >
    </>
  )
}

export default ActionComponent