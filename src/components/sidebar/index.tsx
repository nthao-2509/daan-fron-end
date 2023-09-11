import SidebarLinks from "layouts/admin/components/Links";
import React from "react";
import { StyleSidebar } from "./style";
import { TypeRoutes } from "types/Types";

const Sidebar = (props: {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLSpanElement>;
  routes: TypeRoutes[];
}) => {
  const { open, onClose, routes } = props;
  return (
    <StyleSidebar>
      {/* logo */}
      <div className='top'>
        <div className='logo'>
          <img src='/images/logo.png' alt='logo' />
          <p>Evaly</p>
        </div>
        <div className='toggle'>
          <img src='/images/toggle-sidebar.png' alt='toggle' />
        </div>
      </div>
      <ul className='mb-auto pt-1'>
        <SidebarLinks routes={routes} />
      </ul>
    </StyleSidebar>
  );
};

export default Sidebar;
