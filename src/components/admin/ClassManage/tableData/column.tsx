import { Avatar, Space, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import Colors from "modules/Colors";
import { TypeCourseGrade, TypeUser } from "types/Types";
import moment from 'moment';
import { HOST } from "config/UrlServer";
import ActionComponent from "./action.component";


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

export const columns: ColumnsType<any> = [
    {
      title: 'Tên học phần',
      dataIndex: 'nameClass',
      key: 'nameClass',
      render: (text) => <a>{!text ? '___' : text}</a>,
    },
    {
      title: 'Giảng viên',
      dataIndex: 'nameTeacher',
      key: 'nameTeacher',
      render: (text) => <a>{!text ? '___' : text}</a>,
    },
    {
        title: 'Tín chỉ',
        dataIndex: 'TC',
        key: 'TC',
        render: (text) => <p>{!text ? '___' : text}</p>,
    },
    {
        title: 'Nhóm',
        dataIndex: 'nhom',
        key: 'nhom',
        render: (text) => <p>{!text ? '___' : text}</p>,
    },
    {
      title: 'Tiết',
      dataIndex: 'tiet',
      key: 'tiet',
      render: (text) => <p>{!text ? '___' : text}</p>,
    },
    {
      title: 'Tuần',
      dataIndex: 'tuan',
      key: 'tuan',
      render: (text) => <p>{!text ? '___' : text}</p>,
    },
   
    {
      title: 'Số lượng sinh viên',
      dataIndex: 'list_student',
      key: 'list_student',
      render: (text) => {
        const jsonData = JSON.parse(text)
        return <a>{jsonData.length}</a>
      },
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
        render: (_: any, record: any, index: number) => {
          return <ActionComponent record = {record} />
        },
      },
    
  ];