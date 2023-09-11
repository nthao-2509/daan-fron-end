import React from "react";
import { StyleAdmin } from "./style";
import Sidebar from "components/sidebar";
import { TypeRoutes, TypeUserData, ViewRoutes } from "types/Types";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "components/navbar";
import { RoutesAdmin } from "routes";
import { useSelector } from "react-redux";
import { RootState } from "store";

const AdminLayout = () => {
  const [open, setOpen] = React.useState(true);
  const { user }: { user: TypeUserData } = useSelector(
    (state: RootState) => state.auth
    );
    console.log("🚀 ~ file: index.tsx:14 ~ AdminLayout ~ user:", user)
  if (!user) return <Navigate to='/auth/sign-in' />;
  if (user.userData.role !== 'admin') {
    const role = user.userData.role
    console.log("🚀 ~ file: index.tsx:19 ~ AdminLayout ~ role:", role)
    return <Navigate to={`${role === 'student' ? '/client' : role === 'teacher' ? '/teacher' : '/auth/sign-in'}`} 
    />
  }
  const getRoutes = (routes: TypeRoutes[]) => {
    return routes.map((props: TypeRoutes, key: number) => {
      if (props.layout === "/admin") {
        return (
          <>
            {props.views.map((view: ViewRoutes, key: number) => (
              <Route
                path={`/${view.path}`}
                element={view.component}
                key={key}
              />
            ))}
          </>
        );
      } else {
        return null;
      }
    });
  };
  return (
    <StyleAdmin>
      <Sidebar
        routes={RoutesAdmin}
        open={open}
        onClose={() => setOpen(false)}
      />
      <main>
        <Navbar />
        <div className='content'>
          <Routes>
            {getRoutes(RoutesAdmin)}
            <Route
              path='/'
              element={<Navigate to='/admin/dashboard' replace />}
            />
          </Routes>
        </div>
      </main>
    </StyleAdmin>
  );
};

export default AdminLayout;
