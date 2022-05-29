

const Sidebar = () =>{
    return(
        <div className="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a href="index.html">
              <span className="logo-name">Syndicats</span>
            </a>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Main</li>
            <li className="dropdown">
              <a href="index.html" className="nav-link">
                <i className="fas fa-home"></i><span>Dashboard</span></a>
            </li>
            <li className="dropdown active">
              <a href="profile.html" className="nav-link"><i className="fas fa-map-signs"></i><span>Profile</span></a>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link"><i className="fas fa-broom"></i><span>Propriétaires</span></a>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link"><i className="fab fa-accusoft"></i><span>Dépenses</span></a>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link"><i className="far fa-envelope"></i><span>Annonces</span></a>
            </li>
            <li className="menu-header">Autres</li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i className="far fas fa-door-open"></i><span>Déconnexion</span></a>
            </li>
          </ul>
        </aside>
      </div>
    )
}

export default Sidebar;