
import './css/main.css';


const Signup = () =>{
    return(
        <section class="ftco-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="wrap d-md-flex">
                            <div class="text-wrap p-4 p-lg-5 d-flex img d-flex align-items-end"
                                style="background-image: url(images/bg.jpg);">
                                <div class="text w-100">
                                    <h2 class="mb-4">Welcome to signup form</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                        Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                            <div class="login-wrap p-4 p-md-5">
                                <h3 class="mb-3">Create an account</h3>
                                <form action="#" class="signup-form">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group d-flex align-items-center">
                                                <label class="label" for="name">Full Name</label>
                                                <input type="text" class="form-control" placeholder="Full Name" required/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group d-flex align-items-center">
                                                <label class="label" for="email">Email Address</label>
                                                <input type="email" class="form-control" placeholder="johndoe@email.com"
                                                    required/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group d-flex align-items-center">
                                                <label class="label" for="phone">Phone no.</label>
                                                <input type="number" class="form-control" placeholder="+01" required/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group d-flex align-items-center">
                                                <label class="label" for="password">Password</label>
                                                <input type="password" class="form-control" placeholder="Password" required/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group d-flex align-items-center">
                                                <label class="label" for="website">Address</label>
                                                <input type="text" class="form-control" placeholder="Website" required/>
                                            </div>
                                        </div>
                                        <div class="col-md-12 my-4">
                                            <div class="form-group">
                                                <div class="w-100">
                                                    <label class="checkbox-wrap checkbox-primary">I agree all statements in
                                                        terms of service
                                                        <input type="checkbox" checked/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group d-md-flex justify-content-center">
                                                <button type="submit" class="btn btn-secondary submit p-3">
                                                    Create an account
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div class="social-wrap">
                                    <p class="or">
                                        <span>or</span>
                                    </p>
                                    <p class="mb-3 text-center">Signup with this services</p>
                                    <p class="social-media d-flex justify-content-center">
                                        <a href="#"
                                            class="social-icon google d-flex align-items-center justify-content-center"><span
                                                class="fa fa-google"></span></a>
                                        <a href="#"
                                            class="social-icon facebook d-flex align-items-center justify-content-center"><span
                                                class="fa fa-facebook"></span></a>
                                        <a href="#"
                                            class="social-icon twitter d-flex align-items-center justify-content-center"><span
                                                class="fa fa-twitter"></span></a>
                                    </p>
                                </div>
                                <div class="w-100 text-center">
                                    <p class="mt-4">I'm already a member! <a href="#signin">Sign In</a></p>
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