import React from "react";
import { CourseGradesStyled } from "./styles/CourseGrades";
import { Collapse, Typography } from "antd";
import ViewContent from "./CourseGradesComponent/ViewContent";
import { postWithAuthorization } from "helpers/queryHelper";
import { UrlServer } from "config/UrlServer";

const { Text } = Typography;

interface Props {
  param: any;
}

const CourseGradescomponent = ({ param }: Props) => {
  const [error, setError] = React.useState<{
    error: boolean;
    message: string;
  }>({
    error: false,
    message: "",
  });
  const [courseGrades, setCourseGrades] = React.useState<any>();
  const [informationUser, setInformationUser] = React.useState<any>();

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const formatItemCollapse = (data: any) => {
    const newArray: any = [];
    data?.map((item: any, index: number) =>
      newArray.push({
        key: index.toString(),
        label: item.nameClass,
        children: <ViewContent item={item} />,
      })
    );
    setCourseGrades(newArray);
  };
  const onFetchInformationUser = React.useCallback(async () => {
    const result: any = await postWithAuthorization(
      `${UrlServer}/client/select-account`,
      param?.token,
      { userId: param?.id }
    );

    if (result?.error) return;
    setInformationUser(result);
  }, [param?.id, param?.token]);

  const onFetchCoureGrades = React.useCallback(async () => {
    const result: any = await postWithAuthorization(
      `${UrlServer}/client/show-course-grades`,
      param?.token,
      { userId: param?.id }
    );

    if (result?.error)
      return setError({
        error: true,
        message: result?.error.message,
      });
    formatItemCollapse(result?.data);
  }, [param?.id, param?.token]);

  React.useEffect(() => {
    onFetchCoureGrades();
    onFetchInformationUser();
  }, [onFetchCoureGrades, onFetchInformationUser]);

  if (error?.error) return <h4>{error.message}</h4>;
  return (
    <CourseGradesStyled>
      <div className='information-student'>
        <div className='items'>
          <h4>Họ Tên: </h4>
          <p>{informationUser?.fullName}</p>
        </div>
        <div className='items'>
          <h4>Mã sinh viên: </h4>
          <p>...</p>
        </div>
        <div className='items'>
          <h4>Lớp: </h4>
          <p>...</p>
        </div>
      </div>
      <div className='title'>
        <Text strong>Học kỳ: ... - Năm học: ....</Text>
      </div>

      <Collapse
        items={courseGrades}
        defaultActiveKey={["1"]}
        onChange={onChange}
      />
    </CourseGradesStyled>
  );
};

export default CourseGradescomponent;
