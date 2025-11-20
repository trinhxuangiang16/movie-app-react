import { MainLayout } from "../layouts/MainLayout";
import HomePage from "../features/home/component/HomePage";
import SignInPage from "../features/signIn/component/SignInPage";
import SignUpPage from "../features/signUp/component/SignUpPage";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
];
