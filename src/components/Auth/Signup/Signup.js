import "./css/main.css";
import background from "./images/bg.jpg";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../redux/actions/userAction";
import { useState } from "react";
import { setAlert } from "../../../redux/actions/alertAction";

const Signup = ({ auth: { isAuthenticated, loading },signup,setAlert }) => {

  const navigate = useNavigate();

  if(isAuthenticated)
      navigate('/')

  const [formData, setFormData] = useState({
    last_name: "",
    first_name: "",
    email: "",
    phone: "",
    cin: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password === formData.confirmPassword)
      signup(formData);
    else{
      setAlert("test","success")
    }
  };

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="wrap d-md-flex">
              <div
                className="text-wrap p-4 p-lg-5 d-flex img d-flex align-items-end"
                style={{ backgroundImage: `url(${background})` }}
              >
                <div className="text w-100">
                  <h2 className="mb-4">Welcome to signup form</h2>
                  <p>
                    Register here to manage all your properties as a syndicate
                  </p>
                </div>
              </div>
              <div className="login-wrap p-4 p-md-5">
                <h3 className="mb-3">Create an account</h3>
                <form onSubmit={e=>handleSubmit(e)} className="signup-form">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group d-flex align-items-center">
                        <label className="label" for="name">
                          first Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="first Name"
                          name="first_name"
                          value={formData.first_name}
                          required
                          onChange={e=>handleOnChange(e)}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group d-flex align-items-center">
                        <label className="label" for="name">
                          last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="last Name"
                          name="last_name"
                          value={formData.last_name}
                          required
                          onChange={e=>handleOnChange(e)}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group d-flex align-items-center">
                        <label className="label" for="email">
                          Email 
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="johndoe@email.com"
                          name="email"
                          value={formData.email}
                          required
                          onChange={e=>handleOnChange(e)}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group d-flex align-items-center">
                        <label className="label" for="phone">
                          Phone no.
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="628-920-458"
                          name="phone"
                          value={formData.phone}
                          required
                          onChange={e=>handleOnChange(e)}
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-12">
                      <div className="form-group d-flex align-items-center">
                        <label className="label" for="website">
                          CIN
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="CIN"
                          required
                          onChange={e=>handleOnChange(e)}
                          name="cin"
                          value={formData.cin}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group d-flex align-items-center">
                        <label className="label" for="password">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          required
                          onChange={e=>handleOnChange(e)}
                          name="password"
                          value={formData.password}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group d-flex align-items-center">
                        <label className="label" for="password">
                          Confirm
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password"
                          required
                          onChange={e=>handleOnChange(e)}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 my-4"></div>
                    <div className="col-md-12">
                      <div className="form-group d-md-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-secondary submit p-3"
                        >
                          Create an account
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="social-wrap">
                  <p className="or">
                    <span>or</span>
                  </p>
                </div>
                <div className="w-100 text-center">
                  <p className="mt-4">
                    I'm already a member! <a href="#signin">Sign In</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  auth: state.userReducer,
});

export default connect(mapStateToProps, { signup, setAlert })(Signup);
