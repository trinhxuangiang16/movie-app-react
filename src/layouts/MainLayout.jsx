import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <div style={{ height: "100vh" }}>
        <main className="bg-primary">
          <Outlet />
        </main>
      </div>
      <Footer>Footer</Footer>
    </>
  );
};
