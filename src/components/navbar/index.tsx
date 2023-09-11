import React from "react";
import {
  StyleDropdownAccount,
  StyleLayoutNotification,
  StyleNavbar,
} from "./style";
import {
  Avatar,
  Badge,
  Divider,
  Dropdown,
  MenuProps,
  Popover,
  Space,
} from "antd";

const Navbar = () => {
  const dropdownAccount = (
    <StyleDropdownAccount>
      <li>
        <i className='fa-solid fa-user'></i>
        <p>Account</p>
      </li>
      <Divider />
      <li>
        <i className='fa-solid fa-gear'></i>
        <p>Settings</p>
      </li>
      <Divider />
      <li>
        <i className='fa-solid fa-right-from-bracket'></i>
        <p>Logout</p>
      </li>
    </StyleDropdownAccount>
  );

  const layoutNotification = (
    <StyleLayoutNotification>
      <div className='top'>
        <p className='title'>Notifications</p>
        <a href='#'>Mark all view</a>
      </div>
      <div className='content__notification'>
        {Array.from({ length: 10 }).map((item: any, index: number) => (
          <div className='item' key={index}>
            <div className='content'>
              <Avatar
                src={<img src={"/images/avatar.jpg"} alt='avatar' />}
                size={38}
              />
              <div>
                <p className='title'>Notification Title</p>
                <p className='des'>Content </p>
                <p className='date'>23/06/2023</p>
              </div>
            </div>
            <Divider className='hr' />
          </div>
        ))}
      </div>
    </StyleLayoutNotification>
  );
  return (
    <StyleNavbar>
      <div className='title'>
        <h1>Dashboard</h1>
      </div>
      <div className='left'>
        <Popover
          placement='bottomRight'
          content={layoutNotification}
          trigger='click'
        >
          <div className='notification'>
            <Badge count={5} size='small'>
              <i className='fa-regular fa-bell'></i>
            </Badge>
          </div>
        </Popover>

        <div className='user'>
          <Avatar
            src={<img src={"/images/avatar.jpg"} alt='avatar' />}
            size={38}
          />
          <div className='name'>
            <p>Nguyen Thanh Hao</p>
            <p>Administrator</p>
          </div>
          <Popover
            placement='bottomRight'
            content={dropdownAccount}
            trigger='click'
          >
            <div className='icon'>
              <i className='fa-solid fa-chevron-down'></i>
            </div>
          </Popover>
        </div>
      </div>
    </StyleNavbar>
  );
};

export default Navbar;
