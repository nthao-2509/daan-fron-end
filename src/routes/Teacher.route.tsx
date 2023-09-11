import ClassView from "views/teacher/Class.view";

export const TeacherClient = [
  {
    title: "Main",
    layout: "/teacher",
    views: [
      {
        name: "Class",
        path: "class",
        icon: <i className='fa-solid fa-grip'></i>,
        component: <ClassView />,
      },
    ],
  },
];
