import { Outlet } from "react-router-dom";
import NavigationBar from "./../pages/Shared/NavigationBar/NavigationBar";
import Footer from "./../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between font-space-grotesk">
      <div>
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
