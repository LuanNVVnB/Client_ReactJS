import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./CenterSession.scss";
import * as actions from "../../../store/actions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class CenterSession extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
        };
        return (
            <Fragment>
                <div className="selection-specialty">
                    <div className="specialty-item1">
                        <Slider {...settings}>
                            <div className="slick-item">
                                <img src="https://patients.smarterhealth.sg/wp-content/uploads/2019/11/Smarter-Health-General-Practitioner-or-Specialist-Doctor.jpg" />

                            </div>
                            <div className="slick-item">
                                <img src="https://patients.smarterhealth.sg/wp-content/uploads/2019/11/Smarter-Health-General-Practitioner-or-Specialist-Doctor.jpg" />
                            </div>
                            <div className="slick-item">
                                <img src="https://patients.smarterhealth.sg/wp-content/uploads/2019/11/Smarter-Health-General-Practitioner-or-Specialist-Doctor.jpg" />
                            </div>
                            <div className="slick-item">
                                <img src="https://patients.smarterhealth.sg/wp-content/uploads/2019/11/Smarter-Health-General-Practitioner-or-Specialist-Doctor.jpg" />
                            </div>
                            <div className="slick-item">
                                <img src="https://patients.smarterhealth.sg/wp-content/uploads/2019/11/Smarter-Health-General-Practitioner-or-Specialist-Doctor.jpg" />
                            </div>
                            <div className="slick-item">
                                <img src="https://patients.smarterhealth.sg/wp-content/uploads/2019/11/Smarter-Health-General-Practitioner-or-Specialist-Doctor.jpg" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CenterSession);
