import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../../../redux/actions/userAction'
import { connect } from 'react-redux'
import './css/main.css';
import './css/util.css';

const Login = ({login,isAuthenticated}) =>{
    const navigate = useNavigate()
    if(isAuthenticated)
        navigate('/')

    const [credentials,setCredentials] = useState({
        email:'',
        password:''
    })

    const {email,password} = credentials

    const onChangeHandler = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }


    const onSubmitHandler = (e) => {
        e.preventDefault()
        login(email,password)
        navigate('/')
    }

    return(
        <div>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                        <form className="login100-form validate-form flex-sb flex-w" onSubmit={(e)=>onSubmitHandler(e)}>
                            <span className="login100-form-title p-b-32">
                                Account Login
                            </span>
                            <span className="txt1 p-b-11">
                                Username
                            </span>
                            <div className="wrap-input100 validate-input m-b-36" data-validate="Username is required">
                                <input className="input100" type="text" onChange={(e)=>onChangeHandler(e)} value={email} name="email" required/>
                                <span className="focus-input100"></span>
                            </div>
                            <span className="txt1 p-b-11">
                                Password
                            </span>
                            <div className="wrap-input100 validate-input m-b-12" data-validate="Password is required">
                                <span className="btn-show-pass">
                                    <i className="fa fa-eye"></i>
                                </span>
                                <input className="input100" type="password" onChange={(e)=>onChangeHandler(e)} value={password} name="password" required/>
                                <span className="focus-input100"></span>
                            </div>
                            <div className="flex-sb-m w-full p-b-48">
                                <div className="contact100-form-checkbox">
                                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                                    <label className="label-checkbox100" htmlFor="ckb1">
                                        Remember me
                                    </label>
                                </div>
                                <div>
                                    <a href="/forgot" className="txt3">
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Login
                                </button>
                                <button className="login100-form-btn">
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="dropDownSelect1"></div>
        </div>
    )
}

const mapStateToProps = state=>({
    isAuthenticated: state.userReducer.isAuthenticated
})

export default connect(mapStateToProps,{login})(Login);