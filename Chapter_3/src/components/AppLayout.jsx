import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

  const AppLayout = () => {
    


    return (
      <div className=" p-3">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };

  export default AppLayout;