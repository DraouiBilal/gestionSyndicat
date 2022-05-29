
const Main = () =>{
    return(
        <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Profile</h1>
            <div className="section-header-br/eadcrumb">
              <div className="br/eadcrumb-item active"><a>Dashboard</a></div>
              <div className="br/eadcrumb-item"><a>Personal</a></div>
              <div className="br/eadcrumb-item">Profile</div>
            </div>
          </div>
          <div className="section-body">
            <div className="row mt-sm-4">
              <div className="col col-md col-lg">
                <div className="card author-box">
                  <div className="card-body">
                    <div className="author-box-center">
                      <img alt="image" src="assets/img/users/user-1.png" className="rounded-circle author-box-picture"/>
                      <div className="clearfix"></div>
                      <div className="author-box-name">
                        <a href="#">Badr Al Achkar</a>
                      </div>
                      <div className="author-box-job">Software Engineer</div>
                    </div>
                    <div className="text-center">
                      <div className="author-box-description">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatum alias molestias
                          minus quod dignissimos.
                        </p>
                      </div>
                      <div className="mb-2 mt-3">
                        <div className="text-small font-weight-bold">Follow Hasan On</div>
                      </div>
                      <a href="#" className="btn btn-social-icon mr-1 btn-facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="btn btn-social-icon mr-1 btn-twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="btn btn-social-icon mr-1 btn-github">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="#" className="btn btn-social-icon mr-1 btn-instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <div className="w-100 d-sm-none"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-md col-lg">
                <div className="card">
                  <div className="card-header">
                    <h4>Personal Details</h4>
                  </div>
                  <div className="card-body">
                    <div className="py-4">
                      <p className="clearfix">
                        <span className="float-left">
                          Birthday
                        </span>
                        <span className="float-right text-muted">
                          30-05-1998
                        </span>
                      </p>
                      <p className="clearfix">
                        <span className="float-left">
                          Phone
                        </span>
                        <span className="float-right text-muted">
                          (0123)123456789
                        </span>
                      </p>
                      <p className="clearfix">
                        <span className="float-left">
                          Mail
                        </span>
                        <span className="float-right text-muted">
                          test@example.com
                        </span>
                      </p>
                      <p className="clearfix">
                        <span className="float-left">
                          Facebook
                        </span>
                        <span className="float-right text-muted">
                          <a href="#">John Deo</a>
                        </span>
                      </p>
                      <p className="clearfix">
                        <span className="float-left">
                          Twitter
                        </span>
                        <span className="float-right text-muted">
                          <a href="#">@johndeo</a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-md col-lg">
              <div className="card">
                <div className="padding-20">
                  <ul className="nav nav-tabs" id="myTab2" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab2" data-toggle="tab" href="#about" role="tab"
                        aria-selected="true">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="profile-tab2" data-toggle="tab" href="#settings" role="tab"
                        aria-selected="false">Setting</a>
                    </li>
                  </ul>
                  <div className="tab-content tab-bordered" id="myTab3Content">
                    <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="home-tab2">
                      <div className="row">
                        <div className="col-md-3 col-6 b-r">
                          <strong>Full Name</strong>
                          <br/>
                          <p className="text-muted">Emily Smith</p>
                        </div>
                        <div className="col-md-3 col-6 b-r">
                          <strong>Mobile</strong>
                          <br/>
                          <p className="text-muted">(123) 456 7890</p>
                        </div>
                        <div className="col-md-3 col-6 b-r">
                          <strong>Email</strong>
                          <br/>
                          <p className="text-muted">johndeo@example.com</p>
                        </div>
                        <div className="col-md-3 col-6">
                          <strong>Location</strong>
                          <br/>
                          <p className="text-muted">India</p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="profile-tab2">
                      <form method="post" className="needs-validation">
                        <div className="card-header">
                          <h4>Edit Profile</h4>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="form-group col-md-6 col-12">
                              <label>First Name</label>
                              <input type="text" className="form-control" value="John"/>
                              <div className="invalid-feedback">
                                Please fill in the first name
                              </div>
                            </div>
                            <div className="form-group col-md-6 col-12">
                              <label>Last Name</label>
                              <input type="text" className="form-control" value="Deo"/>
                              <div className="invalid-feedback">
                                Please fill in the last name
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group col-md-7 col-12">
                              <label>Email</label>
                              <input type="email" className="form-control" value="test@example.com"/>
                              <div className="invalid-feedback">
                                Please fill in the email
                              </div>
                            </div>
                            <div className="form-group col-md-5 col-12">
                              <label>Phone</label>
                              <input type="tel" className="form-control" value=""/>
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group col-12">
                              <label>Bio</label>
                              <textarea
                                className="form-control summernote-simple">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatum alias molestias minus quod dignissimos.</textarea>
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group mb-0 col-12">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" name="remember" className="custom-control-input" id="newsletter"/>
                                <label className="custom-control-label" for="newsletter">Subscribe to newsletter</label>
                                <div className="text-muted form-text">
                                  You will get new information about products, offers and promotions
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer text-right">
                          <button className="btn btn-primary">Save Changes</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="settingSidebar">
          <a href="javascript:void(0)" className="settingPanelToggle"> <i className="fa fa-spin fa-cog"></i>
          </a>
          <div className="settingSidebar-body ps-container ps-theme-default">
            <div className=" fade show active">
              <div className="setting-panel-header">Setting Panel
              </div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Select Layout</h6>
                <div className="selectgroup layout-color w-50">
                  <label className="selectgroup-item">
                    <input type="radio" name="value" value="1" className="selectgroup-input select-layout" checked/>
                    <span className="selectgroup-button">Light</span>
                  </label>
                  <label className="selectgroup-item">
                    <input type="radio" name="value" value="2" className="selectgroup-input select-layout"/>
                    <span className="selectgroup-button">Dark</span>
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Sidebar Color</h6>
                <div className="selectgroup selectgroup-pills sidebar-color">
                  <label className="selectgroup-item">
                    <input type="radio" name="icon-input" value="1" className="selectgroup-input select-sidebar"/>
                    <span className="selectgroup-button selectgroup-button-icon" data-toggle="tooltip"
                      data-original-title="Light Sidebar"><i className="fas fa-sun"></i></span>
                  </label>
                  <label className="selectgroup-item">
                    <input type="radio" name="icon-input" value="2" className="selectgroup-input select-sidebar" checked/>
                    <span className="selectgroup-button selectgroup-button-icon" data-toggle="tooltip"
                      data-original-title="Dark Sidebar"><i className="fas fa-moon"></i></span>
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
                    <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"
                      id="mini_sidebar_setting"/>
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
                        <div className="progress-bar l-bg-green" role="progressbar" data-width="80%" aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100"></div>
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
                        <div className="progress-bar l-bg-orange" role="progressbar" data-width="58%" aria-valuenow="25"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <span className="progress-description">
                        <small>Highly Loaded</small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-4 p-3 align-center rt-sidebar-last-ele">
                <a href="#" className="btn btn-icon icon-left btn-primary btn-restore-theme">
                  <i className="fas fa-undo"></i> Restore Default
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Main;