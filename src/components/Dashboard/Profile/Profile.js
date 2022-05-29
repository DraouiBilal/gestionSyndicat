import { Fragment, useEffect, useLayoutEffect} from "react";
import Footer from "../../layouts/Footer/Footer";
import Navbar from "../../layouts/Navbar/NavBar"
import Sidebar from "../../layouts/Sidebar/Sidebar";
import useScript from "../../utils/useScript";
import Main from "./Main";

const Profile = () => {
    //bilal ay quitter projet ela hade 
    useScript("https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");
    useScript("https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.6.8-fix/jquery.nicescroll.min.js");
    useScript("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js")
    useScript("assets/js/app.min.js");
    useScript("assets/bundles/summernote/summernote-bs4.js");
    useScript("assets/js/scripts.js");


    return(
        <Fragment>
            {/* <div className="loader" id="loader"></div> */}
            <div id="app">
                <div className="main-wrapper main-wrapper-1">
                <div className="navbar-bg"></div>
                    <Navbar/>
                    <Sidebar/>
                    <Main/>
                    <Footer/>
                </div>
            </div> 
        </Fragment>
    )
}


export default Profile;