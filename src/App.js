import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import setAuthToken from "./utils/setAuthToken";

//components
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import Profile from "./components/Dashboard/Profile/Profile";

//redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./redux/actions/userAction";
import { LOGOUT } from "./redux/types";
import Dashboard from "./components/Dashboard/Statistics/Dashboard";
import Navbar from "./components/layouts/Navbar/NavBar";
import Sidebar from "./components/layouts/Sidebar/Sidebar";
import Footer from "./components/layouts/Footer/Footer";

//utils
import useScript from "./utils/useScript";
import Alert from "./components/layouts/Alert/Alert";

function App() {
  useEffect(() => {
    // check for token in LS
    if (localStorage.getItem("access_token")) {
      setAuthToken(localStorage.getItem("access_token"));
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.getItem("access_token"))
        store.dispatch({ type: LOGOUT });
    });
  }, []);

  useScript("https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");
  useScript(
    "https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.6.8-fix/jquery.nicescroll.min.js"
  );
  useScript(
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"
  );
  useScript("assets/js/app.min.js");
  useScript("assets/bundles/summernote/summernote-bs4.js");
  useScript("assets/js/scripts.js");
  return (
    <Provider store={store}>
      <Router>
        <div className="alert-container">
          <Alert/>
        </div>
        <div className="main-wrapper main-wrapper-1">
          <div className="navbar-bg"></div>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} /> 
            <Route exact path="/" element={<Dashboard />} /> 
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
