import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <div>
        <main className="outlet">
          <Outlet />
        </main>
      </div>
      <Footer>Footer</Footer>
    </>
  );
};
