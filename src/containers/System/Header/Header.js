import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions";

import "./Header.scss";
import { LANGUAGE } from "../../../utils";
import { chengeLanguageApp } from "../../../store/actions";
import { FormattedMessage } from "react-intl";
class Header extends Component {
  changeLanguage = (language) => {
    this.props.changelanguageAppRedux(language);
  };
  render() {
    const { processLogout, userInfo } = this.props;

    return (
      <div className="header-container">
        <div className="search-item"></div>
        <div className="header-welcome">
          <div className="welcome">
            <div className="title-welcome">
              <FormattedMessage id={"system.welcome"} />
            </div>
            <div className="user-welcome">
              {userInfo && userInfo.firstName ? userInfo.firstName : ""}
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
          </div>

          {/* nút logout */}
          <div className="btn btn-logout" onClick={processLogout}>
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changelanguageAppRedux: (language) => dispatch(chengeLanguageApp(language)),
    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
