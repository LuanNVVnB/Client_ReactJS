import React, { Component, Fragment } from "react";
import "./BookingDoctor.scss";

import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import * as actions from "../../../store/actions";
import { LANGUAGE } from "../../../utils";
import { chengeLanguageApp } from "../../../store/actions";

// import { Button, Modal } from "reactstrap";

import "./BookingDoctor.scss";

class BookingDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: false,
    };
  }
  componentDidMount() {}
  handeleOnClickchange = () => {
    this.setState({
      signup: !this.state.signup,
    });
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
              <form action="#">
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
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form action="#">
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
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
              </form>
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
    fetchAllscheduleStart: (doctorId, date) =>
      dispatch(actions.fetchAllscheduleStart(doctorId, date)),
    changelanguageAppRedux: (language) => dispatch(chengeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingDoctor);
