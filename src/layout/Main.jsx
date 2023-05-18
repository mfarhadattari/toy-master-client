import { Outlet, useNavigation } from "react-router-dom";
import NavigationBar from "./../pages/Shared/NavigationBar/NavigationBar";
import Footer from "./../pages/Shared/Footer/Footer";
import Loader from "../components/Loader";

const Main = () => {
  const navigation = useNavigation();
  return (
    <div className="min-h-screen w-full flex flex-col justify-between font-space-grotesk">
      <div>
        <NavigationBar></NavigationBar>
        {navigation.state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
