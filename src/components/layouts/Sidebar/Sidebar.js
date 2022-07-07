import { logout } from '../../../redux/actions/userAction'
import { connect } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

const Sidebar = ({logout, isAuthenticated,loading,user}) =>{

    const navigate = useNavigate()
    useEffect(()=> {
      if(!loading && !isAuthenticated)
        navigate('/login')
    },[isAuthenticated])
    
    const handleLogout = () => {
      logout()
      navigate('/login')
    }

    return(!loading && isAuthenticated && user!==null && 
        <div className="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <Link to={"/"}>
              <span className="logo-name">Syndicats</span>
            </Link>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Main</li>
            {user.role==='syndicate' && <li className="dropdown">
              <Link to={"/"} className="nav-link">
                <i className="fas fa-home"></i><span>Dashboard</span></Link>
            </li>}
            <li className="dropdown">
              <Link to={"/profile"} className="nav-link"><i className="fas fa-map-signs"></i><span>Profile</span></Link>
            </li>
            {user!==null && user.role==='syndicate' &&<li className="dropdown">
              <Link to={"/proprietes"} className="nav-link"><i className="fas fa-broom"></i><span>Propriétes</span></Link>
            </li>}
            <li className="dropdown">
              <Link to={"/paiement"} className="nav-link"><i className="fas fa-broom"></i><span>Paiement</span></Link>
            </li>
            <li className="dropdown">
              <Link to={"/depenses"} className="nav-link"><i className="fab fa-accusoft"></i><span>Dépenses</span></Link>
            </li>
            <li className="dropdown">
              <Link to={"/annonces"} className="nav-link"><i className="far fa-envelope"></i><span>Annonces</span></Link>
            </li>
            <li className="menu-header">Autres</li>
            <li className="dropdown" onClick={handleLogout}>
              <Link to={"/login"} className="nav-link"><i className="far fas fa-door-open"></i><span>Déconnexion</span></Link>
            </li>
          </ul>
        </aside>
      </div>
    )
}

const mapStateToProps = state=>({
  isAuthenticated: state.userReducer.isAuthenticated,
  loading: state.userReducer.loading,
  user: state.userReducer.user
})

export default connect(mapStateToProps,{logout})(Sidebar);