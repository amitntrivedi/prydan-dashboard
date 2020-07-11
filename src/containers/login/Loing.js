import React, { Component } from 'react'; 
import  { Route, Link } from 'react-router-dom'; 
import logo from './../../assets/images/logo.png'
import cx from "classnames";
import './style.scss';
import If from './../../components/If';

class Login extends Component 
{
    state = {
        showPassword: false,
        email: {
          value: "",
          isFocused: false,
          error: ""
        },
        password: {
          value: "",
          isFocused: false,
          error: ""
        },
        formError: ""
    };
    onSubmit = e => {
        e.preventDefault();
        const { email, password } = e.target.elements;
         
    };
    
    inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({
          [name]: {
            value,
            isFocused: true,
            error: !value ? "required" : ""
          }
        });
      };
    
      onBlurr = e => {
        const { name, value } = e.target;
        this.setState({
          [name]: {
            value,
            isFocused: false,
            error: this.state[name].error
          }
        });
      };
    
      togglePassword = () => {
        this.setState({
          showPassword: !this.state.showPassword
        });
      };
    

    render() {
      const { showPassword, email, password, formError } = this.state;
        return(
            <div className="loginpage-container">
            <div className="logo">
              <img alt="loading" src={logo} height="32" width="139" />
              <span style={{ color: "white" }}> Prydan </span>
            </div>
            <div className="form-widget">
              <h2 className="title t-global">Sign In</h2>
              <If condition={formError}>
                <span className="form-error">{formError}</span>
              </If>
              <form onSubmit={this.onSubmit}>
                <div className={cx("clearfix field-wrapper" , { "label-active": email.isFocused }  )}>
                  <label className={cx("float-left" ,  { focused: email.isFocused }  )}>
                    <span className={cx("label" ,  { focused: email.isFocused } )}>Username</span>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder= "Username" 
                      onFocus={this.inputChangeHandler  }
                      onChange={this.inputChangeHandler }
                      onBlur={this.onBlurr}
                      autoComplete="off"
                    />
                  </label>
                  <div className="float-right">
                    <span className="helptxt"> {email.error}</span>
                  </div>
                </div>
                <div className={cx("clearfix field-wrapper" , { "label-active": password.isFocused } )}>
                  <label className={cx("float-left" ,{ focused: password.isFocused })}>
                    <span className={cx("label" , { focused: password.isFocused })}>Password</span>
                    <input
                      id="password"
                      type= {showPassword ? "text" : "password"}
                      placeholder="Password"
                      onFocus={this.inputChangeHandler }
                      onChange={this.inputChangeHandler }
                      onBlur={this.onBlurr}
                      name="password"
                      autoComplete="off"
                    />
                  </label>
                  <div className="float-right">
                    <span className="helptxt">{password.error} </span>
                    <span
                      style={{ position: "absolute", right: 0 }}
                      className="show-hide-toggle"
                      role="presentation"
                      onClick={this.togglePassword}
                    >
                        {showPassword ? (
                    <i className="fa fa-eye" style={{ cursor: "pointer", fontSize: "15px" }} title="Show Password" />
                  ) : (
                    <i
                      className="fa fa-eye-slash"
                      style={{ cursor: "pointer", fontSize: "15px" }}
                      title="Show Password"
                    />
                  )}
                      
                    </span>
                  </div>
                </div>
                <div className="link-wrapper clearfix">
                  <Link to="/forgot-password" className="forgot-password float-right t-global">
                    Forgot your password?
                  </Link>
                </div>
                <button className="button bg-primary-gradient" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        ) ; 

    } 
}

export default Login; 