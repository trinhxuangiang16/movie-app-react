import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="outlet">
        <Outlet />
      </main>
      <Footer>Footer</Footer>
    </>
  );
};
