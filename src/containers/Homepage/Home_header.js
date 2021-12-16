import React, { Component, Fragment } from "react";
import "./Home_header.scss";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { LANGUAGE } from "../../utils";
import { chengeLanguageApp } from "../../store/actions";
import { Link } from "react-router-dom";
import * as actions from "../../store/actions";

class Home_header extends Component {
  changeLanguage = (language) => {
    this.props.changelanguageAppRedux(language);
  };
  componentDidMount() {}

  render() {
    let { clientInfo, processLogout } = this.props;
    console.log("type ", typeof this.props.language);
    return (
      <Fragment>
        <div className="header">
          <div className="header-item">
            <i class="fas fa-bars"></i>
            <div className="header-logo">
              <div className="name_logo">
                <h3>We</h3>
                <span>
                  <h3>Care.</h3>
                  <i class="fab fa-amazon-pay"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="header-login">
            <span
              className={
                this.props.language === LANGUAGE.VI
                  ? "language-vi active"
                  : "language"
              }
              onClick={() => this.changeLanguage(LANGUAGE.VI)}
            >
              VN
            </span>
            <span
              className={
                this.props.language === LANGUAGE.EN
                  ? "language-en active"
                  : "language"
              }
              onClick={() => this.changeLanguage(LANGUAGE.EN)}
            >
              EN
            </span>
            <a href="#" className="support">
              <i class="far fa-question-circle">
                <FormattedMessage id={"homeheader.support"} />
              </i>
            </a>
            <div className="avatar-user">
              {clientInfo && clientInfo !== null ? (
                <div>
                  Hello ! {this.props.clientInfo.firstName}
                  <div className="btn btn-logout" onClick={processLogout}>
                    <i className="fas fa-sign-out-alt"></i>
                  </div>
                </div>
              ) : (
                <Link to="/loginname">Login</Link>
              )}
            </div>
          </div>
        </div>
        <div className="header-navbar">
          <ul>
            <li className="navbar-item">
              <i class="fas fa-notes-medical"></i>
              <a href="#">
                <FormattedMessage id={"homeheader.speciality"} />
              </a>
            </li>
            <li className="navbar-item">
              <i class="fas fa-hospitals"></i>
              <i class="fas fa-hospital-alt"></i>
              <a href="#">
                {" "}
                <FormattedMessage id={"homeheader.health-facilities"} />
              </a>
            </li>
            <li className="navbar-item">
              <i class="fas fa-user-md"></i>

              <a href="#">
                <FormattedMessage id={"homeheader.doctor"} />
              </a>
            </li>
            <li className="navbar-item">
              <i class="fas fa-stethoscope"></i>
              <a href="#">
                <FormattedMessage id={"homeheader.call-speciality"} />
              </a>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginClient: state.user.isLoginClient,
    language: state.app.language,
    clientInfo: state.user.clientInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changelanguageAppRedux: (language) => dispatch(chengeLanguageApp(language)),
    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home_header);
