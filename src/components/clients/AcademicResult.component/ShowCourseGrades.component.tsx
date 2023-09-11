import React from "react";
import TableData from "./table/tableData";
import Header from "common/Header";
import { Button } from "antd";
import { ResultStyled } from "./styles/results.styled";

const ShowCourseGradesComponent = () => {
  return <>
  <Header
  heading="Kết quả học tập"
  >
    <Button type="primary">QR-CODE</Button>
  </Header>
  <ResultStyled>
    <TableData />
  </ResultStyled>
  </>;
};

export default ShowCourseGradesComponent;
