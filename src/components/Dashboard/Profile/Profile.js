import { useRef } from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { registerProprietaire, update } from "../../../redux/actions/userAction";

const Profile = ({ auth: { isAuthenticated, user, loading }, update,registerProprietaire }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    cin: "",
    password: "",
    users: [],
  });

  const [usersData, setUsersData] = useState({
    full_name: "",
    phone: "",
    email: "",
    cin: ""
  })

  const propriete = useRef();

  useEffect(() => {
    if (propriete.current) propriete.current.click();
  }, [propriete.current]);

  useEffect(() => {
    if (user !== null) {
      setFormData({
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        email: user.email,
        cin: user.cin,
        users: user.users,
        password: "",
      });
    }
  }, [user]);

  const handleFormDataOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUsersDataOnChange = (e) => {
    setUsersData({ ...usersData, [e.target.name]: e.target.value });
  };

  const handleFormDataOnSubmit = (e) => {
    e.preventDefault();
    update(formData);
  };

  const handleUsersDataOnSubmit = (e) => {
    e.preventDefault();
    registerProprietaire(usersData);
  };

  return (
    !loading && (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Profile</h1>
          </div>
          <div className="section-body">
            <div className="row mt-sm-4">
              <div className="col col-md col-lg">
                <div className="card author-box">
                  <div className="card-body">
                    <div className="author-box-center">
                      <img
                        alt="image"
                        src="assets/img/users/user-1.png"
                        className="rounded-circle author-box-picture"
                      />
                      <div className="clearfix"></div>
                      <div className="author-box-name">
                        <a href="#">{`${user.last_name} ${user.first_name}`}</a>
                      </div>
                      <div className="author-box-job">{user.role}</div>
                    </div>
                    <div className="py-4">
                      <p className="clearfix">
                        <span className="float-left">CIN</span>
                        <span className="float-right text-muted">
                          {user.cin}
                        </span>
                      </p>
                      <p className="clearfix">
                        <span className="float-left">Phone</span>
                        <span className="float-right text-muted">
                          {`0${user.phone.replaceAll("-", "")}`}
                        </span>
                      </p>
                      <p className="clearfix">
                        <span className="float-left">Email</span>
                        <span className="float-right text-muted">
                          {user.email}
                        </span>
                      </p>
                      <p className="clearfix">
                        <span className="float-left">Account verified at</span>
                        <span className="float-right text-muted">
                          {new Date(user.email_verified_at).toLocaleString(
                            "fr-FR"
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-md col-lg">
                <div className="card">
                  <form
                    method="post"
                    className="needs-validation"
                    onSubmit={(e) => handleFormDataOnSubmit(e)}
                  >
                    <div className="card-header">
                      <h4>Edit Profile</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="form-group col-md-6 col-12">
                          <label>First Name</label>
                          <input
                            type="text"
                            onChange={(e) => {
                              handleFormDataOnChange(e);
                            }}
                            name="first_name"
                            className="form-control"
                            value={formData.first_name}
                          />
                          <div className="invalid-feedback">
                            Please fill in the first name
                          </div>
                        </div>
                        <div className="form-group col-md-6 col-12">
                          <label>Last Name</label>
                          <input
                            type="text"
                            onChange={(e) => {
                              handleFormDataOnChange(e);
                            }}
                            name="last_name"
                            className="form-control"
                            value={formData.last_name}
                          />
                          <div className="invalid-feedback">
                            Please fill in the last name
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6 col-12">
                          <label>Email</label>
                          <input
                            type="email"
                            onChange={(e) => {
                              handleFormDataOnChange(e);
                            }}
                            name="email"
                            className="form-control"
                            value={formData.email}
                          />
                          <div className="invalid-feedback">
                            Please fill in the email
                          </div>
                        </div>
                        <div className="form-group col-md-6 col-12">
                          <label>Phone</label>
                          <input
                            type="tel"
                            onChange={(e) => {
                              handleFormDataOnChange(e);
                            }}
                            name="phone"
                            className="form-control"
                            value={formData.phone}
                          />
                        </div>
                        <div className="form-group col-md-6 col-12">
                          <label>CIN</label>
                          <input
                            type="text"
                            onChange={(e) => {
                              handleFormDataOnChange(e);
                            }}
                            name="cin"
                            className="form-control"
                            value={formData.cin}
                          />
                        </div>
                        <div className="form-group col-md-6 col-12">
                          <label>Password</label>
                          <input
                            type="password"
                            onChange={(e) => {
                              handleFormDataOnChange(e);
                            }}
                            name="password"
                            className="form-control"
                            value={formData.password}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-right">
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col col-md col-lg">
              <div className="card">
                <div className="padding-20">
                  <ul className="nav nav-tabs" id="myTab2" role="tablist">
                    <li className="nav-item">
                      <span
                        className="nav-link active"
                        id="home-tab2"
                        data-toggle="tab"
                        href="#about"
                        role="tab"
                        aria-selected="true"
                        ref={propriete}
                      >
                        Les proprietaires
                      </span>
                    </li>
                  </ul>
                  <div className="tab-content tab-bordered" id="myTab3Content">
                    <form
                      className="tab-pane fade show active"
                      id="about"
                      role="tabpanel"
                      aria-labelledby="home-tab2"
                      onSubmit={(e)=>handleUsersDataOnSubmit(e)}
                    >
                      <div className="row">
                        <div className="col-md-3 col-6 b-r">
                          <strong>Full Name</strong>
                          <br />
                          {user.users.map((user) => (
                            <p className="text-muted">
                              {user.last_name + " " + user.first_name}
                            </p>
                          ))}
                          <input
                            type="text"
                            onChange={(e) => {
                              handleUsersDataOnChange(e);
                            }}
                            name="full_name"
                            className="form-control"
                            value={usersData.full_name}
                          />
                        </div>
                        <div className="col-md-3 col-6 b-r">
                          <strong>Mobile</strong>
                          <br />
                          {user.users.map((user) => (
                            <p className="text-muted">{user.phone}</p>
                          ))}{" "}
                          <input
                            type="text"
                            onChange={(e) => {
                              handleUsersDataOnChange(e);
                            }}
                            name="phone"
                            className="form-control"
                            value={usersData.phone}
                          />
                        </div>
                        <div className="col-md-3 col-6 b-r">
                          <strong>Email</strong>
                          <br />
                          {user.users.map((user) => (
                            <p className="text-muted">{user.email}</p>
                          ))}{" "}
                          <input
                            type="text"
                            onChange={(e) => {
                              handleUsersDataOnChange(e);
                            }}
                            name="email"
                            className="form-control"
                            value={usersData.email}
                          />
                        </div>
                        <div className="col-md-3 col-6">
                          <strong>CIN</strong>
                          <br />
                          {user.users.map((user) => (
                            <p className="text-muted">{user.cin}</p>
                          ))}{" "}
                          <input
                            type="text"
                            onChange={(e) => {
                              handleUsersDataOnChange(e);
                            }}
                            name="cin"
                            className="form-control"
                            value={usersData.cin}
                          />
                        </div>
                      </div>
                      <div className="card-footer text-right">
                        <button type="submit" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </form>
                    <div
                      className="tab-pane fade"
                      id="settings"
                      role="tabpanel"
                      aria-labelledby="profile-tab2"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  auth: state.userReducer,
});

export default connect(mapStateToProps, { update,registerProprietaire })(Profile);
