import React from "react";
import { StyleAdmin } from "./style";
import Sidebar from "components/sidebar";
import { TypeRoutes, TypeUserData, ViewRoutes } from "types/Types";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "components/navbar";
import { ClientRoutes } from "routes/ClientRoutes";
import { useSelector } from "react-redux";
import { RootState } from "store";

const AdminLayout = () => {
  const [open, setOpen] = React.useState(true);
  const { user }: { user: TypeUserData } = useSelector(
    (state: RootState) => state.auth
  );
  if (!user) return <Navigate to='/auth/sign-in' />;
  const getRoutes = (routes: TypeRoutes[]) => {
    return routes.map((route: TypeRoutes, key: number) => {
      if (route.layout === "/client") {
        return (
          <>
            {route.views.map((view: ViewRoutes, key: number) => (
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
        routes={ClientRoutes}
        open={open}
        onClose={() => setOpen(false)}
      />
      <main>
        <Navbar />
        <div className='content'>
          <Routes>
            {getRoutes(ClientRoutes)}
            <Route
              path='/'
              element={<Navigate to='/client/calendar' replace />}
            />
          </Routes>
        </div>
      </main>
    </StyleAdmin>
  );
};

export default AdminLayout;
