import { MainLayout } from "../layouts/MainLayout";
import HomePage from "../features/home/component/HomePage";
import SignInPage from "../features/signIn/component/SignInPage";
import SignUpPage from "../features/signUp/component/SignUpPage";
import DetailPage from "../features/detail/component/DetailPage"; // Import trang chi tiết
import BookingPage from "../features/booking/component/BookingPage"; // Import trang đặt vé

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

      {
        path: "/detail/:id",
        element: <DetailPage />,
      },      
      {
        path: "/ticketroom/:id",
        element: <BookingPage />,
      },
    ],
  },
  {
    path: "*",
    element: <div className="text-center mt-5">404 Not Found</div>,
  },
];