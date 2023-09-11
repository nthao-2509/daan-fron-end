import Colors from "modules/Colors";
import styled from "styled-components";
export const CourseGradesStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 20px;

  .information-student {
    .items {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .title {
    margin-bottom: 20px;
  }
  .content {
    .course-grades {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${Colors.dark};
    }
  }
`;
