import { connect } from "react-redux";


const Navbar = ({isAuthenticated,loading}) =>{
    return(!loading && isAuthenticated && 
        <nav className="navbar navbar-expand-lg main-navbar">
        <div className="form-inline mr-auto">
          <ul className="navbar-nav mr-3">
            <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg collapse-btn"><i
                  className="fas fa-bars"></i></a></li>
            <li><a href="#" className="nav-link nav-link-lg fullscreen-btn">
                <i className="fas fa-expand"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

const mapStateToProps = state => ({
  isAuthenticated: state.userReducer.isAuthenticated,
  loading: state.userReducer.loading,
})

export default connect(mapStateToProps)(Navbar);