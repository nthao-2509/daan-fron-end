import Colors from "modules/Colors";
import styled from "styled-components";
export const StyleSignIn = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f8;
  .image {
    width: 30vw;
    height: 80vh;
    img {
      border-radius: 20px 0 0 20px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .form {
    width: 40vw;
    min-height: 80vh;
    border-radius: 0 20px 20px 0;
    padding: 50px 20px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 5px;

      margin-left: 10px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background: #f1f1f1;
      margin-left: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
      margin-left: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
      border-radius: 10px;
      margin-left: 10px;
    }

    .title {
      font-size: 20px;
      font-weight: 600;
    }
    .button-qrcode{
        margin-top: 20px;
        .button{
          background-color: ${Colors.primaryColor};
          color: ${Colors.white};
          &:hover{
            background-color: transparent;
            color: ${Colors.dark};
          }
        }
    }
    .hr {
      width: 50% !important;
      &-text {
        font-size: 20px;
        letter-spacing: 12%;
        font-weight: 300;
      }
    }
    .login-gg-fb {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 85px;
      .button {
        button {
          border: 1px solid #f3f4f8;
          padding: 22px;
          display: flex;
          align-items: center;
          width: 226px;
          height: 68px;
          border-radius: 10px;
          gap: 6px;
          img {
            width: 23px;
            height: 23px;
            object-fit: cover;
          }
        }
      }
    }
    .form-input {
      margin-top: 20px;
      width: 537px;
      .ant-form-item-required {
        font-size: 18px;
        color: #434343;
        letter-spacing: -2%;
      }
      input {
        padding: 10px 22px;

        &:focus,
        &:hover {
          border-color: #f3f4f8 !important ;
          box-shadow: unset;
        }
      }
      .button {
      }
      .button-sign-up {
        display: flex;
        align-items: center;
        justify-content: center;
        button {
          background-color: ${Colors.mainColor};
          border-radius: 10px;
          color: #ffffff;
          font-size: 18px;
          letter-spacing: 12%;
          font-weight: 500;
          padding: 9px 40px;
          border: 1px solid ${Colors.mainColor};
          cursor: pointer;
          transition: all 0.4s ease;
          &:hover {
            border-color: ${Colors.mainColor};
            background-color: transparent;
            color: ${Colors.mainColor};
          }
        }
      }
    }
  }
`;
