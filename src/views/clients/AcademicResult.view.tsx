import QRcodeComponent from "components/clients/AcademicResult.component/QRcode.component";
import ShowCourseGradesComponent from "components/clients/AcademicResult.component/ShowCourseGrades.component";
import React from "react";

const AcademicResultView = () => {
  const [isShowCourseGrades, setIsShowCourseGrades] =
    React.useState<boolean>(true);

  if (isShowCourseGrades) return <ShowCourseGradesComponent />;

  return <QRcodeComponent />;
};

export default AcademicResultView;
