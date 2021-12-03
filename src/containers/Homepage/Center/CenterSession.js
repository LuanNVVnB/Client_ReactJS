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
import DoctorModel from "./DoctorModel";

class CenterSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
      detailDoctor: [],
    };
  }
  componentDidMount() {
    this.props.fetchAllDoctorStart();
    this.props.changelanguageAppRedux();
  }
  handleOnlick = async (idDoctor) => {
    try {
      await this.props.fetchOneDoctorStart(idDoctor);
      if (!this.props.isLoading) {
        this.setState({
          isOpenModal: true,
          detailDoctor: this.props.doctor,
        });
      }
    } catch (e) {
      console.log("errorr: ", e);
    }
  };
  toggleModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };

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
        {this.state.isOpenModal && (
          <DoctorModel
            detailDoctor={this.state.detailDoctor}
            isOpen={this.state.isOpenModal}
            toggleModal={this.toggleModal}
          />
        )}
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
                    <img
                      src={item.image}
                      onClick={() => {
                        this.handleOnlick(item.id);
                      }}
                    />
                    <div className="slick-information">
                      <span>
                        {" "}
                        {this.props.language === LANGUAGE.VI
                          ? item.firstName + " " + item.lastName + " "
                          : item.lastName + " " + item.firstName + " "}
                      </span>

                      <span>
                        (
                        {this.props.language === LANGUAGE.VI
                          ? item.positionData.valueVi
                          : item.positionData.valueEn}
                        )
                      </span>
                    </div>
                  </div>
                );
              })}
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
    doctor: state.admin.doctor,
    isLoading: state.admin.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changelanguageAppRedux: (language) => dispatch(chengeLanguageApp(language)),
    fetchAllDoctorStart: () => dispatch(actions.fetchAllDoctorStart()),
    fetchOneDoctorStart: (iddoctor) =>
      dispatch(actions.fetchOneDoctorStart(iddoctor)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CenterSession);
