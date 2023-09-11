import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RouteAuth } from "routes/AuthRoutes";
import { TypeRoutes, ViewRoutes } from "types/Types";

const AuthLayout = () => {
  const getRoutes = (routes: TypeRoutes[]) => {
    return routes.map((props: TypeRoutes, key: number) => {
      if (props.layout === "/auth") {
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
    <div>
      <Routes>
        {getRoutes(RouteAuth)}
        <Route path='/' element={<Navigate to='/auth/sign-in' replace />} />
      </Routes>
    </div>
  );
};

export default AuthLayout;
