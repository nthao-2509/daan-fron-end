import React from "react";
import { StyleAdmin } from "./style";
import Sidebar from "components/sidebar";
import { TypeRoutes, TypeUserData, ViewRoutes } from "types/Types";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "components/navbar";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { TeacherClient } from "routes/Teacher.route";

const TeacherLayout = () => {
  const [open, setOpen] = React.useState(true);
  const { user }: { user: TypeUserData } = useSelector(
    (state: RootState) => state.auth
  );
  if (!user) return <Navigate to='/auth/sign-in' />;
  if (user?.userData?.role !== "teacher")
    return <Navigate to='/auth/sign-in' />;
  const getRoutes = (routes: TypeRoutes[]) => {
    return routes.map((route: TypeRoutes, key: number) => {
      if (route.layout === "/teacher") {
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
        routes={TeacherClient}
        open={open}
        onClose={() => setOpen(false)}
      />
      <main>
        <Navbar />
        <div className='content'>
          <Routes>
            {getRoutes(TeacherClient)}
            <Route
              path='/teacher'
              element={<Navigate to='/teacher/class' replace />}
            />
          </Routes>
        </div>
      </main>
    </StyleAdmin>
  );
};

export default TeacherLayout;
