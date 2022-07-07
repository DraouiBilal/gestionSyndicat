import { connect } from "react-redux";

const Footer = ({isAuthenticated,loading}) =>{
    return(!loading && isAuthenticated &&
        <footer className="main-footer">
            <div className="footer-left">
            Copyright &copy; 2022 <div className="bullet"></div><a href="#">ReState</a>
            </div>
            <div className="footer-right">
            </div>
        </footer>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.userReducer.isAuthenticated,
    loading: state.userReducer.loading,
  })
  

export default connect(mapStateToProps)(Footer)