import styled from "styled-components";
export const StyleNavbar = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  .title {
    h1 {
      font-size: 28px;
      font-weight: 500;
      line-height: 22px;
      margin-bottom: 0 !important;
    }
  }
  .left {
    display: flex;
    align-items: center;
    gap: 24px;
    .notification {
      i {
        font-size: 22px;
        color: #4b465c !important;
      }
    }
    .user {
      display: flex;
      align-items: center;
      background-color: #ffffff;
      padding: 10px 20px;
      border-radius: 50px;
      gap: 15px;
      img {
        background-color: #4b465c;
      }
      .name {
        p {
          font-size: 14px;
          margin: 0;
          padding: 0;
          &:first-child {
            font-size: 15px;
            font-weight: 600px;
          }
        }
      }
      .icon {
        background-color: transparent;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.4s ease;
        &:hover {
          background-color: #4b465c;
          color: #ffffff;
        }
      }
    }
  }
`;
export const StyleDropdownAccount = styled.ul`
  padding: 0 20px;
  li {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover {
      color: #4096ff;
    }
    p {
      font-size: 15px;
      margin: 0;
      padding: 0;
    }
  }
  .css-dev-only-do-not-override-ed5zg0 {
    margin: 10px 0 !important;
  }
`;
export const StyleLayoutNotification = styled.div`
  padding: 10px 20px;
  min-width: 30vw;
  p {
    margin-bottom: 0 !important;
  }
  .top {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 12px;
      font-weight: 500;
      line-height: 22px;
    }
    .title {
      font-size: 20px;
    }
  }
  .content__notification {
    max-height: 50vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    cursor: pointer;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
      border-radius: 10px;
    }
    .item {
      .content {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 20px;
        .title {
          font-size: 15px;
          font-weight: bold;
          color: #000000;
        }
        .des {
          font-size: 14px;
          font-weight: 500;
          color: #595959;
        }
        .date {
          font-size: 13px;
          font-weight: 400;
          font-style: italic;
          color: #595959;
        }
      }
      &:last-child {
        .hr {
          display: none;
        }
      }
    }
  }
`;
