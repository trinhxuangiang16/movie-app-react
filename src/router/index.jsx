import { MainLayout } from "../layouts/MainLayout";
import HomePage from "../features/home/component/HomePage";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
];
