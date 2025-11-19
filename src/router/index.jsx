import { MainLayout } from "../layouts/MainLayout";
import HomePage from "../features/home/component/HomePage";
import SignInPage from "../features/signIn/component/SignInPage";
import SignupPage from "../features/signUp/component/SignUpPage";

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
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
];
