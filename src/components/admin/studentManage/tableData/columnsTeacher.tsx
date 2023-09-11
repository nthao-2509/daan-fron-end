import { Avatar, Space, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import Colors from "modules/Colors";
import { TypeCourseGrade, TypeUser } from "types/Types";
import ActionComponent from "../action.component";
import moment from 'moment';
import { HOST } from "config/UrlServer";


const active = (status: number) => {
    switch (status) {
        case 1:
            return {
              color: Colors.primaryColor,
              text: 'Hoạt động'
            };
        case 2:
            return {
              color: Colors.red,
              text: 'Khóa'
            };
        default:
            return;
    }
} 

export const columnsTeacher: ColumnsType<TypeUser> = [
    {
      title: 'Tên',
      dataIndex: 'fullName',
      key: 'fullName',
      render: (text) => <a>{!text ? '___' : text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text) => <a>{!text ? '___' : text}</a>,
    },
    {
      title: 'Lớp',
      dataIndex: 'class',
      key: 'class',
      render: (text) => <a>{!text ? '___' : text}</a>,
    },
    {
      title: 'Lớp học phần',
      dataIndex: 'lop_hoc_phan',
      key: 'lop_hoc_phan',
      render: (text) => <a>{!text ? '___' : text}</a>,
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (text) => <Avatar shape="square" size={100} className='avatar' src={`${HOST}/image/${text}`}  />,
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'birthDay',
      key: 'birthDay',
      render: (text) => {
        let timeFormat
        if(!text) {
          timeFormat = "___"
        } else {
          timeFormat = moment(text).format("DD/MM/YYYY");
        }
        return <p>{timeFormat}</p>
      },
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'newAddress',
      key: 'newAddress',
      render: (text) => {
        const splitAddress = text.split('-')
        return <p>{splitAddress?.[0]}</p>
      },
    },
    {
      title: 'SĐT',
      dataIndex: 'phone',
      key: 'phone',
      render: (text) => <a>{!text ? '___' : text}</a>,
    },
    {
      title: 'Giới tính',
      dataIndex: 'sex',
      key: 'sex',
      render: (text) => <a>{!text ? '___' : text}</a>,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'active',
      key: 'active',
      render: (_: number) => {
        const  result : {
          color: string,
          text: string
        }| undefined = active(_)
        return <Tag color={result?.color}>{result?.text}</Tag>
      },
    },
    
    {
      title: ' ',
      dataIndex: 'action',
      key: 'action',
      render: (_: any, record: TypeUser, index: number) => {
        return <ActionComponent record = {record} />
      },
    },

    
  ];