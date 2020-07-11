import React, { Component } from 'react'; 
import  { Route, Link } from 'react-router-dom'; 
import logo from './../../assets/images/logo.png'
import cx from "classnames";
import './style.scss';

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
    
      onChange = e => {
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
        return(
            <div className="loginpage-container">
            <div className="logo">
              <img alt="loading" src={logo} height="60" width="60" />
              <span style={{ color: "white" }}> Prydan </span>
            </div>
            <div className="form-widget">
              <h2 className="title t-global">Sign In</h2>
             
              <form onSubmit={this.onSubmit}>
                <div className={cx("clearfix field-wrapper"   )}>
                  <label className={cx("float-left"   )}>
                    <span className={cx("label"  )}>Username</span>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder= "Username" 
                      onFocus={this.onChange}
                      onChange={this.onChange}
                      onBlur={this.onBlurr}
                      autoComplete="off"
                    />
                  </label>
                  <div className="float-right">
                    <span className="helptxt"> </span>
                  </div>
                </div>
                <div className={cx("clearfix field-wrapper" )}>
                  <label className={cx("float-left" )}>
                    <span className={cx("label" )}>Password</span>
                    <input
                      id="password"
                      type= "text" 
                      placeholder="Password"
                      onFocus={this.onChange}
                      onChange={this.onChange}
                      onBlur={this.onBlurr}
                      name="password"
                      autoComplete="off"
                    />
                  </label>
                  <div className="float-right">
                    <span className="helptxt"> </span>
                    <span
                      style={{ position: "absolute", right: 0 }}
                      className="show-hide-toggle"
                      role="presentation"
                      onClick={this.togglePassword}
                    >
                      
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