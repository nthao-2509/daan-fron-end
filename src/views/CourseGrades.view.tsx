import CourseGradescomponent from "components/clients/CourseGrades.component";
import React from "react";
import { useLocation, useParams } from "react-router-dom";

const CourseGradesView = () => {
  const param = useParams();

  return <CourseGradescomponent param={param} />;
};

export default CourseGradesView;
