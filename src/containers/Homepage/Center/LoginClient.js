import React, { Component, Fragment } from "react";
import "./LoginClient.scss";

import { connect } from "react-redux";
// import { FormattedMessage } from "react-intl";
import * as actions from "../../../store/actions";
// import { LANGUAGE } from "../../../utils";
import { handleLoginApi } from "../../../services/userService";
import { chengeLanguageApp } from "../../../store/actions";

// import { Button, Modal } from "reactstrap";

import "./LoginClient.scss";

class LoginClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: false,
      email: "",
      password: "",
      errMessage: "",
    };
  }
  componentDidMount() {}
  handeleOnClickchange = () => {
    this.setState({
      signup: !this.state.signup,
    });
  };

  handleonchangeUsername = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleonchangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });

    try {
      let data = await handleLoginApi(this.state.email, this.state.password);
      if (data && data.errcode !== 0) {
        this.setState({
          errMessage: data.message,
        });
      }
      if (data && data.errcode === 0) {
        console.log(data);
        this.props.clientLoginSuccess(data.user);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message,
          });
        }
      }
    }
  };

  handleKeyDown = (event) => {
    if (
      event.key === "Enter" ||
      (event.keyCode === 13 && this.state.email !== "")
    ) {
      this.handleLogin();
    }
  };

  render() {
    let { signup } = this.state;
    return (
      <Fragment>
        <div className="register">
          <h2>
            Fill in the necessary information to book a medical appointment
          </h2>
          <div
            className={
              signup === true ? "container right-panel-active" : "container"
            }
            id="container"
          >
            <div className="form-container sign-up-container">
              <div className="form">
                <h1>Create Account</h1>
                <div className="social-container">
                  <a href="#" className="social">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
              </div>
            </div>
            <div className="form-container sign-in-container">
              <div className="form">
                <h1>Sign in</h1>
                <div className="social-container">
                  <a href="#" className="social">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <span>or use your account</span>
                <input
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={(event) => this.handleonchangeUsername(event)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(event) => this.handleonchangePassword(event)}
                  onKeyDown={(event) => this.handleKeyDown(event)}
                />
                <a href="#">Forgot your password?</a>
                <div className="col-12 error" style={{ color: "red" }}>
                  {this.state.errMessage}
                </div>
                <button
                  onClick={() => {
                    this.handleLogin();
                  }}
                >
                  {" "}
                  Sign In
                </button>
              </div>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button
                    className="ghost"
                    onClick={() => {
                      this.handeleOnClickchange();
                    }}
                  >
                    Sign In
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button
                    className="ghost"
                    onClick={() => {
                      this.handeleOnClickchange();
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>

          <footer>
            <p>
              Created with <i className="fa fa-heart"></i> by
              <a target="_blank" href="https://florin-pop.com">
                Florin Pop
              </a>
              - Read how I created this and how you can join the challenge
              <a
                target="_blank"
                href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
              >
                here
              </a>
              .
            </p>
          </footer>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    schedule: state.admin.schedule,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clientLoginSuccess: (userInfo) =>
      dispatch(actions.clientLoginSuccess(userInfo)),
    fetchAllscheduleStart: (doctorId, date) =>
      dispatch(actions.fetchAllscheduleStart(doctorId, date)),
    changelanguageAppRedux: (language) => dispatch(chengeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginClient);
