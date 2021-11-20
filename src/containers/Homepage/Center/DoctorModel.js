import React, { Component, Fragment } from "react";
import "./DoctorModel.scss";

import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import * as actions from "../../../store/actions";
import { LANGUAGE } from "../../../utils";
import { chengeLanguageApp } from "../../../store/actions";

// import { Button, Modal } from "reactstrap";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";

class DoctorModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailDoctor: [],
      arrDays: [],
      isbreak: false,
    };
  }
  componentDidMount() {
    let { language } = this.props;
    this.DaysSelect(language);
    // this.props.fetchAllscheduleStart(this.state.detailDoctor, new Date());
    this.setState({
      detailDoctor: this.props.detailDoctor,
    });
  }
  toggle = () => {
    this.props.toggleModal();
    this.setState({
      isbreak: true,
    });
  };
  DaysSelect = (language) => {
    let arrDays = [];
    for (let i = 0; i < 7; i++) {
      let day = {};
      if (language === LANGUAGE.VI) {
        day.label = moment(new Date())
          .add(i, "days")
          .format("dddd(DD/MM/YYYY)");
      } else
        day.label = moment(new Date())
          .add(i, "days")
          .format("dddd(MM/DD/YYYY)");
      // day.value = moment(new Date()).add(i, "days").startOf("day").valueOf();
      day.value = moment(new Date()).add(i, "days").format("YYYY-MM-DD");
      arrDays.push(day);
    }
    this.setState({
      arrDays: arrDays,
    });
  };
  handleselectDays = async (event) => {
    console.log(event.target.value);
    await this.props.fetchAllscheduleStart(
      this.props.detailDoctor.id,
      event.target.value
    );
  };
  render() {
    let Doctor = this.state.detailDoctor;
    const detailDoctor = Doctor.Detail ? Doctor.Detail.contentHTML : "";
    let { arrDays, isbreak } = this.state;
    let { schedule } = this.props;

    return (
      <Fragment>
        <Modal
          isOpen={this.props.isOpen}
          detailDoctor={this.props.detailDoctor}
          toggle={() => {
            this.toggle();
          }}
          size="xl"
        >
          <ModalBody>
            <div className="information-doctor">
              <div className="avatar">
                <img src={Doctor.image} />
              </div>
              <div className="imformation">
                <div className="name-doctor">
                  <b>
                    <FormattedMessage id="name-doctor" />:
                    {this.props.language === LANGUAGE.VI
                      ? Doctor.firstName + Doctor.lastName
                      : Doctor.lastName + Doctor.firstName}
                  </b>
                </div>
                <div className="kill"></div>
                <div className="specalty"></div>
                {/* <div
                  className="desription-doctor"
                  dangerouslySetInnerHTML={{ __html: detailDoctor }}
                ></div> */}
                <div className="center">
                  <select onChange={(event) => this.handleselectDays(event)}>
                    {arrDays &&
                      arrDays.length > 0 &&
                      arrDays.map((item, index) => {
                        return (
                          <option value={item.value} key={index}>
                            {item.label}
                          </option>
                        );
                      })}
                  </select>
                  {schedule &&
                    isbreak == false &&
                    schedule.length > 0 &&
                    schedule.map((item, index) => {
                      return (
                        <button
                          className={
                            "btn-times " +
                            (item.isSelected == true ? "active" : "")
                          }
                          key={index}
                        >
                          {item.timeTypeData &&
                          this.props.language === LANGUAGE.VI
                            ? item.timeTypeData.valueVi
                            : item.timeTypeData.valueEn}
                        </button>
                      );
                    })}
                </div>
                <Button></Button>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.handleAddNewUser();
              }}
            >
              Booking
            </Button>
          </ModalFooter>
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorModel);
