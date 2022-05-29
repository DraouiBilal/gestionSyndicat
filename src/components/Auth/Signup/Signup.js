
import './css/main.css';
import background from "./images/bg.jpg"

const Signup = () =>{
    return(
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wrap d-md-flex">
                            <div className="text-wrap p-4 p-lg-5 d-flex img d-flex align-items-end"
                                style={{backgroundImage: `url(${background})`}}>
                                <div className="text w-100">
                                    <h2 className="mb-4">Welcome to signup form</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                        Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                            <div className="login-wrap p-4 p-md-5">
                                <h3 className="mb-3">Create an account</h3>
                                <form action="#" className="signup-form">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group d-flex align-items-center">
                                                <label className="label" for="name">Full Name</label>
                                                <input type="text" className="form-control" placeholder="Full Name" required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group d-flex align-items-center">
                                                <label className="label" for="email">Email Address</label>
                                                <input type="email" className="form-control" placeholder="johndoe@email.com"
                                                    required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group d-flex align-items-center">
                                                <label className="label" for="phone">Phone no.</label>
                                                <input type="number" className="form-control" placeholder="+01" required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group d-flex align-items-center">
                                                <label className="label" for="password">Password</label>
                                                <input type="password" className="form-control" placeholder="Password" required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group d-flex align-items-center">
                                                <label className="label" for="website">Address</label>
                                                <input type="text" className="form-control" placeholder="Website" required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12 my-4">
                                            <div className="form-group">
                                                <div className="w-100">
                                                    <label className="checkbox-wrap checkbox-primary">I agree all statements in
                                                        terms of service
                                                        <input type="checkbox" checked/>
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group d-md-flex justify-content-center">
                                                <button type="submit" className="btn btn-secondary submit p-3">
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
                                    <p className="mt-4">I'm already a member! <a href="#signin">Sign In</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup;