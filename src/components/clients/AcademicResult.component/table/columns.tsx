import { Space, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import Colors from "modules/Colors";
import { TypeCourseGrade } from "types/Types";


const colorTag = (letterGrades: string) =>{
    switch (letterGrades) {
        case 'A':
            return Colors.green;
        case 'B':
            return Colors.primaryColor;
        case 'C':
            return Colors.mainColor;
        case 'D':
            return Colors.pink;
        case 'F':
            return Colors.red;
        default:
            return;
    }
} 

export const columns: ColumnsType<TypeCourseGrade> = [
    {
      title: 'Tên học phần',
      dataIndex: 'nameClass',
      key: 'nameClass',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Chuyên cần',
      dataIndex: 'diem_cc',
      key: 'diem_cc',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Bài tập',
      dataIndex: 'diem_bt',
      key: 'diem_bt',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Giữa kỳ',
      dataIndex: 'giua_ky',
      key: 'giua_ky',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Điểm T4',
      dataIndex: 'diem_t4',
      key: 'diem_t4',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Điểm T10',
      dataIndex: 'diem_t10',
      key: 'diem_t10',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Điểm tổng',
      dataIndex: 'diem_tong',
      key: 'diem_tong',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Điểm chữ',
      dataIndex: 'diem_chu',
      key: 'diem_chu',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Học lực',
      dataIndex: 'letterGrades',
      key: 'letterGrades',
      render: (_: string, record: TypeCourseGrade, index: number) => {
        const color = colorTag(record.diem_chu)
        return <Tag color={color} key={index} >
        {record.letterGrades}
      </Tag>
      },
    },
    
  ];