import styled from "styled-components";
export const StyleSidebar = styled.div`
  width: 20%;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 20px 18px;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 44px;
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      img {
        width: 28px;
        height: 24px;
      }
      p {
        font-size: 22px;
        font-weight: bold;
        padding: 0;
        margin: 0;
      }
    }
    .toggle {
      img {
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
    }
  }
  ul {
    padding: 0 14px;
    .title__routes {
      padding: 15px 0;
      p {
        color: #8b909a;
        text-transform: uppercase;
        font-size: 13px;
      }
    }
  }
  .link {
    background-color: transparent;
    color: #8b909a;
    list-style-type: none;
    padding: 9px 16px;
    border-radius: 6px;
    margin-bottom: 8px;
    &.active {
      background-color: #f3f4f8;
      color: #000000;
    }
    li {
      display: flex;
      align-items: center;
      gap: 16px;

      p {
        padding: 0;
        margin: 0;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
`;
