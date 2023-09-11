import Colors from "modules/Colors";
import styled from "styled-components";

export const QRCodeStyled = styled.div`
  .refresh_qr {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.4s ease;
    h4 {
      margin-bottom: 0 !important;
    }
    &:hover {
      color: ${Colors.primaryColor};
    }
  }
  .countdown {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .expired {
    border: 2px solid red;
  }
`;
