import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./CenterSession.scss";
import * as actions from "../../../store/actions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from "react-intl";
import { LANGUAGE } from "../../../utils";
import { chengeLanguageApp } from "../../../store/actions";

class CenterSession extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchAllDoctorStart();
    this.props.changelanguageAppRedux();
  }

  render() {
    let newdoctors = this.props.newDoctors;

    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <div className="selection-doctor">
          <h4>
            <FormattedMessage id={"center.search"} />
          </h4>
          <Slider {...settings}>
            {newdoctors &&
              newdoctors.length > 0 &&
              newdoctors.map((item) => {
                return (
                  <div className="slick-item">
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEaZBfm9unaOb8XySaJCZ8vw7aTCdmLZojBznpzP7nUikhETwAr707jfsvSGwSd117jh8&usqp=CAU" />
                    </a>
                    <div className="slick-information">
                      <span>
                        {" "}
                        {this.props.language === LANGUAGE.VI
                          ? item.firstName + item.lastName
                          : item.lastName + item.firstName}
                      </span>

                      <span>
                        {this.props.language === LANGUAGE.VI
                          ? item.positionData.valueVi
                          : item.positionData.valueEn}
                      </span>
                    </div>
                  </div>
                );
              })}

            {/* <div className="slick-item">
              <a href="#">
                <img src="https://www.onekeydata.com/images/uploads/opening/doctor_emails.png" />
              </a>{" "}
            </div>
            <div className="slick-item">
              <a href="#">
                <img src="https://www.healthecareers.com/binaries/content/gallery/healthecareers-us-en/article-features/2019/retireddoctor.jpg" />
              </a>{" "}
            </div>
            <div className="slick-item">
              <a href="#">
                <img src="https://forum.facmedicine.com/attachments/aba743607270cd81e7e36d064ffffab7-_-jpg.19083/" />
              </a>{" "}
            </div>
            <div className="slick-item">
              <a href="#">
                <img src="https://images.squarespace-cdn.com/content/v1/561feb4ee4b0de0eb30d6d3c/1547850788658-Q2DK9SKK3KVSM1QMVF21/femaledoctor.png?format=1500w" />
              </a>{" "}
            </div>
            <div className="slick-item">
              <a href="#">
                <img src="https://www.guelphfht.com/wp-content/uploads/2015/09/Female-Doctor-300x279.jpg" />
              </a>{" "}
            </div>
            <div className="slick-item">
              <a href="#">
                <img src="https://ak.picdn.net/shutterstock/videos/4520843/thumb/2.jpg" />
              </a>{" "}
            </div>
            <div className="slick-item">
              <a href="#">
                <img src="https://joanna678s.files.wordpress.com/2015/03/doctor.jpg" />
              </a>{" "}
            </div>
            <div className="slick-item">
              <a href="#">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftj1a4PyZZBfQv_B5mWWE_qzlkSrfTpfvGugcQIBAzIvv30o9zrUxMMlFC3kOdGnF0tM&usqp=CAU" />
              </a>{" "}
            </div>
            <div className="slick-item">
              <a href="#">
                <img src="https://www.riglocums.com/wp-content/uploads/2016/01/UK-Medical-staff.jpg" />
              </a>{" "}
            </div> */}
          </Slider>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    newDoctors: state.admin.doctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changelanguageAppRedux: (language) => dispatch(chengeLanguageApp(language)),
    fetchAllDoctorStart: () => dispatch(actions.fetchAllDoctorStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CenterSession);
