import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";


const Root = () => {
    return (
        <div>
            {/* navbar */}
           <div className="container mx-auto space-x-7">
           <Navbar></Navbar>
            <Outlet></Outlet>
           </div>

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Root;