import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
import { divide } from "lodash";
import { Fragment } from "react";
// import * as userservice from "../../services/userService";
import { handleLoginApi } from "../../services/userService";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isshowpassword: false,
      errMessage: "",
    };
  }
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
      if (data && data.errcode != 0) {
        this.setState({
          errMessage: data.message,
        });
      }
      if (data && data.errcode == 0) {
        console.log(data);
        this.props.userLoginSuccess(data.user);
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

  handleShowHidePassword = () => {
    this.setState({
      isshowpassword: !this.state.isshowpassword,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="divF">
          <div className="form-login">
            <div className="frontpager">Sign Up</div>
            <div className="form-field">
              <input
                placeholder=" "
                type="text"
                className="form-input"
                value={this.state.email}
                onChange={(event) => this.handleonchangeUsername(event)}
              ></input>
              <label for="name" className="form-label" form="form-label">
                Name
              </label>
            </div>
            <div className="form-field">
              <input
                placeholder=" "
                className="form-input"
                value={this.state.password}
                type={this.state.isshowpassword ? "text" : "password"}
                onChange={(event) => this.handleonchangePassword(event)}
              ></input>
              <label for="name" className="form-label" form="form-label">
                Password
              </label>
              <span
                onClick={() => {
                  this.handleShowHidePassword();
                }}
              >
                <i
                  className={
                    this.state.isshowpassword
                      ? "far fa-eye"
                      : "far fa-eye-slash"
                  }
                ></i>
              </span>
            </div>
            <div className="col-12 error" style={{ color: "red" }}>
              {this.state.errMessage}
            </div>

            <button
              className="form-btn"
              onClick={() => {
                this.handleLogin();
              }}
            >
              Login
            </button>
            <div className="form-register">
              <span>Forgot your password?</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // adminLoginSuccess: (adminInfo) =>
    //   dispatch(actions.adminLoginSuccess(adminInfo)),
    // userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
