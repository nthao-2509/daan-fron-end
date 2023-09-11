import { Table } from 'antd';
import React from 'react'
import { columns } from './columns';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { postWithAuthorization } from 'helpers/queryHelper';
import { UrlServer } from 'config/UrlServer';
import { TypeCourseGrade } from 'types/Types';
import { AcademicAbility } from '../model/academicAbility.model';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }


const TableData = () => {
    const {user} = useSelector((state: RootState) => state.auth)
    const [dataCourseGrade, setDataCourseGrade] = React.useState<TypeCourseGrade[]>([])

    const onFetchCourseGrades = React.useCallback(async (accessToken: string, userId: string | number) => {
        const result: any = await postWithAuthorization(
          `${UrlServer}/client/show-course-grades`,
          accessToken,
          { userId: userId }
        );
        if(result.status === 200){
            const newCoursesGrade = result.data?.map((source: TypeCourseGrade) => {
                const letterGrades = AcademicAbility(source.diem_chu)
                return {...source, letterGrades}
            })
            setDataCourseGrade(newCoursesGrade)
        }
    }, []);
    
    React.useEffect(() => {
        onFetchCourseGrades(user.accessToken, user.userData.id)
    }, [])
  
  return <Table columns={columns} dataSource={dataCourseGrade} />
}

export default TableData