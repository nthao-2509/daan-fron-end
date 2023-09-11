import AddProduct from "views/admin/AddProduct";
import ClassManage from "views/admin/ClassManage";
import Customers from "views/admin/Customers";
import HistoryOnline from "views/admin/HistoryOnline";
import ListProduct from "views/admin/ListProduct";
import MainDashboard from "views/admin/MainDashboard";
import Project from "views/admin/Project";
import StudentManage from "views/admin/StudentManage";
import TeacherManage from "views/admin/TeacherManage";

export const RoutesAdmin = [
  {
    title: "Main Menu",
    layout: "/admin",
    views: [
      {
        name: "Quản lý sinh viên",
        path: "student-manage",
        icon: <i className='fa-solid fa-grip'></i>,
        component: <StudentManage />,
      },
      {
        name: "Quản lý giảng viên",
        path: "teacher-manage",
        icon: <i className='fa-solid fa-grip'></i>,
        component: <TeacherManage />,
      },
      {
        name: "Quản lý lớp",
        path: "class-manage",
        icon: <i className='fa-solid fa-grip'></i>,
        component: <ClassManage />,
      },
      {
        name: "Lịch sử hoạt động",
        path: "online-history-manage",
        icon: <i className='fa-solid fa-grip'></i>,
        component: <HistoryOnline />,
      },
      
    ],
  },
  
];
