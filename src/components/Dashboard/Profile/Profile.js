import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { update } from "../../../redux/actions/userAction";

const Profile = ({ auth: { isAuthenticated, user, loading }, update }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    cin: "",
    password: "",
  });

  useEffect(() => {
    if (user !== null)
      setFormData({
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        email: user.email,
        cin: user.cin,
        password: "",
      });
  }, [user]);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    update(formData);
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
                    onSubmit={(e) => handleOnSubmit(e)}
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
                              handleOnChange(e);
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
                              handleOnChange(e);
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
                              handleOnChange(e);
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
                              handleOnChange(e);
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
                              handleOnChange(e);
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
                              handleOnChange(e);
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
                      <a
                        className="nav-link active"
                        id="home-tab2"
                        data-toggle="tab"
                        href="#about"
                        role="tab"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab2"
                        data-toggle="tab"
                        href="#settings"
                        role="tab"
                        aria-selected="false"
                      >
                        Setting
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content tab-bordered" id="myTab3Content">
                    <div
                      className="tab-pane fade show active"
                      id="about"
                      role="tabpanel"
                      aria-labelledby="home-tab2"
                    >
                      <div className="row">
                        <div className="col-md-3 col-6 b-r">
                          <strong>Full Name</strong>
                          <br />
                          <p className="text-muted">Emily Smith</p>
                        </div>
                        <div className="col-md-3 col-6 b-r">
                          <strong>Mobile</strong>
                          <br />
                          <p className="text-muted">(123) 456 7890</p>
                        </div>
                        <div className="col-md-3 col-6 b-r">
                          <strong>Email</strong>
                          <br />
                          <p className="text-muted">johndeo@example.com</p>
                        </div>
                        <div className="col-md-3 col-6">
                          <strong>Location</strong>
                          <br />
                          <p className="text-muted">India</p>
                        </div>
                      </div>
                    </div>
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
        <div className="settingSidebar">
          <a href="javascript:void(0)" className="settingPanelToggle">
            {" "}
            <i className="fa fa-spin fa-cog"></i>
          </a>
          <div className="settingSidebar-body ps-container ps-theme-default">
            <div className=" fade show active">
              <div className="setting-panel-header">Setting Panel</div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Select Layout</h6>
                <div className="selectgroup layout-color w-50">
                  <label className="selectgroup-item">
                    <input
                      type="radio"
                      name="value"
                      value="1"
                      className="selectgroup-input select-layout"
                      checked
                    />
                    <span className="selectgroup-button">Light</span>
                  </label>
                  <label className="selectgroup-item">
                    <input
                      type="radio"
                      name="value"
                      value="2"
                      className="selectgroup-input select-layout"
                    />
                    <span className="selectgroup-button">Dark</span>
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Sidebar Color</h6>
                <div className="selectgroup selectgroup-pills sidebar-color">
                  <label className="selectgroup-item">
                    <input
                      type="radio"
                      name="icon-input"
                      value="1"
                      className="selectgroup-input select-sidebar"
                    />
                    <span
                      className="selectgroup-button selectgroup-button-icon"
                      data-toggle="tooltip"
                      data-original-title="Light Sidebar"
                    >
                      <i className="fas fa-sun"></i>
                    </span>
                  </label>
                  <label className="selectgroup-item">
                    <input
                      type="radio"
                      name="icon-input"
                      value="2"
                      className="selectgroup-input select-sidebar"
                      checked
                    />
                    <span
                      className="selectgroup-button selectgroup-button-icon"
                      data-toggle="tooltip"
                      data-original-title="Dark Sidebar"
                    >
                      <i className="fas fa-moon"></i>
                    </span>
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Color Theme</h6>
                <div className="theme-setting-options">
                  <ul className="choose-theme list-unstyled mb-0">
                    <li title="white" className="active">
                      <div className="white"></div>
                    </li>
                    <li title="cyan">
                      <div className="cyan"></div>
                    </li>
                    <li title="black">
                      <div className="black"></div>
                    </li>
                    <li title="purple">
                      <div className="purple"></div>
                    </li>
                    <li title="orange">
                      <div className="orange"></div>
                    </li>
                    <li title="green">
                      <div className="green"></div>
                    </li>
                    <li title="red">
                      <div className="red"></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <div className="theme-setting-options">
                  <label>
                    <span className="control-label p-r-20">Mini Sidebar</span>
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox"
                      className="custom-switch-input"
                      id="mini_sidebar_setting"
                    />
                    <span className="custom-switch-indicator"></span>
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <div className="theme-setting-options">
                  <div className="disk-server-setting m-b-20">
                    <p>Disk Space</p>
                    <div className="sidebar-progress">
                      <div className="progress" data-height="5">
                        <div
                          className="progress-bar l-bg-green"
                          role="progressbar"
                          data-width="80%"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span className="progress-description">
                        <small>26% reing</small>
                      </span>
                    </div>
                  </div>
                  <div className="disk-server-setting">
                    <p>Server Load</p>
                    <div className="sidebar-progress">
                      <div className="progress" data-height="5">
                        <div
                          className="progress-bar l-bg-orange"
                          role="progressbar"
                          data-width="58%"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span className="progress-description">
                        <small>Highly Loaded</small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-4 p-3 align-center rt-sidebar-last-ele">
                <a
                  href="#"
                  className="btn btn-icon icon-left btn-primary btn-restore-theme"
                >
                  <i className="fas fa-undo"></i> Restore Default
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  auth: state.userReducer,
});

export default connect(mapStateToProps, { update })(Profile);
