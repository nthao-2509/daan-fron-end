export type ViewRoutes = {
  name: string;
  component: JSX.Element;
  icon: JSX.Element | string | undefined;
  path: string;
  secondary?: boolean;
};

export type TypeRoutes = {
  title: string;
  layout: string;
  views: ViewRoutes[];
};
export type TypeRouteClient = {
  name: string;
  component: JSX.Element;
  icon: JSX.Element | string | undefined;
  path: string;
  layout: string;
  secondary?: boolean;
  views: ViewRoutes[];
};

export interface TypeUser {
  address: string;
  avatar: string;
  birthDay: string;
  cccd: string;
  email: string;
  fullName: string;
  id: number | string;
  idUser: number | string;
  password: string;
  phone: string;
  role: string;
  sex: string;
  username: string;
  active?: number
}
export interface TypeUserData {
  accessToken: string;
  refreshToken: string;
  userData: TypeUser
}
export interface TypeCourseGrade {
    key: string,
    cuoi_ky: string,
    diem_bt: string,
    diem_cc: string,
    diem_chu: string,
    diem_t4: string,
    diem_t10: string,
    diem_tong: string,
    giua_ky: string,
    nameClass: string,
    letterGrades?: string | undefined
}
