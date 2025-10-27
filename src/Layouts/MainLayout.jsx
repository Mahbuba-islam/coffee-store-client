import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="max-w-7xl mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;