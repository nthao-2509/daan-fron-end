import { message } from "antd";
import { UrlServer } from "config/UrlServer";
import { Authorization } from "helpers/queryHelper";
import AdminLayout from "layouts/admin";
import React from "react";
import AuthLayout from "layouts/auth";
import ClientLayout from "layouts/clients";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { RootState } from "store";
import { TypeUserData } from "types/Types";
import CourseGradesView from "views/CourseGrades.view";
import TeacherLayout from "layouts/teacher";
function App() {
  const [replaceRoute, setReplaceRoute] = React.useState<string>("");
  message.config({
    top: 100,
    duration: 2,
    maxCount: 1,
    rtl: true,
    prefixCls: "my-message",
  });
  const { user }: { user: TypeUserData } = useSelector(
    (state: RootState) => state.auth
  );
  const checkAuthorization = React.useCallback(async (token: string) => {
    const result: any = await Authorization(
      `${UrlServer}/auth/authorization`,
      token
    );
    if (result?.status !== 200) return setReplaceRoute("/auth/sign-in");
    setReplaceRoute("/client");
  }, []);
  React.useEffect(() => {
    if (!user) return setReplaceRoute("/auth/sign-in");
    checkAuthorization(user.accessToken);
  }, [checkAuthorization, user]);
  return (
    <Routes>
      <Route path='auth/*' element={<AuthLayout />} />
      <Route path='admin/*' element={<AdminLayout />} />
      <Route path='client/*' element={<ClientLayout />} />
      <Route path='teacher/*' element={<TeacherLayout />} />
      <Route path='/result/:id/:token' element={<CourseGradesView />} />
      <Route path='/' element={<Navigate to={replaceRoute} replace />} />
      {/* 404 */}
    </Routes>
  );
}

export default App;
