import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//components
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import Profile from './components/Dashboard/Profile/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/login" element={ <Login/>}/>
        <Route exact path = "/signup" element= {<Signup/>}/>
        <Route exact path = "/profile" element= {<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
