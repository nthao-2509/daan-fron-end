import AcademicResultView from "views/clients/AcademicResult.view";
import Calendar from "views/clients/Calendar.view";

export const ClientRoutes = [
  {
    title: "Main",
    layout: "/client",
    views: [
      {
        name: "Calendar",
        path: "calendar",
        icon: <i className='fa-solid fa-grip'></i>,
        component: <Calendar />,
      },
      {
        name: "Academic Results",
        path: "academic-results",
        icon: <i className='fa-solid fa-list-check'></i>,
        component: <AcademicResultView />,
      },
    ],
  },
];
