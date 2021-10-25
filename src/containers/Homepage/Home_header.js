import React, { Component, Fragment } from "react";
import "./Home_header.scss";
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import { LANGUAGE } from "../../utils";
import { chengeLanguageApp } from "../../store/actions";


class Home_header extends Component {

    changeLanguage = (language) => {
        this.props.changelanguageAppRedux(language);

    }

    render() {
        console.log("check pros: ", this.props);
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
                        <span className={this.props.language === LANGUAGE.VI ? "language-vi active" : "language"} onClick={() => this.changeLanguage(LANGUAGE.VI)}>VN</span>
                        <span className={this.props.language === LANGUAGE.EN ? "language-en active" : "language"} onClick={() => this.changeLanguage(LANGUAGE.EN)}>EN</span>
                        <a href="#" className="support"><i class="far fa-question-circle"></i></a>
                        <a href="#" className="login">
                            <i class="fas fa-user"></i>
                        </a>

                    </div>
                </div>
                <div className="header-navbar">
                    <ul>
                        <li className="navbar-item">
                            <i class="fas fa-notes-medical"></i>
                            <a href="#"><FormattedMessage id={"homeheader.speciality"} /></a>
                        </li>
                        <li className="navbar-item">
                            <i class="fas fa-hospitals"></i>
                            <i class="fas fa-hospital-alt"></i>
                            <a href="#"> <FormattedMessage id={"homeheader.health-facilities"} /></a>
                        </li>
                        <li className="navbar-item">
                            <i class="fas fa-user-md"></i>

                            <a href="#"><FormattedMessage id={"homeheader.doctor"} /></a>
                        </li>
                        <li className="navbar-item">
                            <i class="fas fa-stethoscope"></i>
                            <a href="#"><FormattedMessage id={"homeheader.call-speciality"} /></a>
                        </li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changelanguageAppRedux: (language) => dispatch(chengeLanguageApp(language))


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home_header);
